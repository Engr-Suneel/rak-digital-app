export interface ColorPalette {
  primary: {
    blue: string;
    red: string;
    lightBlue: string;
  };
  gradient: {
    red: string;
  };
  gray: {
    light: string;
    medium: string;
    text: string;
    border: string;
    input: string;
  };
  white: string;
  black: string;
}

export const colors: ColorPalette = {
  primary: {
    blue: "#10233E",
    red: "#BF1313",
    lightBlue: "#0C7DE5",
  },
  gradient: {
    red: "linear-gradient(100.35deg, #EB3642 -17.3%, #990808 120.1%)",
  },
  gray: {
    light: "#F9F9F9",
    medium: "#D1D5DB",
    text: "#606367",
    border: "#E6E6E6",
    input: "#F1F3F4",
  },
  white: "#FFFFFF",
  black: "#000000",
};
