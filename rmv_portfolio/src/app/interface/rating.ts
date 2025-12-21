export interface RatingCategory {
  name: string;
  label: string;
  score: number;
}

export interface PortfolioRating {
  id?: string;
  categories: {
    uiux: number;
    performance: number;
    content: number;
    overall: number;
  };
  feedback: string;
  visitorInfo?: {
    timestamp: Date;
    userAgent?: string;
    location?: string;
  };
}

export interface RatingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}
