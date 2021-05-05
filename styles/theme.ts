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
  yellow: '#ffff00',
  blue: '#0067a3',
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
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(3.5px);
    -webkit-backdrop-filter: blur(3.5px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
  `,
}

const theme = {
  size,
  color,
  media,
  display,
  concept,
}

export type Theme = typeof theme
export const styled = baseStyled as ThemedStyledInterface<Theme>
export default theme
