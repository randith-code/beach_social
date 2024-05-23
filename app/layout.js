import { Inter } from "next/font/google";
import "./globals.css";
import ServiceContextProvider from "./context/serviceContextProvider";

const inter = Inter({ subsets: ["latin"] });

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
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <ServiceContextProvider>
        <body className={inter.className}>
          {children}
          <div id="overlay-root"></div>
        </body>
      </ServiceContextProvider>
    </html>
  );
}
