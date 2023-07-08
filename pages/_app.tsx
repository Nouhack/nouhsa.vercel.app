import "@/styles/globals.css";
import SEO from "../next-seo.config";
import clsx from "clsx";

import { DefaultSeo } from "next-seo";
import localFont from "next/font/local";
import { SessionProvider } from "next-auth/react";

import type { AppProps } from "next/app";
import Header from "@/components/Header";
import "highlight.js/styles/atom-one-dark.css";
import { Analytics } from "@vercel/analytics/react";

const graphik = localFont({
  src: [
    {
      path: "../public/fonts/Graphik-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Graphik-Medium.ttf",
      weight: "600",
      style: "bold",
    },
  ],
  variable: "--font-graphik",
  display: "swap",
});
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <div className={clsx("container", graphik.className)}>
        <DefaultSeo {...SEO} />
        <Header />
        <Component {...pageProps} />
        <Analytics />
      </div>
    </SessionProvider>
  );
}
