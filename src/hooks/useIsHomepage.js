import { useLocation } from '@reach/router';

const useIsHomepage = () => {
  const location = useLocation();
  return location.pathname === '/';
};

export default useIsHomepage;
