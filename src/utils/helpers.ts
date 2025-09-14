import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}

export function formatDate(date: string, locale: string = "en"): string {
  if (!date) return "";

  try {
    const parsedDate = new Date(date);
    return parsedDate.toLocaleDateString(locale === "ar" ? "ar-AE" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch (error) {
    console.warn("Invalid date format:", error);
    return date;
  }
}

export function formatTime(time: string, locale: string = "en"): string {
  if (!time) return "";

  try {
    const [startTime, endTime] = time.split("-");
    return locale === "ar"
      ? `${endTime} - ${startTime}`
      : `${startTime} - ${endTime}`;
  } catch (error) {
    console.warn("Invalid time format:", error);
    return time;
  }
}

export function debounce<T extends (...args: any[]) => void>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;

  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

export function throttle<T extends (...args: any[]) => void>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;

  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), wait);
    }
  };
}
