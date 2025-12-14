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

interface FiltersProps {
  minTeamStrength: number;
  onMinTeamStrengthChange: (value: number) => void;
  platform: string;
  onPlatformChange: (value: string) => void;
  verifiedOnly: boolean;
  onVerifiedOnlyChange: (value: boolean) => void;
  sortBy: string;
  onSortByChange: (value: string) => void;
  onReset: () => void;
}

export function Filters({
  minTeamStrength,
  onMinTeamStrengthChange,
  platform,
  onPlatformChange,
  verifiedOnly,
  onVerifiedOnlyChange,
  sortBy,
  onSortByChange,
  onReset,
}: FiltersProps) {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="h-5 w-5 text-primary" />
          <h2 className="font-heading text-lg font-bold">التصفية</h2>
        </div>
        <Button variant="ghost" size="sm" onClick={onReset} className="text-muted-foreground">
          إعادة تعيين
        </Button>
      </div>

      <div className="space-y-6">
        {/* Team Strength Filter */}
        <div className="space-y-3">
          <Label className="text-sm font-medium">
            الحد الأدنى لقوة الفريق: <span className="text-primary font-bold">{minTeamStrength.toLocaleString('ar-EG')}</span>
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
            <span>٦,٠٠٠</span>
            <span>٠</span>
          </div>
        </div>

        {/* Platform Filter */}
        <div className="space-y-3">
          <Label className="text-sm font-medium">المنصة</Label>
          <Select value={platform} onValueChange={onPlatformChange}>
            <SelectTrigger className="bg-secondary/50">
              <SelectValue placeholder="جميع المنصات" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">جميع المنصات</SelectItem>
              <SelectItem value="mobile">الجوال</SelectItem>
              <SelectItem value="console">الكونسول</SelectItem>
              <SelectItem value="pc">الكمبيوتر</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Sort By */}
        <div className="space-y-3">
          <Label className="text-sm font-medium">ترتيب حسب</Label>
          <Select value={sortBy} onValueChange={onSortByChange}>
            <SelectTrigger className="bg-secondary/50">
              <SelectValue placeholder="ترتيب حسب" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">المميز</SelectItem>
              <SelectItem value="price-low">السعر: من الأقل للأعلى</SelectItem>
              <SelectItem value="price-high">السعر: من الأعلى للأقل</SelectItem>
              <SelectItem value="strength-high">قوة الفريق: من الأعلى للأقل</SelectItem>
              <SelectItem value="strength-low">قوة الفريق: من الأقل للأعلى</SelectItem>
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
            الحسابات الموثقة فقط
          </Label>
        </div>
      </div>
    </div>
  );
}