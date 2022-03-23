import "@styles/globals.css";
import { MantineProvider } from '@mantine/core';

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-gray-800 p-4">
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "light",
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </div>
  );
}

export default MyApp;
