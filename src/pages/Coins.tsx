import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/i18n/LanguageProvider";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Coins as CoinsIcon, Zap, Crown, Sparkles, Star } from "lucide-react";

const coinPackages = [
  {
    id: 1,
    coins: 1000,
    price: 4.99,
    popular: false,
    bonus: 0,
    icon: CoinsIcon,
  },
  {
    id: 2,
    coins: 2500,
    price: 9.99,
    popular: false,
    bonus: 10,
    icon: Zap,
  },
  {
    id: 3,
    coins: 5000,
    price: 18.99,
    popular: true,
    bonus: 15,
    icon: Star,
  },
  {
    id: 4,
    coins: 10000,
    price: 34.99,
    popular: false,
    bonus: 20,
    icon: Crown,
  },
  {
    id: 5,
    coins: 25000,
    price: 79.99,
    popular: false,
    bonus: 25,
    icon: Sparkles,
  },
  {
    id: 6,
    coins: 50000,
    price: 149.99,
    popular: false,
    bonus: 30,
    icon: Crown,
  },
];

export default function Coins() {
  const { t, isRTL } = useLanguage();

  return (
    <div className="min-h-screen bg-background" dir={isRTL ? "rtl" : "ltr"}>
      <Header />
      
      <main className="container py-12">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
            <CoinsIcon className="h-8 w-8 text-primary" />
          </div>
          <h1 className="font-heading text-4xl font-bold md:text-5xl">
            {t.coins.title}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            {t.coins.subtitle}
          </p>
        </div>

        {/* Special Offer Banner */}
        <div className="mb-12 overflow-hidden rounded-2xl bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 p-6 md:p-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                <Sparkles className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold">{t.coins.specialOffer}</h3>
                <p className="text-muted-foreground">{t.coins.specialOfferDesc}</p>
              </div>
            </div>
            <Badge variant="secondary" className="bg-primary text-primary-foreground text-lg px-4 py-2">
              {t.coins.limitedTime}
            </Badge>
          </div>
        </div>

        {/* Coin Packages Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {coinPackages.map((pkg) => {
            const IconComponent = pkg.icon;
            return (
              <div
                key={pkg.id}
                className={`group relative overflow-hidden rounded-2xl border bg-card p-6 transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/10 ${
                  pkg.popular ? "border-primary ring-2 ring-primary/20" : "border-border"
                }`}
              >
                {pkg.popular && (
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                    {t.coins.mostPopular}
                  </Badge>
                )}
                
                {pkg.bonus > 0 && (
                  <Badge variant="secondary" className="absolute top-4 left-4 bg-accent text-accent-foreground">
                    +{pkg.bonus}% {t.coins.bonus}
                  </Badge>
                )}

                <div className="mb-6 flex justify-center pt-8">
                  <div className={`flex h-20 w-20 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110 ${
                    pkg.popular ? "bg-primary/20" : "bg-muted"
                  }`}>
                    <IconComponent className={`h-10 w-10 ${pkg.popular ? "text-primary" : "text-muted-foreground"}`} />
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="mb-2 text-3xl font-bold">
                    {pkg.coins.toLocaleString()}
                  </h3>
                  <p className="mb-4 text-muted-foreground">{t.coins.coins}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-primary">${pkg.price}</span>
                  </div>

                  <Button 
                    className={`w-full ${pkg.popular ? "" : "variant-outline"}`}
                    variant={pkg.popular ? "default" : "outline"}
                  >
                    {t.coins.buyNow}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Section */}
        <div className="mt-16 text-center">
          <h3 className="mb-8 text-2xl font-bold">{t.coins.whyBuyFromUs}</h3>
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl bg-card p-6 border border-border">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h4 className="mb-2 font-semibold">{t.coins.instantDelivery}</h4>
              <p className="text-sm text-muted-foreground">{t.coins.instantDeliveryDesc}</p>
            </div>
            <div className="rounded-xl bg-card p-6 border border-border">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                <Star className="h-6 w-6 text-primary" />
              </div>
              <h4 className="mb-2 font-semibold">{t.coins.bestPrices}</h4>
              <p className="text-sm text-muted-foreground">{t.coins.bestPricesDesc}</p>
            </div>
            <div className="rounded-xl bg-card p-6 border border-border">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                <Crown className="h-6 w-6 text-primary" />
              </div>
              <h4 className="mb-2 font-semibold">{t.coins.securePayment}</h4>
              <p className="text-sm text-muted-foreground">{t.coins.securePaymentDesc}</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
