import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, state } = useLocation();

  useEffect(() => {
    // Only scroll to top if there is no specific section target in state
    const scrollTo = (state as { scrollTo?: string })?.scrollTo;
    if (!scrollTo) {
      window.scrollTo(0, 0);
    }
  }, [pathname, state]);

  return null;
};

export default ScrollToTop;
