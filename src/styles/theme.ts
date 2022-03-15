import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: { 
    purple: {
      50: "#f1e8ff",
      100: "#E8DAFF",
      200: "#D4BBFF",
      300: "#BE95FF",
      400: "#A56EFF",
      500: "#8A3FFC",
      600: "#6929C4",
      700: "#491D8B",
      800: "#31135E",
      900: "#1C0F30",
    }
  },
  fonts: {
    heading: "Barlow",
    body: "Barlow",
  },
  styles: {
    global: {
      body: {
        bg: "purple.50",
        color: "purple.800",
      },
    },
  },
});
