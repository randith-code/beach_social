import { Inter, Anton, Roboto } from "next/font/google";
import "./globals.css";
import ServiceContextProvider from "./context/serviceContextProvider";

const inter = Inter({ subsets: ["latin"] });

const anton = Anton({
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
  weight: "400",
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "Beach Social",
  description: "A social media agency",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Beach Social</title>
        <link rel="shortcut icon" type="image/x-icon" href="/Logo color.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
      </head>
      <ServiceContextProvider>
        <body
          className={`${inter.className} ${roboto.variable} ${anton.variable}`}
        >
          {children}
          <div id="overlay-root"></div>
        </body>
      </ServiceContextProvider>
    </html>
  );
}
