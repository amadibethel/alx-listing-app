export interface CardProps {
  title: string;
  description: string;
  image: string;
}

export interface ButtonProps {
  label: string;
  onClick?: () => void;
}
