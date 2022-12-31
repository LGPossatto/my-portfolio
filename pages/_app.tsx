import type { AppProps } from "next/app";
import { ProjectsProvider } from "../context/projects/ProjectsContext";

import "../styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ProjectsProvider>
      <Component {...pageProps} />
    </ProjectsProvider>
  );
}
