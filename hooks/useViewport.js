import { useEffect, useState } from "react";

export const BREAKPOINTS = {
  xs: "(max-width: 47.94em)",
  sm: "(min-width: 48em) and (max-width: 63.94em)",
  md: "(min-width: 64em) and (max-width: 74em)",
  lg: "(min-width: 90em)",
};

export default function useViewport(breakpoint) {
  const [matching, setMatching] = useState(true);

  useEffect(() => {
    const handler = (e) => {
      if (e.matches) {
        setMatching(true);
      } else {
        setMatching(false);
      }
    };

    const mediaQueryList = window.matchMedia(breakpoint);

    setMatching(mediaQueryList.matches);

    mediaQueryList.addEventListener("change", handler);

    return () => {
      mediaQueryList.removeEventListener("change", handler);
    };
  }, [breakpoint]);

  return matching;
}
