import { Gamepad2, ShoppingCart } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageProvider";

export function Header() {
  const { t, isRTL } = useLanguage();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <Gamepad2 className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="font-heading text-2xl font-bold tracking-tight">
            {t.header.brand}<span className="text-primary">{t.header.brandSuffix}</span>
          </span>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="/#accounts"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            {t.header.accounts}
          </a>
          <a
            href="/#featured"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            {t.header.featured}
          </a>
          <a
            href="/#how-it-works"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            {t.header.howItWorks}
          </a>
          <a
            href="/proofs"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            {t.header.proofs}
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            <span className={`absolute -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground ${isRTL ? "-left-1" : "-right-1"}`}>
              0
            </span>
          </Button>
          <Button className="hidden font-semibold sm:inline-flex">
            {t.header.signIn}
          </Button>
        </div>
      </div>
    </header>
  );
}