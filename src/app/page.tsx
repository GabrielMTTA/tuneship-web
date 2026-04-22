import Link from "next/link";
import { ArrowRight, Shuffle, Shield, Zap, CheckCircle2, Music2 } from "lucide-react";
import { TuneShipLogo } from "@/components/ui/tuneship-logo";
import { FaSpotify, FaYoutube } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { DemoWidget } from "@/components/landing/demo-widget";
import { FlowSteps } from "@/components/landing/flow-steps";
import { WaitlistForm } from "@/components/landing/waitlist-form";

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

const mockTracks = [
  "Bring Me The Horizon - Throne",
  "Motionless In White - Disguise",
  "I Prevail - Bad Things",
  "Trivium - In Waves",
];

export default function LandingPage() {
  return (
    <div className="flex min-h-full flex-col">
      <Header />

      <main className="flex-1">

        {/* ── Hero ── */}
        <section className="mx-auto max-w-6xl px-6 py-12 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">

            {/* Esquerda — texto + widget */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary mb-5">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Spotify &amp; YouTube Music
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-foreground leading-tight sm:text-5xl lg:text-6xl">
                Suas playlists,
                <br />
                <span className="text-primary">sem fronteiras.</span>
              </h1>

              <p className="mt-4 text-base text-muted-foreground leading-relaxed sm:text-lg max-w-md">
                Cole suas músicas abaixo e veja como funciona.
                Só precisará fazer login para criar a playlist de verdade.
              </p>

              <div className="mt-6 sm:mt-8">
                <DemoWidget />
              </div>
            </div>

            {/* Direita — visual (só desktop) */}
            <div className="hidden lg:flex relative items-center justify-end">
              <div className="relative w-full max-w-sm rounded-3xl border border-border bg-card p-6 shadow-xl">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className="text-xs text-muted-foreground">Migração concluída</p>
                    <p className="font-semibold text-foreground">Minha Playlist</p>
                  </div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#1DB954]">
                    <FaSpotify className="h-5 w-5 text-white" />
                  </div>
                </div>
                <div className="mb-5">
                  <div className="flex justify-between text-xs text-muted-foreground mb-1.5">
                    <span>Taxa de sucesso</span>
                    <span className="font-medium text-primary">100%</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <div className="h-full w-full rounded-full bg-primary" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  {mockTracks.map((track) => (
                    <div key={track} className="flex items-center gap-2.5 rounded-xl bg-muted/50 px-3 py-2">
                      <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-primary" />
                      <span className="text-xs text-muted-foreground truncate">{track}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute -top-4 -right-2 flex items-center gap-2.5 rounded-2xl border border-border bg-white px-4 py-3 shadow-lg">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary/10">
                  <Music2 className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground">19 músicas</p>
                  <p className="text-[11px] text-muted-foreground">encontradas</p>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-2 flex items-center gap-2.5 rounded-2xl border border-border bg-white px-4 py-3 shadow-lg">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#FF0000]/10">
                  <FaYoutube className="h-4 w-4 text-[#FF0000]" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground">YouTube Music</p>
                  <p className="text-[11px] text-muted-foreground">também suportado</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ── Stats ── */}
        <section className="border-y border-border bg-card">
          <div className="mx-auto max-w-6xl px-6 py-8 sm:py-10">
            <div className="grid grid-cols-3 gap-4 text-center sm:gap-8">
              {[
                { value: "100%", label: "Taxa de sucesso nos testes" },
                { value: "2", label: "Plataformas suportadas" },
                { value: "<2s", label: "Tempo médio por música" },
              ].map(({ value, label }, idx, arr) => (
                <div key={label} className="flex flex-col items-center gap-1 relative">
                  {idx < arr.length - 1 && (
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 h-8 w-px bg-border" />
                  )}
                  <div className="text-2xl font-bold text-foreground sm:text-3xl">{value}</div>
                  <div className="text-xs text-muted-foreground sm:text-sm leading-tight">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Waitlist ── */}
        <section id="lista-de-espera" className="border-t border-border bg-card">
          <div className="mx-auto max-w-6xl px-6 py-14 sm:py-24">
            <div className="rounded-3xl border border-border bg-background p-8 sm:p-16 shadow-sm tuneship-glow">
              <div className="grid gap-10 lg:grid-cols-2 lg:items-start">

                {/* Esquerda — texto */}
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary mb-5">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                    Acesso antecipado
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                    Entre para o grupo de acesso antecipado
                  </h2>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed sm:text-base">
                    O TuneShip está passando pelo processo de revisão oficial do Spotify para liberar o app ao público. Enquanto isso, o acesso está disponível para um grupo pequeno de usuários — e você pode fazer parte dele.
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    Você receberá um e-mail assim que sua vaga for liberada.
                  </p>
                  <div className="mt-6 flex flex-col gap-2">
                    {[
                      "Acesso completo a todas as funcionalidades",
                      "Migração Spotify ↔ YouTube Music",
                      "Sem custos, sem anúncios",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direita — formulário */}
                <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <WaitlistForm />
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* ── Como funciona ── */}
        <section id="como-funciona" className="mx-auto max-w-6xl px-6 py-14 sm:py-24">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Como funciona</h2>
            <p className="mt-3 text-muted-foreground">Três passos. Sem complicação.</p>
          </div>

          {/* Desktop */}
          <FlowSteps />

          {/* Mobile */}
          <div className="flex flex-col gap-4 sm:hidden">
            {[
              { n: "1", title: "Cole suas músicas", desc: "Digite ou cole as músicas que deseja migrar",
                preview: (
                  <div className="rounded-xl border border-border bg-muted/40 p-3">
                    {["Artista - Música", "Artista - Música"].map((l, i) => (
                      <div key={i} className="flex items-center gap-2 py-1">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary/40" />
                        <span className="text-xs text-muted-foreground">{l}</span>
                      </div>
                    ))}
                  </div>
                ),
              },
              { n: "2", title: "Autorize sua conta", desc: "Escolha a plataforma e autorize via OAuth seguro",
                preview: (
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3 rounded-xl border border-border bg-muted/40 px-4 py-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1DB954] shrink-0">
                        <FaSpotify className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-sm font-medium">Spotify</span>
                    </div>
                    <div className="flex items-center gap-3 rounded-xl border border-border bg-muted/40 px-4 py-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FF0000] shrink-0">
                        <FaYoutube className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-sm font-medium">YouTube Music</span>
                    </div>
                  </div>
                ),
              },
              { n: "3", title: "Playlist criada!", desc: "Sua playlist criada automaticamente na plataforma",
                preview: (
                  <div className="rounded-xl border border-primary/20 bg-primary/5 px-4 py-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-primary">Migração concluída</span>
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary/60" />
                      <span className="text-xs text-muted-foreground">19 músicas encontradas — 100%</span>
                    </div>
                  </div>
                ),
              },
            ].map(({ n, title, desc, preview }, idx, arr) => (
              <div key={n} className="flex flex-col items-stretch">
                <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-[11px] font-bold text-white">{n}</span>
                    <span className="font-semibold">{title}</span>
                  </div>
                  {preview}
                  <p className="mt-3 text-xs text-muted-foreground">{desc}</p>
                </div>
                {idx < arr.length - 1 && (
                  <div className="flex w-full items-center justify-center py-3">
                    <ArrowRight className="h-5 w-5 rotate-90 text-primary/40" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── Features ── */}
        <section className="border-t border-border bg-card">
          <div className="mx-auto max-w-6xl px-6 py-14 sm:py-24">
            <div className="text-center mb-10 sm:mb-14">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Por que TuneShip?</h2>
              <p className="mt-3 text-muted-foreground">
                Construído com tecnologia sólida para garantir que nenhuma música se perca.
              </p>
            </div>
            <div className="grid gap-4 sm:gap-6 sm:grid-cols-3">
              {features.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex flex-col gap-3 rounded-2xl border border-border bg-background p-6 shadow-sm transition-shadow hover:shadow-md">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Plataformas ── */}
        <section className="mx-auto max-w-6xl px-6 py-14 sm:py-24 text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Plataformas suportadas</h2>
          <p className="mt-3 text-muted-foreground">Cada plataforma funciona de forma independente.</p>
          <div className="mt-8 sm:mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            {[
              { name: "Spotify", color: "bg-[#1DB954]", desc: "Migração via OAuth 2.0 oficial", Icon: FaSpotify },
              { name: "YouTube Music", color: "bg-[#FF0000]", desc: "Migração via Google API v3", Icon: FaYoutube },
            ].map(({ name, color, desc, Icon }) => (
              <div key={name} className="flex w-full max-w-xs flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 shadow-sm">
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
        </section>

        {/* ── CTA Final ── */}
        <section className="border-t border-border bg-card">
          <div className="mx-auto max-w-6xl px-6 py-14 sm:py-24 text-center">
            <div className="rounded-3xl border border-border bg-background p-8 sm:p-16 shadow-sm tuneship-glow">
              <TuneShipLogo className="mx-auto h-10 w-10 sm:h-12 sm:w-12 text-primary" />
              <h2 className="mt-5 text-2xl font-bold tracking-tight sm:mt-6 sm:text-4xl">
                Pronto para migrar suas playlists?
              </h2>
              <p className="mt-3 text-muted-foreground text-sm sm:text-base sm:mt-4">
                Gratuito, rápido e sem cadastro. Só autorize sua conta e envie o arquivo.
              </p>
              <Button size="lg" className="mt-8 sm:mt-10 rounded-xl gap-2 px-8 sm:px-10" asChild>
                <a href="#lista-de-espera">
                  Entrar na lista de espera
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
