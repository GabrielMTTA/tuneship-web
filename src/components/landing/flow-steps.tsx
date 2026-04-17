"use client";

import { useEffect, useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { FaSpotify, FaYoutube } from "react-icons/fa";

const platforms = [
  { name: "Spotify",       bg: "bg-[#1DB954]", Icon: FaSpotify, label: "Abrir no Spotify" },
  { name: "YouTube Music", bg: "bg-[#FF0000]", Icon: FaYoutube, label: "Abrir no YouTube Music" },
];

export function FlowSteps() {
  const [platformIdx, setPlatformIdx] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setPlatformIdx((i) => (i + 1) % platforms.length);
        setFade(true);
      }, 300);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const platform = platforms[platformIdx];

  return (
    <div className="hidden sm:grid grid-cols-[1fr_40px_1fr_40px_1fr] items-stretch gap-0">

      {/* Step 1 */}
      <div className="flex flex-col rounded-2xl border border-border bg-card p-5 shadow-sm">
        <div className="mb-4 flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-[11px] font-bold text-white">1</span>
          <span className="text-sm font-semibold">Cole suas músicas</span>
        </div>
        <div className="flex-1 rounded-xl border border-border bg-muted/40 p-3">
          {["Artista - Música", "Artista - Música", "Artista - Música"].map((line, i) => (
            <div key={i} className="flex items-center gap-2 py-1">
              <div className="h-1.5 w-1.5 rounded-full bg-primary/40 shrink-0" />
              <span className="text-[11px] text-muted-foreground">{line}</span>
            </div>
          ))}
        </div>
        <div className="mt-3 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
          <span className="text-[11px] font-medium text-primary">Nome da playlist</span>
        </div>
        <p className="mt-3 text-xs text-muted-foreground text-center">Digite ou cole as músicas que deseja migrar</p>
      </div>

      {/* Seta 1 */}
      <div className="flex items-center justify-center">
        <ArrowRight className="h-5 w-5 text-primary/40" />
      </div>

      {/* Step 2 */}
      <div className="flex flex-col rounded-2xl border border-border bg-card p-5 shadow-sm">
        <div className="mb-4 flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-[11px] font-bold text-white">2</span>
          <span className="text-sm font-semibold">Autorize sua conta</span>
        </div>
        <div className="flex flex-1 flex-col justify-center gap-3">
          <div className="flex items-center gap-3 rounded-xl border border-border bg-muted/40 px-4 py-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1DB954] shrink-0">
              <FaSpotify className="h-4 w-4 text-white" />
            </div>
            <div>
              <p className="text-[11px] font-semibold text-foreground">Spotify</p>
              <p className="text-[10px] text-muted-foreground">Continuar com Spotify</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="h-px flex-1 bg-border" />
            <span className="text-[10px] text-muted-foreground">ou</span>
            <div className="h-px flex-1 bg-border" />
          </div>
          <div className="flex items-center gap-3 rounded-xl border border-border bg-muted/40 px-4 py-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FF0000] shrink-0">
              <FaYoutube className="h-4 w-4 text-white" />
            </div>
            <div>
              <p className="text-[11px] font-semibold text-foreground">YouTube Music</p>
              <p className="text-[10px] text-muted-foreground">Continuar com Google</p>
            </div>
          </div>
        </div>
        <p className="mt-3 text-xs text-muted-foreground text-center">Escolha a plataforma e autorize via OAuth seguro</p>
      </div>

      {/* Seta 2 */}
      <div className="flex items-center justify-center">
        <ArrowRight className="h-5 w-5 text-primary/40" />
      </div>

      {/* Step 3 */}
      <div className="flex flex-col rounded-2xl border border-border bg-card p-5 shadow-sm">
        <div className="mb-4 flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-[11px] font-bold text-white">3</span>
          <span className="text-sm font-semibold">Playlist criada!</span>
        </div>
        <div className="flex-1 rounded-xl border border-primary/20 bg-primary/5 p-3 mb-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-medium text-primary">Migração concluída</span>
            <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
          </div>
          {["Throne", "Disguise", "In Waves"].map((t) => (
            <div key={t} className="flex items-center gap-1.5 py-0.5">
              <CheckCircle2 className="h-3 w-3 shrink-0 text-primary/60" />
              <span className="text-[11px] text-muted-foreground">{t}</span>
            </div>
          ))}
        </div>

        {/* Botão animado */}
        <div
          className={`h-8 rounded-lg flex items-center justify-center gap-1.5 transition-all duration-300 ${platform.bg} ${fade ? "opacity-100" : "opacity-0"}`}
        >
          <platform.Icon className="h-3.5 w-3.5 text-white" />
          <span className="text-[11px] font-medium text-white">{platform.label}</span>
        </div>

        <p className="mt-3 text-xs text-muted-foreground text-center">Sua playlist criada automaticamente na plataforma</p>
      </div>

    </div>
  );
}
