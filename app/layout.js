import Navbar from "@/components/Navbar";
import "./globals.css";
import localFont from "next/font/local";

const poppins1 = localFont({
    src: "./fonts/Poppins-ExtraBold.ttf",
    variable: "--font-poppins",
    weight: "100 200 400 500 700 900",
  });
  
  const poppins2 = localFont({
    src: "./fonts/Poppins-SemiBold.ttf",
    variable: "--font-poppins",
    weight: "100 200 400 500 700 900",
  });
  
  const poppins3 = localFont({
    src: "./fonts/Poppins-Bold.ttf",
    variable: "--font-poppins",
    weight: "100 200 400 500 700 900",
  });
  
  const poppins4 = localFont({
    src: "./fonts/Poppins-Medium.ttf",
    variable: "--font-poppins",
    weight: "100 200 400 500 700 900",
  });

export const metadata = {
  title: "Bitlinks - Url shortner",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
