import type { ThemeTypes } from '@/types/themeTypes/ThemeType';

const PurpleTheme: ThemeTypes = {
  name: 'PurpleTheme',
  dark: false,
  variables: {
    'border-opacity': 1,
    'border-color': '#eeeeee',
    'carousel-control-size': 10
  },
  colors: {
    primary: '#82B1FF',
    secondary: '#6C757D',
    info: '#2196F3',
    success: '#5cb85c',
    accent: '#82B1FF',
    warning: '#FFC107',
    export: "#f16a1b",
    error: '#FF5252',
    muted: '#6C757D',
    save: '#1aa053',
    greenblue: '#00F0FF',
    txtcolor: '#26A9E1',
    themecolor: '#161235F2',
    service_1: '#05215D',
    service_2: '#37A1F9',
    service_3: '#25C4F9',
    service_4: '#1C82AD',
    service_circle: '#70B4E8',
    navtail: '#25AAE2',
    fromcolor: '#193259',
    lightprimary: '#fadae4',
    lightsecondary: '#E8F7FF',
    lightsuccess: '#E6FFFA',
    lighterror: '#FDEDE8',
    lightwarning: '#FEF5E5',
    textPrimary: '#2A3547',
    textSecondary: '#2A3547',
    borderColor: '#e5eaef',
    inputBorder: '#000',
    containerBg: '#ffffff',
    hoverColor: '#f6f9fc',
    surface: '#fff',
    'on-surface-variant': '#fff',
    grey100: '#F2F6FA',
    grey200: '#EAEFF4'
  }
};

export { PurpleTheme };