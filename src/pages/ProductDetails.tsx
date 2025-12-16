import { useParams, useNavigate } from "react-router-dom";
import { accounts } from "@/data/accounts";
import { useLanguage } from "@/i18n/LanguageProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  ArrowRight, 
  Crown, 
  Star, 
  Shield, 
  Coins, 
  Monitor, 
  Smartphone, 
  Gamepad, 
  ShoppingCart,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { useState } from "react";

const platformIcons = {
  mobile: Smartphone,
  console: Gamepad,
  pc: Monitor,
};

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t, language, isRTL } = useLanguage();
  const [selectedImage, setSelectedImage] = useState(0);

  const account = accounts.find((acc) => acc.id === id);

  if (!account) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">{t.productDetails.notFound}</h1>
          <Button onClick={() => navigate("/")}>
            {t.productDetails.backToHome}
          </Button>
        </div>
      </div>
    );
  }

  const PlatformIcon = platformIcons[account.platform];
  const discount = account.originalPrice
    ? Math.round((1 - account.price / account.originalPrice) * 100)
    : 0;
  const accountTitle = t.accountTitles[account.id as keyof typeof t.accountTitles] || account.title;
  const productImages = account.images;

  const platformNames = {
    mobile: t.filters.mobile,
    console: t.filters.console,
    pc: t.filters.pc,
  };

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  const BackIcon = isRTL ? ArrowRight : ArrowLeft;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Back button */}
        <Button
          variant="ghost"
          className="mb-6 gap-2"
          onClick={() => navigate("/")}
        >
          <BackIcon className="h-4 w-4" />
          {t.productDetails.backToAccounts}
        </Button>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-video overflow-hidden rounded-xl border border-border bg-card">
              <img
                src={productImages[selectedImage]}
                alt={`${accountTitle} - ${t.productDetails.screenshot} ${selectedImage + 1}`}
                className="h-full w-full object-cover"
              />
              
              {/* Navigation arrows */}
              <button
                onClick={prevImage}
                className={`absolute top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors ${isRTL ? "right-3" : "left-3"}`}
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextImage}
                className={`absolute top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors ${isRTL ? "left-3" : "right-3"}`}
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              {/* Image counter */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-sm">
                {selectedImage + 1} / {productImages.length}
              </div>
            </div>

            {/* Thumbnail grid */}
            <div className="grid grid-cols-4 gap-2">
              {productImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-video overflow-hidden rounded-lg border-2 transition-all ${
                    selectedImage === index
                      ? "border-primary ring-2 ring-primary/20"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <img
                    src={img}
                    alt={`${t.productDetails.thumbnail} ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Header */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 flex-wrap">
                {account.featured && (
                  <Badge className="bg-accent text-accent-foreground gap-1">
                    <Crown className="h-3 w-3" />
                    {t.card.featured}
                  </Badge>
                )}
                {account.verified && (
                  <Badge className="bg-primary text-primary-foreground gap-1">
                    <Shield className="h-3 w-3" />
                    {t.card.verified}
                  </Badge>
                )}
                {discount > 0 && (
                  <Badge className="bg-destructive">-{discount}%</Badge>
                )}
              </div>

              <h1 className="font-heading text-3xl md:text-4xl font-bold">
                {accountTitle}
              </h1>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 rounded-lg bg-card border border-border px-4 py-2">
                  <Star className="h-5 w-5 text-accent" />
                  <span className="font-heading text-xl font-bold">
                    {account.teamStrength.toLocaleString(language === 'ar' ? 'ar-EG' : 'en-US')}
                  </span>
                  <span className="text-muted-foreground">{t.card.teamStrength}</span>
                </div>

                <div className="flex items-center gap-2 rounded-lg bg-card border border-border px-3 py-2">
                  <PlatformIcon className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{platformNames[account.platform]}</span>
                </div>
              </div>
            </div>

            {/* Price section */}
            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{t.productDetails.price}</p>
                  <div className="flex items-baseline gap-3">
                    <span className="font-heading text-4xl font-bold text-primary">
                      ${account.price.toFixed(2)}
                    </span>
                    {account.originalPrice && (
                      <span className="text-xl text-muted-foreground line-through">
                        ${account.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>
                <Button size="lg" className="gap-2 text-lg px-8">
                  <ShoppingCart className="h-5 w-5" />
                  {t.productDetails.buyNow}
                </Button>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-card border border-border text-center">
                <Crown className="h-6 w-6 mx-auto text-accent mb-2" />
                <p className="font-heading text-2xl font-bold">{account.legendaryCount}</p>
                <p className="text-sm text-muted-foreground">{t.card.legendary}</p>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border text-center">
                <Star className="h-6 w-6 mx-auto text-primary mb-2" />
                <p className="font-heading text-2xl font-bold">{account.epicCount}</p>
                <p className="text-sm text-muted-foreground">{t.card.epic}</p>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border text-center">
                <Coins className="h-6 w-6 mx-auto text-accent mb-2" />
                <p className="font-heading text-2xl font-bold">{(account.coins / 1000000).toFixed(1)}M</p>
                <p className="text-sm text-muted-foreground">{t.card.coins}</p>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border text-center">
                <p className="text-2xl mb-2">🎮</p>
                <p className="font-heading text-2xl font-bold">{account.level}</p>
                <p className="text-sm text-muted-foreground">{t.productDetails.level}</p>
              </div>
            </div>

            {/* Players section */}
            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="font-heading text-xl font-bold mb-4">{t.productDetails.allPlayers}</h3>
              <div className="flex flex-wrap gap-2">
                {account.players.map((player) => (
                  <div
                    key={player.name}
                    className="flex items-center gap-2 rounded-full bg-secondary px-4 py-2"
                  >
                    <span className="font-bold text-primary">{player.rating}</span>
                    <span className="font-medium">{player.name}</span>
                    <span className="text-xs text-muted-foreground">({player.position})</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="font-heading text-xl font-bold mb-4">{t.productDetails.features}</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-primary" />
                  <span>{t.productDetails.feature1}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Crown className="h-5 w-5 text-accent" />
                  <span>{t.productDetails.feature2}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Star className="h-5 w-5 text-primary" />
                  <span>{t.productDetails.feature3}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}