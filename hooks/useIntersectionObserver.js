import { useEffect } from "react";

export default function useIntersectionObserver({
  root = null,
  target,
  onIntersect,
  threshold = 1.0,
  rootMargin = "0px",
  disabled = false,
}) {
  useEffect(() => {
    if (disabled || !target || !target.current) {
      return;
    }

    const observer = new IntersectionObserver(onIntersect, {
      root: root && root.current,
      rootMargin,
      threshold,
    });

    const currentTarget = target.current;

    observer.observe(currentTarget);

    return () => {
      observer.unobserve(currentTarget);
    };
  }, [disabled, onIntersect, root, rootMargin, target, threshold]);
}
