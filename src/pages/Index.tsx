import { useState, useMemo } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Filters } from "@/components/Filters";
import { AccountCard } from "@/components/AccountCard";
import { Footer } from "@/components/Footer";
import { accounts } from "@/data/accounts";
import { Button } from "@/components/ui/button";
import { LayoutGrid, List } from "lucide-react";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [minTeamStrength, setMinTeamStrength] = useState(0);
  const [platform, setPlatform] = useState("all");
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [sortBy, setSortBy] = useState("featured");

  const resetFilters = () => {
    setSearchQuery("");
    setMinTeamStrength(0);
    setPlatform("all");
    setVerifiedOnly(false);
    setSortBy("featured");
  };

  const filteredAccounts = useMemo(() => {
    let result = [...accounts];

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter((account) =>
        account.players.some((player) =>
          player.name.toLowerCase().includes(query)
        ) || account.title.toLowerCase().includes(query)
      );
    }

    // Team strength filter
    result = result.filter((account) => account.teamStrength >= minTeamStrength);

    // Platform filter
    if (platform !== "all") {
      result = result.filter((account) => account.platform === platform);
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
  }, [searchQuery, minTeamStrength, platform, verifiedOnly, sortBy]);

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
                  Available Accounts
                </h2>
                <p className="mt-1 text-muted-foreground">
                  {filteredAccounts.length} account{filteredAccounts.length !== 1 ? "s" : ""} found
                </p>
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
              {/* Filters sidebar */}
              <aside className="hidden lg:block">
                <div className="sticky top-24">
                  <Filters
                    minTeamStrength={minTeamStrength}
                    onMinTeamStrengthChange={setMinTeamStrength}
                    platform={platform}
                    onPlatformChange={setPlatform}
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
                    <h3 className="font-heading text-xl font-bold">No accounts found</h3>
                    <p className="mt-2 text-muted-foreground">
                      Try adjusting your filters or search query
                    </p>
                    <Button
                      variant="outline"
                      className="mt-4"
                      onClick={resetFilters}
                    >
                      Reset Filters
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
