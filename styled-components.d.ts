import { theme } from '@/app/lib/theme/theme';
import 'styled-components';

type TCustomThem = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends TCustomThem {}
}
