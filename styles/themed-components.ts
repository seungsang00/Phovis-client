// 테마를 포함하여 재정의한 styled-components
import * as styledComponents from 'styled-components'
import { ThemedStyledComponentsModule } from 'styled-components'
import { Theme } from './theme'
import withSizes from './withSizes'
export type DeviceSize = 'phone' | 'tablet' | 'desktop' | 'ssr'

type StyledFunction<_T> = styledComponents.ThemedStyledFunction<any, Theme>

function withProps<T, U extends HTMLElement = HTMLElement>(
  styledFunction: StyledFunction<React.HTMLProps<U>>
): StyledFunction<T & React.HTMLProps<U>> {
  return styledFunction
}

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
  ServerStyleSheet,
  ThemeConsumer,
} = (styledComponents as unknown) as ThemedStyledComponentsModule<Theme>

export {
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
  withProps,
  ServerStyleSheet,
  withSizes,
  ThemeConsumer,
}

export default styled
