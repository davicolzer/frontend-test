import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: 'Barlow',
    body: 'Barlow'
  },
  styles: {
    global: {
      body: {
        bg: 'purple.700',
        color: 'purple.900'
      },
      
    }
  }
})
