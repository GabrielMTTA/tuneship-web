import Link from "next/link";
import { ArrowRight, Music2, Shuffle, Shield, Zap, CheckCircle2 } from "lucide-react";
import { TuneShipLogo } from "@/components/ui/tuneship-logo";
import { FaSpotify, FaYoutube } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const features = [
  {
    icon: Shuffle,
    title: "Migração inteligente",
    description:
      "Algoritmo de fuzzy matching encontra suas músicas mesmo com títulos levemente diferentes entre plataformas.",
  },
  {
    icon: Zap,
    title: "Rápido e assíncrono",
    description:
      "Processamento em background com Celery. Envie seu arquivo e acompanhe o progresso em tempo real.",
  },
  {
    icon: Shield,
    title: "Seguro de ponta a ponta",
    description:
      "OAuth 2.0 com Spotify e Google. Seus dados nunca são armazenados. Conexão HTTPS obrigatória.",
  },
];

const steps = [
  { step: "01", title: "Escolha a plataforma", description: "Spotify ou YouTube Music — você decide." },
  { step: "02", title: "Envie sua playlist", description: "Arquivo .txt simples com artista e música." },
  { step: "03", title: "Pronto", description: "Sua playlist criada automaticamente na plataforma." },
];

export default function LandingPage() {
  return (
    <div className="flex min-h-full flex-col">
      <Header />

      <main className="flex-1">
        {/* ── Hero ── */}
        <section className="relative mx-auto max-w-6xl px-6 pb-24 pt-20 text-center">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-96 tuneship-gradient"
          />

          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Spotify &amp; YouTube Music
          </div>

          <h1 className="mt-6 text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl [text-shadow:0_2px_16px_rgba(0,0,0,0.20)]">
            Suas playlists,
            <br />
            <span className="text-primary">sem fronteiras.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Migre suas músicas favoritas entre plataformas em segundos.
            Simples, rápido e seguro — sem perder nenhuma faixa.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="rounded-xl gap-2 px-8" asChild>
              <Link href="/login">
                Começar agora
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-xl px-8" asChild>
              <Link href="#como-funciona">Ver como funciona</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 border-t border-border pt-10">
            {[
              { value: "100%", label: "Taxa de sucesso nos testes" },
              { value: "2", label: "Plataformas suportadas" },
              { value: "<2s", label: "Tempo médio por música" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-3xl font-bold text-foreground">{value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Como funciona ── */}
        <section id="como-funciona" className="border-t border-border bg-card">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight">Como funciona</h2>
              <p className="mt-3 text-muted-foreground">Três passos. Sem complicação.</p>
            </div>

            <div className="mt-16 grid gap-8 sm:grid-cols-3">
              {steps.map(({ step, title, description }) => (
                <div
                  key={step}
                  className="relative flex flex-col gap-4 rounded-2xl border border-border bg-background p-8 shadow-sm"
                >
                  <span className="text-5xl font-bold text-primary/50">{step}</span>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="text-sm text-muted-foreground">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Features ── */}
        <section className="mx-auto max-w-6xl px-6 py-24">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">Por que TuneShip?</h2>
            <p className="mt-3 text-muted-foreground">
              Construído com tecnologia sólida para garantir que nenhuma música se perca.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            {features.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="group flex flex-col gap-4 rounded-2xl border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Plataformas ── */}
        <section className="border-t border-border bg-card">
          <div className="mx-auto max-w-6xl px-6 py-24 text-center">
            <h2 className="text-3xl font-bold tracking-tight">Plataformas suportadas</h2>
            <p className="mt-3 text-muted-foreground">
              Cada plataforma funciona de forma independente.
            </p>

            <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
              {[
                { name: "Spotify", color: "bg-[#1DB954]", desc: "Migração via OAuth 2.0 oficial", Icon: FaSpotify },
                { name: "YouTube Music", color: "bg-[#FF0000]", desc: "Migração via Google API v3", Icon: FaYoutube },
              ].map(({ name, color, desc, Icon }) => (
                <div
                  key={name}
                  className="flex w-full max-w-xs flex-col items-center gap-3 rounded-2xl border border-border bg-background p-8 shadow-sm"
                >
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${color}`}>
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-semibold">{name}</h3>
                  <p className="text-xs text-muted-foreground">{desc}</p>
                  <div className="flex items-center gap-1.5 text-xs text-primary">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    Disponível
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA Final ── */}
        <section className="mx-auto max-w-6xl px-6 py-24 text-center">
          <div className="rounded-3xl border border-border bg-card p-16 shadow-sm tuneship-glow">
            <TuneShipLogo className="mx-auto h-12 w-12 text-primary" />
            <h2 className="mt-6 text-4xl font-bold tracking-tight">
              Pronto para migrar suas playlists?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Gratuito, rápido e sem cadastro. Só autorize sua conta e envie o arquivo.
            </p>
            <Button size="lg" className="mt-10 rounded-xl gap-2 px-10" asChild>
              <Link href="/login">
                Começar agora
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
