import "@/styles/globals.css";
import { Josefin_Sans } from "@next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin",
  display: "optional",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={josefin.variable}>
      <Component {...pageProps} />
    </main>
  );
}
