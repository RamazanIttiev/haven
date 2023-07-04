import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false
};

const theme = extendTheme({
  config,
  colors: {
    bg: {
      light: "#fff",
      dark: "#000"
    }
  },
  fonts: {
    body: "system-ui, sans-serif",
    heading: "Georgia, serif",
    mono: "Menlo, monospace"
  }
});

export default theme;