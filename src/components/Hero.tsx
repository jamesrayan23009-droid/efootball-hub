import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface HeroProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function Hero({ searchQuery, onSearchChange }: HeroProps) {
  return (
    <section className="relative overflow-hidden gradient-hero py-20 md:py-32">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute -right-1/4 bottom-0 h-[400px] w-[400px] rounded-full bg-accent/10 blur-[100px]" />
      </div>

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
            Premium{" "}
            <span className="text-glow text-primary">eFootball</span>{" "}
            Accounts
          </h1>

          <p
            className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground opacity-0 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            Find your perfect team with top-rated players, high team strength,
            and legendary cards. Trade safely with our verified marketplace.
          </p>

          <div
            className="mx-auto mt-10 max-w-xl opacity-0 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search by player name (e.g., Messi, Ronaldo, Mbappé)..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="h-14 rounded-full border-2 border-border bg-card pl-12 pr-32 text-base shadow-lg transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
              <Button
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full px-6 font-semibold"
                size="lg"
              >
                Search
              </Button>
            </div>
          </div>

          <div
            className="mt-8 flex flex-wrap items-center justify-center gap-4 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <span className="text-sm text-muted-foreground">Popular:</span>
            {["Messi", "Ronaldo", "Mbappé", "Haaland"].map((player) => (
              <button
                key={player}
                onClick={() => onSearchChange(player)}
                className="rounded-full border border-border bg-card/50 px-4 py-1.5 text-sm font-medium transition-all hover:border-primary hover:bg-primary/10 hover:text-primary"
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
