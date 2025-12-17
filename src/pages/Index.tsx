import { useState, useMemo } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Filters } from "@/components/Filters";
import { AccountCard } from "@/components/AccountCard";
import { Footer } from "@/components/Footer";
import { accounts } from "@/data/accounts";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageProvider";
import { SlidersHorizontal } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Index = () => {
  const { t, language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [minTeamStrength, setMinTeamStrength] = useState(0);
  const [system, setSystem] = useState("all");
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [sortBy, setSortBy] = useState("featured");

  const resetFilters = () => {
    setSearchQuery("");
    setMinTeamStrength(0);
    setSystem("all");
    setVerifiedOnly(false);
    setSortBy("featured");
  };

  const filteredAccounts = useMemo(() => {
    let result = [...accounts];

    // Search filter - supports both English player names and Arabic search terms
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const arabicToEnglish: Record<string, string> = {
        "ميسي": "messi",
        "رونالدو": "ronaldo",
        "مبابي": "mbappé",
        "هالاند": "haaland",
      };
      const englishQuery = arabicToEnglish[query] || query;
      
      result = result.filter((account) =>
        account.players.some((player) =>
          player.name.toLowerCase().includes(englishQuery)
        ) || account.title.toLowerCase().includes(englishQuery)
      );
    }

    // Team strength filter
    result = result.filter((account) => account.teamStrength >= minTeamStrength);

    // System filter
    if (system !== "all") {
      result = result.filter((account) => account.system === system);
    }

    // Verified filter
    if (verifiedOnly) {
      result = result.filter((account) => account.verified);
    }

    // Sorting
    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "strength-high":
        result.sort((a, b) => b.teamStrength - a.teamStrength);
        break;
      case "strength-low":
        result.sort((a, b) => a.teamStrength - b.teamStrength);
        break;
      case "featured":
      default:
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }

    return result;
  }, [searchQuery, minTeamStrength, system, verifiedOnly, sortBy]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <Hero searchQuery={searchQuery} onSearchChange={setSearchQuery} />

        <section id="accounts" className="py-12 md:py-20">
          <div className="container">
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="font-heading text-3xl font-bold">
                  {t.accountsSection.title}
                </h2>
                <p className="mt-1 text-muted-foreground">
                  {filteredAccounts.length} {filteredAccounts.length === 1 ? t.accountsSection.foundSingular : t.accountsSection.found}
                </p>
              </div>
              
              {/* Mobile Filters Button */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="lg:hidden flex items-center gap-2">
                    <SlidersHorizontal className="h-4 w-4" />
                    {t.filters.title}
                  </Button>
                </SheetTrigger>
                <SheetContent side={language === 'ar' ? 'right' : 'left'} className="w-[300px] sm:w-[350px] overflow-y-auto">
                  <SheetHeader>
                    <SheetTitle>{t.filters.title}</SheetTitle>
                  </SheetHeader>
                  <div className="mt-6">
                    <Filters
                      minTeamStrength={minTeamStrength}
                      onMinTeamStrengthChange={setMinTeamStrength}
                      system={system}
                      onSystemChange={setSystem}
                      verifiedOnly={verifiedOnly}
                      onVerifiedOnlyChange={setVerifiedOnly}
                      sortBy={sortBy}
                      onSortByChange={setSortBy}
                      onReset={resetFilters}
                    />
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
              {/* Filters sidebar - Desktop */}
              <aside className="hidden lg:block">
                <div className="sticky top-24">
                  <Filters
                    minTeamStrength={minTeamStrength}
                    onMinTeamStrengthChange={setMinTeamStrength}
                    system={system}
                    onSystemChange={setSystem}
                    verifiedOnly={verifiedOnly}
                    onVerifiedOnlyChange={setVerifiedOnly}
                    sortBy={sortBy}
                    onSortByChange={setSortBy}
                    onReset={resetFilters}
                  />
                </div>
              </aside>

              {/* Account grid */}
              <div>
                {filteredAccounts.length > 0 ? (
                  <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                    {filteredAccounts.map((account, index) => (
                      <AccountCard key={account.id} account={account} index={index} />
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-card/50 py-20 text-center">
                    <div className="mb-4 text-6xl">🎮</div>
                    <h3 className="font-heading text-xl font-bold">{t.accountsSection.noAccounts}</h3>
                    <p className="mt-2 text-muted-foreground">
                      {t.accountsSection.noAccountsHint}
                    </p>
                    <Button
                      variant="outline"
                      className="mt-4"
                      onClick={resetFilters}
                    >
                      {t.accountsSection.resetFilters}
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
