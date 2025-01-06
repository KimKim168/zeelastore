import localFont from "next/font/local";
import "./globals.css";
import { Koulen, Siemreap, Poppins } from "next/font/google";

import MyHeader from "@/components/my-header";
import MyNavigation from "@/components/my-navigation";
import { BASE_API_URL } from "@/env";
import MyFooter from "@/components/my-footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

export default async function RootLayout({ children }) {
  // const res = await fetch(`${BASE_API_URL}/categories`);
  // const resultCate = await res.json();
  // console.log(resultCate);
  const respone = await fetch(`${BASE_API_URL}/categories?withSub=2`, {
    next: {
      revalidate: 3600,
    },
  });
  const resultCate = await respone.json();
  console.log(resultCate);
  return (
    <html lang="en">
      <body
        className={` ${poppins.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MyHeader resultCate={resultCate} />
        {/* Navigation */}
        <MyNavigation resultCate={resultCate} />
        {/*End Navigation */}
        {/* Slider */}

        {/*End Slider */}
        {children}

        {/* Footer */}

        <MyFooter />

        {/*End Footer */}
      </body>
    </html>
  );
}
