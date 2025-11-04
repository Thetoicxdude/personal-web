import { createGlobalStyle, DefaultTheme } from 'styled-components'

// 擴展 DefaultTheme 接口
declare module 'styled-components' {
  export interface DefaultTheme {
    background: string;
    foreground: string;
    primary: string;
    secondary: string;
    success: string;
    error: string;
    warning: string;
    info: string;
    promptSymbol: string;
    promptColor: string;
    systemColor: string;
    resultColor: string;
    highlightColor: string;
    fileColor: string;
    directoryColor: string;
    tabBarBackground?: string;
    tabBorder?: string;
    activeTabBackground?: string;
    activeTabColor?: string;
    inactiveTabColor?: string;
    tabHoverBackground?: string;
    closeButtonHover?: string;
  }
}

export const lightTheme: DefaultTheme = {
  background: '#f5f5f5',
  foreground: '#2e3440',
  primary: '#5e81ac',
  secondary: '#81a1c1',
  success: '#a3be8c',
  error: '#bf616a',
  warning: '#ebcb8b',
  info: '#b48ead',
  promptSymbol: '❯',
  promptColor: '#5e81ac',
  systemColor: '#8fbcbb',
  resultColor: '#4c566a',
  highlightColor: '#81a1c1',
  fileColor: '#88c0d0', // 檔案顏色
  directoryColor: '#5e81ac', // 目錄顏色
  tabBarBackground: '#e5e9f0',
  tabBorder: '#d8dee9',
  activeTabBackground: '#eceff4',
  activeTabColor: '#2e3440',
  inactiveTabColor: '#4c566a',
  tabHoverBackground: '#d8dee9',
  closeButtonHover: '#c0c5ce'
}

export const darkTheme: DefaultTheme = {
  background: '#2e3440',
  foreground: '#eceff4',
  primary: '#88c0d0',
  secondary: '#81a1c1',
  success: '#a3be8c',
  error: '#bf616a',
  warning: '#ebcb8b',
  info: '#b48ead',
  promptSymbol: '❯',
  promptColor: '#88c0d0',
  systemColor: '#8fbcbb',
  resultColor: '#e5e9f0',
  highlightColor: '#81a1c1',
  fileColor: '#ebcb8b', // 檔案顏色
  directoryColor: '#81a1c1', // 目錄顏色
  tabBarBackground: '#222',
  tabBorder: '#444',
  activeTabBackground: '#333',
  activeTabColor: '#fff',
  inactiveTabColor: '#aaa',
  tabHoverBackground: '#2a2a2a',
  closeButtonHover: '#555'
}

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${props => props.theme.background};
    color: ${props => props.theme.foreground};
    font-family: 'Fira Code', 'JetBrains Mono', monospace;
    transition: all 0.3s ease;
  }
  
  * {
    box-sizing: border-box;
  }
  
  /* 增加終端模擬器的字體配置 */
  @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap');
` 