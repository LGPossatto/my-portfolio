import type { AppProps } from "next/app";
import Head from "next/head";

import "../styles/globals.scss";
import { ProjectsProvider } from "../context/projects/ProjectsContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ProjectsProvider>
      <Head>
        <title>Luiz Gustavo</title>
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <Component {...pageProps} />
    </ProjectsProvider>
  );
}
