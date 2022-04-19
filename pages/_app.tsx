import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./theme";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={lightTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
