import { SideBar } from "@/components";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return(
    <SideBar>
      <Component {...pageProps} />
    </SideBar>
  );
}
