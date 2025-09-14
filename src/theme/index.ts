import { colors, type ColorPalette } from "./colors";
import { typography, type TypographyScale } from "./typography";

export interface Theme {
  colors: ColorPalette;
  typography: TypographyScale;
}

export const theme: Theme = {
  colors,
  typography,
};

export { colors, typography };
export type { ColorPalette, TypographyScale };
