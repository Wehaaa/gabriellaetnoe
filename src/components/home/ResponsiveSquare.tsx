import { useState, useEffect } from 'react';
import Square from "@/components/home/Square";

type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

type SquareConfig = {
  size: number;
  imagesPer: number;
  cropSize: number;
  innerFrameInset?: string;
  innerFrameBorderWidth?: string;
  innerFrameMaskHeight?: string;
};

type BreakpointConfigs = {
  [key in Breakpoint]?: SquareConfig;
};

type ResponsiveSquareProps = BreakpointConfigs & {
  inset: number;
  innerFrameInset?: string;
  innerFrameBorderWidth?: string;
  innerFrameMaskHeight?: string;
};

const BREAKPOINTS = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

const DEFAULT_CONFIG: Record<Breakpoint, SquareConfig> = {
  xs: {
    size: 300,
    imagesPer: 3,
    cropSize: 70,
    innerFrameInset: '10px',
    innerFrameBorderWidth: '1px',
    innerFrameMaskHeight: '50px'
  },
  sm: {
    size: 500,
    imagesPer: 5,
    cropSize: 60,
    innerFrameInset: '15px',
    innerFrameBorderWidth: '1px',
    innerFrameMaskHeight: '75px'
  },
  md: {
    size: 600,
    imagesPer: 7,
    cropSize: 55,
    innerFrameInset: '20px',
    innerFrameBorderWidth: '1px',
    innerFrameMaskHeight: '100px'
  },
  lg: {
    size: 800,
    imagesPer: 9,
    cropSize: 50,
    innerFrameInset: '25px',
    innerFrameBorderWidth: '1px',
    innerFrameMaskHeight: '125px'
  },
  xl: {
    size: 1000,
    imagesPer: 9,
    cropSize: 50,
    innerFrameInset: '30px',
    innerFrameBorderWidth: '1px',
    innerFrameMaskHeight: '150px'
  },
  '2xl': {
    size: 1200,
    imagesPer: 9,
    cropSize: 50,
    innerFrameInset: '35px',
    innerFrameBorderWidth: '1px',
    innerFrameMaskHeight: '175px'
  }
};

const useBreakpoint = (): keyof typeof BREAKPOINTS => {
  const [breakpoint, setBreakpoint] = useState<keyof typeof BREAKPOINTS>('xs');
  
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const newBreakpoint = (Object.entries(BREAKPOINTS)
        .reverse()
        .find(([_, minWidth]) => width >= minWidth)?.[0] ?? 'xs') as keyof typeof BREAKPOINTS;
      
      setBreakpoint(newBreakpoint);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return breakpoint;
};

const findNearestBreakpoint = (
  props: ResponsiveSquareProps,
  currentBreakpoint: Breakpoint
): Breakpoint => {
  const breakpoints: Breakpoint[] = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];
  const currentIndex = breakpoints.indexOf(currentBreakpoint);
  
  for (let i = currentIndex; i >= 0; i--) {
    const breakpoint = breakpoints[i];
    if (props[breakpoint]) {
      return breakpoint;
    }
  }
  
  for (let i = currentIndex + 1; i < breakpoints.length; i++) {
    const breakpoint = breakpoints[i];
    if (props[breakpoint]) {
      return breakpoint;
    }
  }
  
  return currentBreakpoint;
};

const getConfigForBreakpoint = (
  props: ResponsiveSquareProps,
  breakpoint: Breakpoint
): SquareConfig => {
  const nearestBreakpoint = findNearestBreakpoint(props, breakpoint);
  const defaultConfig = DEFAULT_CONFIG[breakpoint];
  const customConfig = props[nearestBreakpoint];
  
  if (!customConfig) {
    return {
      ...defaultConfig,
      innerFrameInset: props.innerFrameInset ?? defaultConfig.innerFrameInset,
      innerFrameBorderWidth: props.innerFrameBorderWidth ?? defaultConfig.innerFrameBorderWidth,
      innerFrameMaskHeight: props.innerFrameMaskHeight ?? defaultConfig.innerFrameMaskHeight,
    };
  }

  return {
    size: customConfig.size ?? defaultConfig.size,
    imagesPer: customConfig.imagesPer ?? defaultConfig.imagesPer,
    cropSize: customConfig.cropSize ?? defaultConfig.cropSize,
    innerFrameInset: props.innerFrameInset ?? customConfig.innerFrameInset ?? defaultConfig.innerFrameInset,
    innerFrameBorderWidth: props.innerFrameBorderWidth ?? customConfig.innerFrameBorderWidth ?? defaultConfig.innerFrameBorderWidth,
    innerFrameMaskHeight: props.innerFrameMaskHeight ?? customConfig.innerFrameMaskHeight ?? defaultConfig.innerFrameMaskHeight,
  };
};

const ResponsiveSquare = (props: ResponsiveSquareProps) => {
  const currentBreakpoint = useBreakpoint();
  const currentConfig = getConfigForBreakpoint(props, currentBreakpoint);
  
  return (
    <Square
      size={currentConfig.size}
      imagesPer={currentConfig.imagesPer}
      cropSize={currentConfig.cropSize}
      inset={props.inset}
      innerFrameInset={currentConfig.innerFrameInset}
      innerFrameBorderWidth={currentConfig.innerFrameBorderWidth}
      innerFrameMaskHeight={currentConfig.innerFrameMaskHeight}
    />
  );
};

export default ResponsiveSquare;