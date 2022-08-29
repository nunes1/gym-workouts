import React from 'react';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';

import createEmotionCache from '../utility/createEmotionCache';
import darkTheme from '../styles/theme/darkTheme';
import '../styles/globals.css';

const clientSideEmotionCache = createEmotionCache();
import type { AppProps } from 'next/app';

interface MainAppProps extends AppProps {
  emotionCache: EmotionCache;
}

const MyApp = ({ Component, pageProps, emotionCache = clientSideEmotionCache }: MainAppProps) => {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;
