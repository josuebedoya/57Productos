import { IconProps } from '@/resources/types';
import { DynamicIcon } from 'lucide-react/dynamic';

const Icon = ({ name, ...ui }: IconProps) => {
  return <span className={ui.className}><DynamicIcon name={name} {...ui}/></span>;
};

export default Icon;