import { Crown, Shield, Star, Coins, Monitor, Smartphone, Gamepad } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Account } from "@/data/accounts";
import { useLanguage } from "@/i18n/LanguageProvider";
import { useNavigate } from "react-router-dom";

interface AccountCardProps {
  account: Account;
  index: number;
}

const platformIcons = {
  mobile: Smartphone,
  console: Gamepad,
  pc: Monitor,
};

export function AccountCard({ account, index }: AccountCardProps) {
  const { t, language, isRTL } = useLanguage();
  const navigate = useNavigate();
  
  const PlatformIcon = platformIcons[account.platform];
  const discount = account.originalPrice
    ? Math.round((1 - account.price / account.originalPrice) * 100)
    : 0;
  
  const platformNames = {
    mobile: t.filters.mobile,
    console: t.filters.console,
    pc: t.filters.pc,
  };

  const accountTitle = t.accountTitles[account.id as keyof typeof t.accountTitles] || account.title;

  return (
    <div
      className="group relative overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={account.imageOverview} 
          alt={accountTitle}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
        
        {/* Featured badge */}
        {account.featured && (
          <div className={`absolute top-0 z-10 ${isRTL ? "right-0" : "left-0"}`}>
            <div className={`flex items-center gap-1 bg-accent px-3 py-1.5 ${isRTL ? "rounded-bl-lg" : "rounded-br-lg"}`}>
              <Crown className="h-3.5 w-3.5 text-accent-foreground" />
              <span className="text-xs font-bold text-accent-foreground">{t.card.featured}</span>
            </div>
          </div>
        )}

        {/* Discount badge */}
        {discount > 0 && (
          <div className={`absolute top-3 z-10 ${isRTL ? "left-3" : "right-3"}`}>
            <Badge className="bg-destructive font-bold">-{discount}%</Badge>
          </div>
        )}

        {/* Team strength and verified badge overlay */}
        <div className="absolute bottom-3 right-3 left-3 flex items-end justify-between">
          <div className="inline-flex items-center gap-2 rounded-lg bg-card/90 backdrop-blur-sm px-3 py-2 shadow-lg">
            <Star className="h-5 w-5 text-accent" />
            <span className="font-heading text-xl font-bold">{account.teamStrength.toLocaleString(language === 'ar' ? 'ar-EG' : 'en-US')}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 rounded-lg bg-card/90 backdrop-blur-sm px-2.5 py-1.5">
              <PlatformIcon className="h-4 w-4 text-muted-foreground" />
              <span className="text-xs font-medium text-muted-foreground">{platformNames[account.platform]}</span>
            </div>
            {account.verified && (
              <div className="flex items-center gap-1 rounded-lg bg-primary/90 backdrop-blur-sm px-2.5 py-1.5">
                <Shield className="h-3.5 w-3.5 text-primary-foreground" />
                <span className="text-xs font-medium text-primary-foreground">{t.card.verified}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Title */}
      <div className="p-4 pb-2">
        <h3 className="font-heading text-xl font-bold leading-tight">{accountTitle}</h3>
      </div>

      {/* Top players */}
      <div className="border-b border-border px-4 pb-4">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {t.card.topPlayers}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {account.players.slice(0, 4).map((player) => (
            <div
              key={player.name}
              className="flex items-center gap-1.5 rounded-full bg-secondary px-2.5 py-1"
            >
              <span className="text-xs font-semibold text-primary">{player.rating}</span>
              <span className="text-xs font-medium">{player.name}</span>
            </div>
          ))}
          {account.players.length > 4 && (
            <div className="flex items-center rounded-full bg-muted px-2.5 py-1">
              <span className="text-xs text-muted-foreground">+{account.players.length - 4} {t.card.more}</span>
            </div>
          )}
        </div>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-3 gap-2 p-4">
        <div className="text-center">
          <div className="flex items-center justify-center gap-1">
            <Crown className="h-4 w-4 text-accent" />
            <span className="font-heading text-lg font-bold">{account.legendaryCount}</span>
          </div>
          <p className="text-xs text-muted-foreground">{t.card.legendary}</p>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center gap-1">
            <Star className="h-4 w-4 text-primary" />
            <span className="font-heading text-lg font-bold">{account.epicCount}</span>
          </div>
          <p className="text-xs text-muted-foreground">{t.card.epic}</p>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center gap-1">
            <Coins className="h-4 w-4 text-accent" />
            <span className="font-heading text-lg font-bold">{(account.coins / 1000000).toFixed(1)}M</span>
          </div>
          <p className="text-xs text-muted-foreground">{t.card.coins}</p>
        </div>
      </div>

      {/* Price and CTA */}
      <div className="flex items-center justify-between border-t border-border p-4">
        <div>
          {account.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${account.originalPrice.toFixed(2)}
            </span>
          )}
          <div className="font-heading text-2xl font-bold text-primary">
            ${account.price.toFixed(2)}
          </div>
        </div>
        <Button 
          className="font-semibold transition-all group-hover:shadow-md group-hover:shadow-primary/20"
          onClick={() => navigate(`/account/${account.id}`)}
        >
          {t.card.viewDetails}
        </Button>
      </div>
    </div>
  );
}