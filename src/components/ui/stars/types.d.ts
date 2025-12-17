export interface StarsProps {
  quantity?: mnumber;
  value?: number;
  readOnly?: boolean;
  onChange: (e: any) => void;
  className?: string;
  classNameStar?: string;
  color?: string;
  colorActive?: string;
  variant?: 'solid' | 'outlined';
  size?: string;
}