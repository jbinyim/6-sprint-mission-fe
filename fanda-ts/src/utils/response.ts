import { useMediaQuery } from "react-responsive";

export const useResponsive = (): {
  isMobile: boolean;
  isTablet: boolean;
  isPc: boolean;
} => {
  const isMobile = useMediaQuery({ minWidth: 375, maxWidth: 743 });
  const isTablet = useMediaQuery({ minWidth: 744, maxWidth: 1199 });
  const isPc = useMediaQuery({ minWidth: 1200 });

  return { isMobile, isTablet, isPc };
};
