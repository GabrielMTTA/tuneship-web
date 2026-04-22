"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TuneShipLogo } from "@/components/ui/tuneship-logo";
import { useAuthStore } from "@/store/auth-store";

export function Header() {
  const { isAuthenticated, clearAuth } = useAuthStore();
  const authenticated = isAuthenticated();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-semibold text-foreground">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary">
            <TuneShipLogo className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-lg tracking-tight">TuneShip</span>
        </Link>

        {/* Nav */}
        <nav className="flex items-center gap-3">
          {authenticated ? (
            <>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/dashboard">Dashboard</Link>
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={clearAuth}
              >
                Sair
              </Button>
            </>
          ) : (
            <Button size="sm" asChild className="rounded-xl">
              <a href="/#lista-de-espera">Entrar na lista</a>
            </Button>
          )}
        </nav>
      </div>
    </header>
  );
}
