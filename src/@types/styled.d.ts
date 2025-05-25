import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

// styled.d.ts arquivo de que so tem tipagem

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
