import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Beach Social</title>
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="http://www.beachsocial.leadmedia.lk/wp-content/uploads/2024/04/beach_social_logo.png"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
