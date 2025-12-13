import { Filter, SlidersHorizontal } from "lucide-react";
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
          <h2 className="font-heading text-lg font-bold">Filters</h2>
        </div>
        <Button variant="ghost" size="sm" onClick={onReset} className="text-muted-foreground">
          Reset
        </Button>
      </div>

      <div className="space-y-6">
        {/* Team Strength Filter */}
        <div className="space-y-3">
          <Label className="text-sm font-medium">
            Min Team Strength: <span className="text-primary font-bold">{minTeamStrength.toLocaleString()}</span>
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
            <span>0</span>
            <span>6,000</span>
          </div>
        </div>

        {/* Platform Filter */}
        <div className="space-y-3">
          <Label className="text-sm font-medium">Platform</Label>
          <Select value={platform} onValueChange={onPlatformChange}>
            <SelectTrigger className="bg-secondary/50">
              <SelectValue placeholder="All Platforms" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Platforms</SelectItem>
              <SelectItem value="mobile">Mobile</SelectItem>
              <SelectItem value="console">Console</SelectItem>
              <SelectItem value="pc">PC</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Sort By */}
        <div className="space-y-3">
          <Label className="text-sm font-medium">Sort By</Label>
          <Select value={sortBy} onValueChange={onSortByChange}>
            <SelectTrigger className="bg-secondary/50">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="strength-high">Team Strength: High to Low</SelectItem>
              <SelectItem value="strength-low">Team Strength: Low to High</SelectItem>
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
            Verified accounts only
          </Label>
        </div>
      </div>
    </div>
  );
}
