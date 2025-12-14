import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageProvider";
import heroBg from "@/assets/hero-bg.jpg";

interface HeroProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function Hero({ searchQuery, onSearchChange }: HeroProps) {
  const { t, isRTL } = useLanguage();

  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="animate-fade-in font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            {t.hero.title}{" "}
            <span className="text-glow text-primary">{t.hero.titleBrand}</span>{" "}
            {t.hero.titleSuffix}
          </h1>

          <p
            className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground opacity-0 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            {t.hero.subtitle}
          </p>

          <div
            className="mx-auto mt-10 max-w-xl opacity-0 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative">
              <Search className={`absolute top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground ${isRTL ? "right-4" : "left-4"}`} />
              <Input
                type="text"
                placeholder={t.hero.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className={`h-14 rounded-full border-2 border-border bg-card/90 backdrop-blur-sm text-base shadow-lg transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 ${isRTL ? "pr-12 pl-32" : "pl-12 pr-32"}`}
              />
              <Button
                className={`absolute top-1/2 -translate-y-1/2 rounded-full px-6 font-semibold ${isRTL ? "left-2" : "right-2"}`}
                size="lg"
              >
                {t.hero.search}
              </Button>
            </div>
          </div>

          <div
            className="mt-8 flex flex-wrap items-center justify-center gap-4 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <span className="text-sm text-muted-foreground">{t.hero.popular}</span>
            {t.hero.popularPlayers.map((player) => (
              <button
                key={player}
                onClick={() => onSearchChange(player)}
                className="rounded-full border border-border bg-card/50 backdrop-blur-sm px-4 py-1.5 text-sm font-medium transition-all hover:border-primary hover:bg-primary/10 hover:text-primary"
              >
                {player}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}