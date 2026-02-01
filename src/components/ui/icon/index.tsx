import { IconProps } from '@/resources/types';
import { DynamicIcon } from 'lucide-react/dynamic';

const Icon = ({ name, ...props }: IconProps) => {
  return <span className='icon'><DynamicIcon name={name} {...props} /></span>;
};

export default Icon;