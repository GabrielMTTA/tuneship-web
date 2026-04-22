import Link from "next/link";
import { TuneShipLogo } from "@/components/ui/tuneship-logo";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <Link href="/" className="flex items-center gap-2 text-sm text-muted-foreground">
          <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-primary">
            <TuneShipLogo className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="font-medium text-foreground">TuneShip</span>
          <span>— Suas playlists, sem fronteiras.</span>
        </Link>
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <Link href="/privacy" className="hover:text-foreground transition-colors">
            Privacidade
          </Link>
          <span>·</span>
          <Link href="/terms" className="hover:text-foreground transition-colors">
            Termos
          </Link>
          <span>·</span>
          <span>© {new Date().getFullYear()} TuneShip. Todos os direitos reservados.</span>
        </div>
      </div>
    </footer>
  );
}
