import { useMediaQuery } from "react-responsive";

export const useResponsive = (): {
  isMobile: boolean;
  isTablet: boolean;
  isPc: boolean;
} => {
  const isMobile = useMediaQuery({ minWidth: 375 });
  const isTablet = useMediaQuery({ minWidth: 744 });
  const isPc = useMediaQuery({ minWidth: 1200 });

  return { isMobile, isTablet, isPc };
};
