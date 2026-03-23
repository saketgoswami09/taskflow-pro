import { format, isPast, isToday } from "date-fns";

export function formatDate(dateStr?: string): string {
  if (!dateStr) return "";
  return format(new Date(dateStr), "MMM d, yyyy");
}

export function isOverdue(dateStr?: string): boolean {
  if (!dateStr) return false;
  return isPast(new Date(dateStr)) && !isToday(new Date(dateStr));
}

export function isDueToday(dateStr?: string): boolean {
  if (!dateStr) return false;
  return isToday(new Date(dateStr));
}
