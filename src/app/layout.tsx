import type { Metadata } from "next";
import { Commissioner, DM_Sans } from "next/font/google";
import "../styles/globals.css";
import Script from "next/script";

const commissioner = Commissioner({
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "city hypes",
  description: "",
  icons: {
    icon: "./cityhypes.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
         {/* <!-- Google tag (gtag.js) --> */}
         <Script 
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-HLZDDX24CF"
        />
        <Script
           id="google-analytics"
           strategy="afterInteractive"
           dangerouslySetInnerHTML={{
             __html: `
               window.dataLayer = window.dataLayer || [];
               function gtag(){dataLayer.push(arguments);}
               gtag('js', new Date());
               gtag('config', 'G-HLZDDX24CF', {
                 page_path: window.location.pathname,
               });
             `,
           }}
        />
      </head>
      <body className={`${commissioner.className} ${dmSans.className}`}>
        {children}
      </body>
    </html>
  );
}
