// 공통적으로 사용할 테마(media query, color 등)
import baseStyled, { css, ThemedStyledInterface } from 'styled-components'

const size = {
  min: `(max-width: 420px)`,
  mobile: `(max-width: 760px)`,
  tabletS: `(max-width: 1024px)`,
  tabletM: `(max-width: 1220px)`,
  tabletL: `(max-width: 1280px)`,
  laptop: `(min-width : 1440px)`,
  desktop: `(min-width : 1700px)`,
}

const sizes = {
  min: 420,
  desktop: 1167,
  tablet: 778,
  phone: 576,
}

// Iterate through the sizes and create a media template
const media = {
  desktop: (...args: any[]) => css`
    @media (max-width: ${sizes.desktop}px) {
      ${css(args.shift(), ...args)}
    }
  `,
  tablet: (...args: any[]) => css`
    @media (max-width: ${sizes.tablet}px) {
      ${css(args.shift(), ...args)}
    }
  `,
  phone: (...args: any[]) => css`
    @media (max-width: ${sizes.phone}px) {
      ${css(args.shift(), ...args)}
    }
  `,
}

const color = {
  primary: '#263238',
  primaryLight: '#4f5b62',
  primaryDark: '#000a12',
  secondary: '#ff6e40',
  secondaryLight: '#ffa06d',
  secondaryDark: '#c53d13',
  white: '#fafafa',
  black: '#24272a',
  inActive: '#c3c3c3',
  yellow: '#ffd600',
  // blue: '#0067a3',
}

const display = {
  flexCenterRow: `
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  flexCenterCol: `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  flexStartCol: `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  `,
  flexStartRow: `
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  `,
}

const concept = {
  glassmorphism: `
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.1);
    backdrop-filter: blur(3.5px);
    -webkit-backdrop-filter: blur(3.5px);
    border: 1px solid rgba(255, 255, 255, 0.18);
  `,
}

const icon = {
  viewInactive: `background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0'%3F%3E%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' version='1.1' width='512' height='512' x='0' y='0' viewBox='0 0 461.312 461.312' style='user-select: auto;' xml:space='preserve' class=''%3E%3Cg style='user-select: auto;'%3E%3Cg xmlns='http://www.w3.org/2000/svg' style='user-select: auto;'%3E%3Cg style='user-select: auto;'%3E%3Cpath d='M230.656,156.416c-40.96,0-74.24,33.28-74.24,74.24s33.28,74.24,74.24,74.24s74.24-33.28,74.24-74.24 S271.616,156.416,230.656,156.416z M225.024,208.64c-9.216,0-16.896,7.68-16.896,16.896h-24.576 c0.512-23.04,18.944-41.472,41.472-41.472V208.64z' fill='%234f5b62' data-original='%234f5b62' style='user-select: auto;' class=''/%3E%3C/g%3E%3C/g%3E%3Cg xmlns='http://www.w3.org/2000/svg' style='user-select: auto;'%3E%3Cg style='user-select: auto;'%3E%3Cpath d='M455.936,215.296c-25.088-31.232-114.688-133.12-225.28-133.12S30.464,184.064,5.376,215.296 c-7.168,8.704-7.168,21.504,0,30.72c25.088,31.232,114.688,133.12,225.28,133.12s200.192-101.888,225.28-133.12 C463.104,237.312,463.104,224.512,455.936,215.296z M230.656,338.176c-59.392,0-107.52-48.128-107.52-107.52 s48.128-107.52,107.52-107.52s107.52,48.128,107.52,107.52S290.048,338.176,230.656,338.176z' fill='%234f5b62' data-original='%23000000' style='user-select: auto;' class=''/%3E%3C/g%3E%3C/g%3E%3Cg xmlns='http://www.w3.org/2000/svg' style='user-select: auto;'%3E%3C/g%3E%3Cg xmlns='http://www.w3.org/2000/svg' style='user-select: auto;'%3E%3C/g%3E%3Cg xmlns='http://www.w3.org/2000/svg' style='user-select: auto;'%3E%3C/g%3E%3Cg xmlns='http://www.w3.org/2000/svg' style='user-select: auto;'%3E%3C/g%3E%3Cg xmlns='http://www.w3.org/2000/svg' style='user-select: auto;'%3E%3C/g%3E%3Cg xmlns='http://www.w3.org/2000/svg' style='user-select: auto;'%3E%3C/g%3E%3Cg xmlns='http://www.w3.org/2000/svg' style='user-select: auto;'%3E%3C/g%3E%3Cg xmlns='http://www.w3.org/2000/svg' style='user-select: auto;'%3E%3C/g%3E%3Cg xmlns='http://www.w3.org/2000/svg' style='user-select: auto;'%3E%3C/g%3E%3Cg xmlns='http://www.w3.org/2000/svg' style='user-select: auto;'%3E%3C/g%3E%3Cg xmlns='http://www.w3.org/2000/svg' style='user-select: auto;'%3E%3C/g%3E%3Cg xmlns='http://www.w3.org/2000/svg' style='user-select: auto;'%3E%3C/g%3E%3Cg xmlns='http://www.w3.org/2000/svg' style='user-select: auto;'%3E%3C/g%3E%3Cg xmlns='http://www.w3.org/2000/svg' style='user-select: auto;'%3E%3C/g%3E%3Cg xmlns='http://www.w3.org/2000/svg' style='user-select: auto;'%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A")`,
}

const theme = {
  size,
  color,
  media,
  display,
  concept,
  icon,
}

export type Theme = typeof theme
export const styled = baseStyled as ThemedStyledInterface<Theme>
export default theme
