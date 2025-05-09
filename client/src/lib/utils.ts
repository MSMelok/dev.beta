import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Custom animation classes
export const customAnimations = {
  "bounce-slow": "animate-bounce-slow",
  "pulse-slow": "animate-pulse-slow",
  "ping-slow": "animate-ping-slow",
  "typing-effect": "typing-effect"
};

// Helper functions for working with the portfolio
export const portfolioHelpers = {
  getCategoryLabel: (category: string) => {
    return category.charAt(0).toUpperCase() + category.slice(1);
  },
  
  getCategoryColor: (category: string) => {
    switch (category) {
      case 'tool':
        return 'bg-blue-500';
      case 'business':
        return 'bg-yellow-500';
      case 'game':
        return 'bg-green-500';
      default:
        return 'bg-gray-500';
    }
  }
};

// Format date helper
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    year: 'numeric'
  }).format(date);
}

// Get base path for GitHub Pages deployment
export function getBasePath(): string {
  // Use environment variable if available, otherwise empty string for local development
  return import.meta.env.VITE_BASE_PATH || '/';
}

// Prefix asset paths with base path for GitHub Pages
export function assetPath(path: string): string {
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.substring(1) : path;
  return `${getBasePath()}${cleanPath}`;
}
