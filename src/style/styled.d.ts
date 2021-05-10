// eslint-disable-next-line import/no-unresolved
import { VeganTheme } from '@pancakeswap-libs/uikit'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends VeganTheme {}
}
