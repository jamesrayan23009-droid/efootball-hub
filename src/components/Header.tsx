import { Gamepad2, ShoppingCart } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <Gamepad2 className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="font-heading text-2xl font-bold tracking-tight">
            eFootball<span className="text-primary">Market</span>
          </span>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#accounts"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Accounts
          </a>
          <a
            href="#featured"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Featured
          </a>
          <a
            href="#how-it-works"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            How It Works
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
              0
            </span>
          </Button>
          <Button className="hidden font-semibold sm:inline-flex">
            Sign In
          </Button>
        </div>
      </div>
    </header>
  );
}
