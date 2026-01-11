// UserRole and User removed

export interface Cause {
  id: string;
  title: string;
  description: string;
  target: number;
  raised: number;
  image: string;
  category: string;
}

export interface Story {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
}

export interface Stat {
  label: string;
  value: string;
  icon: any;
}
