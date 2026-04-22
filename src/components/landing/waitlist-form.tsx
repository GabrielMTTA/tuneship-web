"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { joinWaitlist } from "@/lib/api";

type Field = { name: string; contact_email: string; spotify_email: string };
type State = "idle" | "loading" | "success" | "error";

export function WaitlistForm() {
  const [fields, setFields] = useState<Field>({ name: "", contact_email: "", spotify_email: "" });
  const [sameEmail, setSameEmail] = useState(false);
  const [state, setState] = useState<State>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function set(key: keyof Field, value: string) {
    setFields((f) => ({ ...f, [key]: value }));
    if (state === "error") setState("idle");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!fields.name.trim() || !fields.contact_email.trim() || !fields.spotify_email.trim()) {
      setState("error");
      setErrorMsg("Preencha todos os campos.");
      return;
    }
    setState("loading");
    try {
      await joinWaitlist({
        name: fields.name.trim(),
        contact_email: fields.contact_email.trim(),
        spotify_email: sameEmail ? fields.contact_email.trim() : fields.spotify_email.trim(),
      });
      setState("success");
    } catch (err: unknown) {
      setState("error");
      setErrorMsg(err instanceof Error ? err.message : "Erro ao enviar. Tente novamente.");
    }
  }

  if (state === "success") {
    return (
      <div className="flex flex-col items-center gap-4 py-4 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
          <CheckCircle2 className="h-7 w-7 text-primary" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground text-lg">Você está na lista!</h3>
          <p className="mt-1 text-sm text-muted-foreground max-w-sm">
            Assim que uma vaga abrir, você será o primeiro a saber. Enquanto isso, veja como o TuneShip funciona abaixo.
          </p>
        </div>
        <a
          href="#como-funciona"
          className="text-sm text-primary hover:underline mt-1"
        >
          ↓ Ver como funciona
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {/* Nome */}
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-medium text-foreground">Nome</label>
        <input
          type="text"
          value={fields.name}
          onChange={(e) => set("name", e.target.value)}
          placeholder="Seu nome"
          className="rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
        />
      </div>

      {/* E-mail de contato */}
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-medium text-foreground">E-mail de contato</label>
        <input
          type="email"
          value={fields.contact_email}
          onChange={(e) => set("contact_email", e.target.value)}
          placeholder="voce@exemplo.com"
          className="rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
        />
        <p className="text-[11px] text-muted-foreground">Onde você quer receber o aviso quando sua vaga abrir.</p>
      </div>

      {/* Mesmo e-mail checkbox */}
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          checked={sameEmail}
          onChange={(e) => setSameEmail(e.target.checked)}
          className="h-4 w-4 rounded accent-primary"
        />
        <span className="text-xs text-muted-foreground">Meu e-mail de contato é o mesmo do Spotify</span>
      </label>

      {/* E-mail do Spotify */}
      {!sameEmail && (
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-foreground">E-mail cadastrado no Spotify</label>
          <input
            type="email"
            value={fields.spotify_email}
            onChange={(e) => set("spotify_email", e.target.value)}
            placeholder="mesmo e-mail que você usa para entrar no Spotify"
            className="rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
          />
          <p className="text-[11px] text-muted-foreground">
            Precisamos desse dado para liberar seu acesso manualmente no Spotify.{" "}
            <a
              href="https://www.spotify.com/account/overview/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-0.5 text-primary hover:underline"
            >
              Não sabe qual é? Confira aqui
              <ExternalLink className="h-3 w-3" />
            </a>
          </p>
        </div>
      )}

      {/* Error */}
      {state === "error" && (
        <p className="text-xs text-destructive">{errorMsg}</p>
      )}

      <Button
        type="submit"
        size="lg"
        className="w-full rounded-xl mt-1"
        disabled={state === "loading"}
      >
        {state === "loading" ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          "Entrar na lista de espera"
        )}
      </Button>
    </form>
  );
}
