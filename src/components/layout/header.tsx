"use client";

import Link from "next/link";
import { Music2 } from "lucide-react";
import { Button } from "@/components/ui/button";
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
            <Music2 className="h-4 w-4 text-primary-foreground" />
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
              <Link href="/login">Começar agora</Link>
            </Button>
          )}
        </nav>
      </div>
    </header>
  );
}
