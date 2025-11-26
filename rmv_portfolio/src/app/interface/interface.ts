export interface typography {
  text: string;
}

// Work availability status types
export type WorkAvailabilityStatus = 1 | 2 | 3 | 4 | 5 | 6 | 7;

export interface WorkAvailabilityProps {
  available: boolean;
  status?: WorkAvailabilityStatus; // Optional when available=true, required when available=false
}

export interface WorkAvailabilityConfig {
  text: string;
  color: string;
  bgColor: string;
  icon: string; // emoji
}

export const WORK_AVAILABILITY_CONFIGS: Record<WorkAvailabilityStatus, WorkAvailabilityConfig> = {
  // Available (Green)
  1: {
    text: "Available for Work",
    color: "text-green-600 dark:text-green-400",
    bgColor: "bg-green-100 dark:bg-green-900/30",
    icon: "🟢"
  },
  2: {
    text: "Open to Opportunities",
    color: "text-green-600 dark:text-green-400",
    bgColor: "bg-green-100 dark:bg-green-900/30",
    icon: "🟢"
  },
  3: {
    text: "Seeking New Roles",
    color: "text-green-600 dark:text-green-400",
    bgColor: "bg-green-100 dark:bg-green-900/30",
    icon: "🟢"
  },
  // Employed (Blue/Yellow)
  4: {
    text: "Currently Employed",
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-100 dark:bg-blue-900/30",
    icon: "🔵"
  },
  5: {
    text: "Open to Opportunities",
    color: "text-yellow-600 dark:text-yellow-400",
    bgColor: "bg-yellow-100 dark:bg-yellow-900/30",
    icon: "🟡"
  },
  // Not Available (Gray/Orange)
  6: {
    text: "Not Seeking Roles",
    color: "text-orange-600 dark:text-orange-400",
    bgColor: "bg-orange-100 dark:bg-orange-900/30",
    icon: "🟠"
  },
  7: {
    text: "Focused on Current Role",
    color: "text-gray-600 dark:text-gray-400",
    bgColor: "bg-gray-100 dark:bg-gray-900/30",
    icon: "⚪"
  }
}