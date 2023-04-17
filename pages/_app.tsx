import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/components/Header";
import "highlight.js/styles/atom-one-dark.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="container">
      <Header />
      <Component {...pageProps} />
    </div>
  );
}
