"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DemoWidget() {
  const router = useRouter();
  const [songs, setSongs] = useState("");
  const [playlistName, setPlaylistName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleDemo() {
    if (!songs.trim()) { setError("Adicione pelo menos uma música"); return; }
    if (!playlistName.trim()) { setError("Digite um nome para a playlist"); return; }
    setLoading(true);
    sessionStorage.setItem("tuneship_demo_songs", songs.trim());
    sessionStorage.setItem("tuneship_demo_playlist", playlistName.trim());
    router.push("/login");
  }

  return (
    <div className="flex flex-col gap-3">
      <textarea
        value={songs}
        onChange={(e) => { setSongs(e.target.value); setError(""); }}
        placeholder={"Artista - Música\nArtista - Música\nArtista - Música"}
        rows={4}
        className="w-full resize-none rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all leading-relaxed shadow-sm"
      />

      <div className="flex gap-2">
        <input
          type="text"
          value={playlistName}
          onChange={(e) => { setPlaylistName(e.target.value); setError(""); }}
          placeholder="Nome da playlist"
          className="flex-1 rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all shadow-sm"
        />
        <Button
          size="lg"
          className="rounded-xl gap-1.5 shrink-0"
          onClick={handleDemo}
          disabled={loading}
        >
          {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <><span>Criar</span><ArrowRight className="h-4 w-4" /></>}
        </Button>
      </div>

      {error && <p className="text-xs text-destructive">{error}</p>}

      <p className="text-xs text-muted-foreground">
        Uma música por linha · você só fará login para finalizar.
      </p>
    </div>
  );
}
