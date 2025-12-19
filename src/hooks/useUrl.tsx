import {useLocation} from 'react-router';
import {fromEnv} from "@/utils/fromEnv.ts";

const useUrl = () => {
  const location = useLocation();
  const origin = fromEnv('VITE_APP_URL');

  const pathname = location.pathname;

  const href = `${origin}${pathname}`;

  return {
    ...location,
    href,
  };
};

export default useUrl;
