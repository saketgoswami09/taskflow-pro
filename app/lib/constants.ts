import type { Priority } from "@/app/types";

export const PRIORITY_CONFIG: Record<
  Priority,
  { label: string; color: string; badge: string }
> = {
  low:    { label: "Low",    color: "text-blue-500",   badge: "bg-blue-500/10 text-blue-500" },
  medium: { label: "Medium", color: "text-amber-500",  badge: "bg-amber-500/10 text-amber-500" },
  high:   { label: "High",   color: "text-orange-500", badge: "bg-orange-500/10 text-orange-500" },
  urgent: { label: "Urgent", color: "text-red-500",    badge: "bg-red-500/10 text-red-500" },
};

export const CATEGORIES = ["Work", "Personal", "Health", "Learning", "Finance"] as const;
