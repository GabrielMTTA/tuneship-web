"use client";

import { useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Loader2, Music2, CheckCircle2, XCircle } from "lucide-react";
import { useAuthStore } from "@/store/auth-store";
import { Suspense } from "react";

function CallbackHandler() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { setTokens } = useAuthStore();
  const processed = useRef(false);

  useEffect(() => {
    if (processed.current) return;
    processed.current = true;

    const access_token = searchParams.get("access_token");
    const refresh_token = searchParams.get("refresh_token");
    const expires_in = searchParams.get("expires_in");
    const platform = searchParams.get("platform");
    const error = searchParams.get("error");

    if (error || !access_token || !refresh_token || !platform) {
      setTimeout(() => router.replace("/login"), 2000);
      return;
    }

    setTokens(
      platform as "spotify" | "youtube_music",
      access_token,
      refresh_token,
      Number(expires_in ?? 3600)
    );

    // Salva access_token em sessionStorage (não persiste entre abas/janelas)
    sessionStorage.setItem("tuneship_access_token", access_token);

    setTimeout(() => router.replace("/dashboard"), 1000);
  }, [searchParams, router, setTokens]);

  const error = searchParams.get("error");

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-background px-6">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary tuneship-glow">
        <Music2 className="h-8 w-8 text-primary-foreground" />
      </div>

      {error ? (
        <>
          <XCircle className="h-8 w-8 text-destructive" />
          <div className="text-center">
            <h1 className="text-xl font-bold">Autorização negada</h1>
            <p className="mt-2 text-sm text-muted-foreground">Redirecionando para o login...</p>
          </div>
        </>
      ) : (
        <>
          <div className="flex items-center gap-3">
            <Loader2 className="h-5 w-5 animate-spin text-primary" />
            <span className="text-sm text-muted-foreground">Conectando sua conta...</span>
          </div>
          <CheckCircle2 className="h-8 w-8 text-primary animate-pulse" />
          <div className="text-center">
            <h1 className="text-xl font-bold">Conta conectada!</h1>
            <p className="mt-2 text-sm text-muted-foreground">Redirecionando para a dashboard...</p>
          </div>
        </>
      )}
    </div>
  );
}

export default function CallbackPage() {
  return (
    <Suspense>
      <CallbackHandler />
    </Suspense>
  );
}
