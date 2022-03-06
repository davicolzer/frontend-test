import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: 'Barlow',
    body: 'Barlow'
  },
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'black'
      },
      
    }
  }
})
