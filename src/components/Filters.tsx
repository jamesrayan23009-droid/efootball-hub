import { SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useLanguage } from "@/i18n/LanguageProvider";

interface FiltersProps {
  minTeamStrength: number;
  onMinTeamStrengthChange: (value: number) => void;
  system: string;
  onSystemChange: (value: string) => void;
  verifiedOnly: boolean;
  onVerifiedOnlyChange: (value: boolean) => void;
  sortBy: string;
  onSortByChange: (value: string) => void;
  onReset: () => void;
}

export function Filters({
  minTeamStrength,
  onMinTeamStrengthChange,
  system,
  onSystemChange,
  verifiedOnly,
  onVerifiedOnlyChange,
  sortBy,
  onSortByChange,
  onReset,
}: FiltersProps) {
  const { t, language } = useLanguage();

  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="h-5 w-5 text-primary" />
          <h2 className="font-heading text-lg font-bold">{t.filters.title}</h2>
        </div>
        <Button variant="ghost" size="sm" onClick={onReset} className="text-muted-foreground">
          {t.filters.reset}
        </Button>
      </div>

      <div className="space-y-6">
        {/* Team Strength Filter */}
        <div className="space-y-3">
          <Label className="text-sm font-medium">
            {t.filters.minTeamStrength} <span className="text-primary font-bold">{minTeamStrength.toLocaleString(language === 'ar' ? 'ar-EG' : 'en-US')}</span>
          </Label>
          <Slider
            value={[minTeamStrength]}
            onValueChange={(value) => onMinTeamStrengthChange(value[0])}
            min={0}
            max={6000}
            step={100}
            className="py-2"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>{language === 'ar' ? '٠' : '0'}</span>
            <span>{language === 'ar' ? '٦,٠٠٠' : '6,000'}</span>
          </div>
        </div>

        {/* System Filter */}
        <div className="space-y-3">
          <Label className="text-sm font-medium">{t.filters.system}</Label>
          <Select value={system} onValueChange={onSystemChange}>
            <SelectTrigger className="bg-secondary/50">
              <SelectValue placeholder={t.filters.allSystems} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{t.filters.allSystems}</SelectItem>
              <SelectItem value="android">{t.filters.android}</SelectItem>
              <SelectItem value="iphone">{t.filters.iphone}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Sort By */}
        <div className="space-y-3">
          <Label className="text-sm font-medium">{t.filters.sortBy}</Label>
          <Select value={sortBy} onValueChange={onSortByChange}>
            <SelectTrigger className="bg-secondary/50">
              <SelectValue placeholder={t.filters.sortBy} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">{t.filters.sortFeatured}</SelectItem>
              <SelectItem value="price-low">{t.filters.sortPriceLow}</SelectItem>
              <SelectItem value="price-high">{t.filters.sortPriceHigh}</SelectItem>
              <SelectItem value="strength-high">{t.filters.sortStrengthHigh}</SelectItem>
              <SelectItem value="strength-low">{t.filters.sortStrengthLow}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Verified Only */}
        <div className="flex items-center gap-3">
          <Checkbox
            id="verified"
            checked={verifiedOnly}
            onCheckedChange={(checked) => onVerifiedOnlyChange(checked as boolean)}
            className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
          />
          <Label htmlFor="verified" className="cursor-pointer text-sm font-medium">
            {t.filters.verifiedOnly}
          </Label>
        </div>
      </div>
    </div>
  );
}
