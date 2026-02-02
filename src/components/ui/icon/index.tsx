import {IconProps} from '@/resources/types';
import {DynamicIcon} from 'lucide-react/dynamic';
import {clsx} from "clsx";

const Icon = ({name, ...ui}: IconProps) => {
  return <span className={clsx('icon max-w-max max-h-max', ui.className)}><DynamicIcon name={name} {...ui}/></span>;
};

export default Icon;