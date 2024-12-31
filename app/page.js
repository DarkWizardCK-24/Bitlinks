"use client"
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";

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

export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className={`flex flex-col gap-4 items-center justify-center`}>
          <p className={`${poppins1.className} text-xl`}>The best URL shortner in the market.</p>
          <p className={`${poppins4.className} text-sm px-32 text-center`}>We are the best URL shortner in the world.
            Most of the URL shortners will ask for login or sign up details or subscription
            plans but we understand your need and try to fulfill it by creating this URL shortner.</p>
          <div className="flex gap-3 justify-start">
          <Link href="/shorten">
            <button className={`${poppins4.className} text-white text-sm bg-purple-800 hover:bg-purple-950 p-2 rounded-lg`}>
              Get Started
            </button>
          </Link>
          <Link href="https://github.com/DarkWizardCK-24">
            <button className={`${poppins4.className} text-white text-sm bg-purple-800 hover:bg-purple-950 p-2 rounded-lg`}>
              Github
            </button>
          </Link>
          </div>
        </div>
        <div className="flex justify-start relative">
          <Image alt="home" src={"/home.png"} fill={true} />
        </div>
      </section>
    </main>
  );
}
