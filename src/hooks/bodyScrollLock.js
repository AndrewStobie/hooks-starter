import { useLayoutEffect } from 'react';

function useBodyScrollLock() {
  const originalOverflow = window.getComputedStyle(document.body).overflow;
  useLayoutEffect(() => {
    document.body.style.overflow = 'hidden';

    return function cleanup() {
      document.body.style.overflow = originalOverflow;
    }
  }, []);
}

export { useBodyScrollLock };