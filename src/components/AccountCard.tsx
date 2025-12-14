import { Crown, Shield, Star, Coins, Monitor, Smartphone, Gamepad } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Account } from "@/data/accounts";

interface AccountCardProps {
  account: Account;
  index: number;
}

const platformIcons = {
  mobile: Smartphone,
  console: Gamepad,
  pc: Monitor,
};

const platformNames = {
  mobile: "الجوال",
  console: "الكونسول",
  pc: "الكمبيوتر",
};

export function AccountCard({ account, index }: AccountCardProps) {
  const PlatformIcon = platformIcons[account.platform];
  const discount = account.originalPrice
    ? Math.round((1 - account.price / account.originalPrice) * 100)
    : 0;

  return (
    <div
      className="group relative overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      {/* Featured badge */}
      {account.featured && (
        <div className="absolute right-0 top-0 z-10">
          <div className="flex items-center gap-1 rounded-bl-lg bg-accent px-3 py-1.5">
            <Crown className="h-3.5 w-3.5 text-accent-foreground" />
            <span className="text-xs font-bold text-accent-foreground">مميز</span>
          </div>
        </div>
      )}

      {/* Discount badge */}
      {discount > 0 && (
        <div className="absolute left-3 top-3 z-10">
          <Badge className="bg-destructive font-bold">-{discount}%</Badge>
        </div>
      )}

      {/* Card header with team strength */}
      <div className="relative bg-gradient-to-br from-secondary to-muted p-6 pb-8">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-heading text-xl font-bold leading-tight">{account.title}</h3>
            <div className="mt-2 flex items-center gap-2">
              <PlatformIcon className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">{platformNames[account.platform]}</span>
              {account.verified && (
                <div className="flex items-center gap-1 text-primary">
                  <Shield className="h-3.5 w-3.5" />
                  <span className="text-xs font-medium">موثق</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Team Strength */}
        <div className="mt-4">
          <div className="inline-flex items-center gap-2 rounded-lg bg-card px-4 py-2 shadow-sm">
            <Star className="h-5 w-5 text-accent" />
            <span className="font-heading text-2xl font-bold">{account.teamStrength.toLocaleString('ar-EG')}</span>
            <span className="text-sm text-muted-foreground">قوة الفريق</span>
          </div>
        </div>
      </div>

      {/* Top players */}
      <div className="border-b border-border p-4">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          أفضل اللاعبين
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
              <span className="text-xs text-muted-foreground">+{account.players.length - 4} المزيد</span>
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
          <p className="text-xs text-muted-foreground">أسطوري</p>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center gap-1">
            <Star className="h-4 w-4 text-primary" />
            <span className="font-heading text-lg font-bold">{account.epicCount}</span>
          </div>
          <p className="text-xs text-muted-foreground">ملحمي</p>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center gap-1">
            <Coins className="h-4 w-4 text-accent" />
            <span className="font-heading text-lg font-bold">{(account.coins / 1000000).toFixed(1)}M</span>
          </div>
          <p className="text-xs text-muted-foreground">عملات</p>
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
        <Button className="font-semibold transition-all group-hover:shadow-md group-hover:shadow-primary/20">
          عرض التفاصيل
        </Button>
      </div>
    </div>
  );
}