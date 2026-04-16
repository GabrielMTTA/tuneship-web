"use client";

import { useState, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import {
  Upload, Music2, CheckCircle2, XCircle, AlertCircle,
  Loader2, ExternalLink, LogOut, FolderOpen
} from "lucide-react";
import { FaSpotify, FaYoutube } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/store/auth-store";
import { uploadPlaylist, getTaskStatus } from "@/lib/api";
import type { TaskStatus, TrackResult } from "@/types";

const PLATFORM_CONFIG = {
  spotify: {
    name: "Spotify",
    Icon: FaSpotify,
    color: "text-[#1DB954]",
    bg: "bg-[#1DB954]",
    lightBg: "bg-[#1DB954]/10",
  },
  youtube_music: {
    name: "YouTube Music",
    Icon: FaYoutube,
    color: "text-[#FF0000]",
    bg: "bg-[#FF0000]",
    lightBg: "bg-[#FF0000]/10",
  },
};

type Step = "upload" | "processing" | "done";

export default function DashboardPage() {
  const router = useRouter();
  const { platform, accessToken, clearAuth, isAuthenticated } = useAuthStore();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [step, setStep] = useState<Step>("upload");
  const [file, setFile] = useState<File | null>(null);
  const [playlistName, setPlaylistName] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [taskResult, setTaskResult] = useState<TaskStatus | null>(null);

  // Redirect if not authenticated
  if (!isAuthenticated() || !platform) {
    router.replace("/login");
    return null;
  }

  const config = PLATFORM_CONFIG[platform];
  const token = typeof window !== "undefined"
    ? sessionStorage.getItem("tuneship_access_token") ?? accessToken ?? ""
    : accessToken ?? "";

  // ── File handling ──
  const handleFile = (f: File) => {
    if (!f.name.endsWith(".txt")) {
      setError("Por favor, envie um arquivo .txt");
      return;
    }
    setFile(f);
    setError(null);
    if (!playlistName) {
      setPlaylistName(f.name.replace(".txt", ""));
    }
  };

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const f = e.dataTransfer.files[0];
    if (f) handleFile(f);
  }, []);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  // ── Submit ──
  async function handleSubmit() {
    if (!file || !playlistName.trim() || !token) return;

    setIsLoading(true);
    setError(null);

    try {
      const { task_id } = await uploadPlaylist(token, platform!, file, playlistName.trim());
      setStep("processing");

      // Poll for result
      const poll = async () => {
        const status = await getTaskStatus(task_id);
        if (status.status === "completed" || status.status === "failed") {
          setTaskResult(status);
          setStep("done");
          setIsLoading(false);
        } else {
          setTimeout(poll, 2000);
        }
      };
      poll();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao enviar playlist");
      setIsLoading(false);
    }
  }

  function handleLogout() {
    clearAuth();
    sessionStorage.removeItem("tuneship_access_token");
    router.replace("/login");
  }

  function handleReset() {
    setStep("upload");
    setFile(null);
    setPlaylistName("");
    setTaskResult(null);
    setError(null);
  }

  const result = taskResult?.result;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary">
              <Music2 className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-semibold">TuneShip</span>
          </div>

          <div className="flex items-center gap-3">
            {/* Platform badge */}
            <div className={`flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium ${config.lightBg} ${config.color}`}>
              <config.Icon className="h-3.5 w-3.5" />
              {config.name}
            </div>

            <Button variant="ghost" size="sm" onClick={handleLogout} className="gap-2">
              <LogOut className="h-4 w-4" />
              Sair
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-2xl px-6 py-12">

        {/* ── Step: Upload ── */}
        {step === "upload" && (
          <div className="flex flex-col gap-6">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Nova migração</h1>
              <p className="mt-1 text-sm text-muted-foreground">
                Envie seu arquivo .txt e crie sua playlist no {config.name}.
              </p>
            </div>

            {/* Drop zone */}
            <div
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={() => setIsDragging(false)}
              onClick={() => fileInputRef.current?.click()}
              className={`relative flex cursor-pointer flex-col items-center justify-center gap-4 rounded-2xl border-2 border-dashed p-12 transition-all ${
                isDragging
                  ? "border-primary bg-accent"
                  : file
                  ? "border-primary/50 bg-accent/50"
                  : "border-border hover:border-primary/50 hover:bg-accent/30"
              }`}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept=".txt"
                className="hidden"
                onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
              />

              {file ? (
                <>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                    <CheckCircle2 className="h-7 w-7 text-primary" />
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-foreground">{file.name}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {(file.size / 1024).toFixed(1)} KB · Clique para trocar
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-muted">
                    <Upload className="h-7 w-7 text-muted-foreground" />
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-foreground">Arraste seu arquivo aqui</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      ou clique para selecionar · apenas .txt
                    </p>
                  </div>
                </>
              )}
            </div>

            {/* Playlist name */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-foreground">
                Nome da playlist
              </label>
              <input
                type="text"
                value={playlistName}
                onChange={(e) => setPlaylistName(e.target.value)}
                placeholder="Ex: Minhas favoritas 2024"
                className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>

            {/* Error */}
            {error && (
              <div className="flex items-center gap-2 rounded-xl bg-destructive/10 px-4 py-3 text-sm text-destructive">
                <AlertCircle className="h-4 w-4 shrink-0" />
                {error}
              </div>
            )}

            {/* Submit */}
            <Button
              size="lg"
              className="w-full rounded-xl"
              disabled={!file || !playlistName.trim() || isLoading}
              onClick={handleSubmit}
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  <config.Icon className="h-4 w-4" />
                  Criar no {config.name}
                </>
              )}
            </Button>
          </div>
        )}

        {/* ── Step: Processing ── */}
        {step === "processing" && (
          <div className="flex flex-col items-center gap-8 py-12 text-center">
            <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl bg-primary/10">
              <config.Icon className={`h-10 w-10 ${config.color}`} />
              <div className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-background">
                <Loader2 className="h-4 w-4 animate-spin text-primary" />
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold">Processando sua playlist</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Estamos buscando cada música no {config.name}.<br />
                Isso pode levar alguns segundos...
              </p>
            </div>
            <div className="flex gap-1.5">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="h-2 w-2 rounded-full bg-primary animate-bounce"
                  style={{ animationDelay: `${i * 0.15}s` }}
                />
              ))}
            </div>
          </div>
        )}

        {/* ── Step: Done ── */}
        {step === "done" && result && (
          <div className="flex flex-col gap-6">
            {/* Summary */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-3">
                {result.success_rate === 100 ? (
                  <CheckCircle2 className="h-8 w-8 text-primary" />
                ) : result.success_rate >= 70 ? (
                  <AlertCircle className="h-8 w-8 text-yellow-500" />
                ) : (
                  <XCircle className="h-8 w-8 text-destructive" />
                )}
                <div>
                  <h2 className="text-xl font-bold">
                    {result.success_rate === 100
                      ? "Migração concluída!"
                      : `${result.found} de ${result.total} músicas encontradas`}
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Taxa de sucesso: {result.success_rate.toFixed(0)}%
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="mt-6 grid grid-cols-3 gap-4">
                {[
                  { label: "Encontradas", value: result.found, color: "text-primary" },
                  { label: "Não encontradas", value: result.not_found, color: "text-yellow-500" },
                  { label: "Erros", value: result.errors, color: "text-destructive" },
                ].map(({ label, value, color }) => (
                  <div key={label} className="rounded-xl bg-muted/50 p-4 text-center">
                    <div className={`text-2xl font-bold ${color}`}>{value}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{label}</div>
                  </div>
                ))}
              </div>

              {/* Playlist link */}
              {result.playlist_url && (
                <a
                  href={result.playlist_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-6 flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 ${config.bg}`}
                >
                  <config.Icon className="h-4 w-4" />
                  Abrir no {config.name}
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
            </div>

            {/* Track list */}
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                Detalhes das músicas
              </h3>
              <div className="flex flex-col gap-2">
                {result.tracks.map((track: TrackResult, i: number) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 rounded-xl border border-border bg-card p-4"
                  >
                    {track.status === "found" ? (
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                    ) : track.status === "not_found" ? (
                      <AlertCircle className="h-4 w-4 shrink-0 text-yellow-500" />
                    ) : (
                      <XCircle className="h-4 w-4 shrink-0 text-destructive" />
                    )}
                    <span className="flex-1 text-sm text-foreground">{track.raw_input}</span>
                    {track.confidence > 0 && (
                      <span className="text-xs text-muted-foreground">
                        {(track.confidence * 100).toFixed(0)}%
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <Button variant="outline" className="flex-1 rounded-xl" onClick={handleReset}>
                <FolderOpen className="h-4 w-4" />
                Nova migração
              </Button>
              <Button variant="ghost" className="rounded-xl" onClick={handleLogout}>
                <LogOut className="h-4 w-4" />
                Sair
              </Button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
