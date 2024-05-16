import { extendTheme, useColorMode } from '@chakra-ui/react';


const themeExtended = extendTheme({
  
  styles: {
    global: ({ colorMode }) => ({
      body: {
        bg: colorMode === 'dark' ? 'black' : 'white',
      },
    }),
  },
  fonts: {
    heading: 'MSungGold PRC Black',
    body: 'Nicolas Cochin W01 Regular',
  },
});

export default themeExtended;
