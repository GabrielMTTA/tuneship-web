"use client";

import { useState } from "react";
import { Music2, ArrowRight, Loader2 } from "lucide-react";
import { FaSpotify, FaYoutube } from "react-icons/fa";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { getAuthUrl } from "@/lib/api";
import type { Platform } from "@/types";

const platforms = [
  {
    id: "spotify" as Platform,
    name: "Spotify",
    description: "Conecte com sua conta Spotify",
    bg: "bg-[#1DB954]",
    textColor: "text-[#1DB954]",
    borderColor: "border-[#1DB954]/30 hover:border-[#1DB954]",
    Icon: FaSpotify,
  },
  {
    id: "youtube_music" as Platform,
    name: "YouTube Music",
    description: "Conecte com sua conta Google",
    bg: "bg-[#FF0000]",
    textColor: "text-[#FF0000]",
    borderColor: "border-[#FF0000]/30 hover:border-[#FF0000]",
    Icon: FaYoutube,
  },
];

export default function LoginPage() {
  const [loading, setLoading] = useState<Platform | null>(null);

  async function handleLogin(platform: Platform) {
    setLoading(platform);
    try {
      const { auth_url } = await getAuthUrl(platform);
      window.location.href = auth_url;
    } catch {
      setLoading(null);
    }
  }

  return (
    <div className="flex min-h-full flex-col">
      <Header />

      <main className="flex flex-1 items-center justify-center px-6 py-24">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="mb-10 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary shadow-sm tuneship-glow">
              <Music2 className="h-7 w-7 text-primary-foreground" />
            </div>
            <h1 className="text-2xl font-bold tracking-tight">Escolha a plataforma</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Selecione onde deseja criar sua playlist.
            </p>
          </div>

          {/* Plataformas */}
          <div className="flex flex-col gap-4">
            {platforms.map(({ id, name, description, bg, textColor, borderColor, Icon }) => (
              <button
                key={id}
                onClick={() => handleLogin(id)}
                disabled={loading !== null}
                className={`group flex w-full items-center gap-4 rounded-2xl border-2 bg-card p-5 text-left transition-all ${borderColor} disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${bg}`}>
                  {loading === id ? (
                    <Loader2 className="h-5 w-5 animate-spin text-white" />
                  ) : (
                    <Icon className="h-6 w-6 text-white" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-foreground">{name}</div>
                  <div className="text-xs text-muted-foreground">{description}</div>
                </div>
                <ArrowRight className={`h-4 w-4 transition-transform group-hover:translate-x-1 ${textColor}`} />
              </button>
            ))}
          </div>

          <p className="mt-8 text-center text-xs text-muted-foreground">
            Ao continuar, você autoriza o TuneShip a criar playlists em seu nome.
            <br />
            Seus dados nunca são armazenados.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
