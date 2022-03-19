type Colors = {
  white: string;
  black: string;
  gray1: string;
  gray2: string;
  gray3: string;
  gray4: string;
  orange1: string;
  green1: string;
  green2: string;
};

type Sizes = {
  xxs: number;
  s: number;
  m: number;
  l: number;
};

export const colors: Colors = {
  white: '#FFFFFF',
  black: '#1A1A1A',
  gray1: '#F3F4F5',
  gray2: '#7c7f99',
  gray3: '#03051B',
  gray4: '#71748E',
  orange1: '#FDA41B',
  green1: '#99CA4F',
  green2: '#01545B',
};

export const fonts = {
  SemiBold12: {
    fontSize: 12,
    lineHeight: 22,
  },
  SemiBold14: {
    fontSize: 14,
    lineHeight: 22,
  },
  SemiBold16: {
    fontSize: 16,
    lineHeight: 22,
  },
  Regular14: {
    fontSize: 14,
    lineHeight: 18,
  },
};

export const sizes: Sizes = {
  xxs: 6,
  s: 12,
  m: 20,
  l: 28,
};
