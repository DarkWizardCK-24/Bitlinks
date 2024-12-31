"use client"
import React from 'react'
import localFont from "next/font/local";
import Link from 'next/link';

const poppins1 = localFont({
    src: "../app/fonts/Poppins-ExtraBold.ttf",
    variable: "--font-poppins",
    weight: "100 200 400 500 700 900",
});

const poppins2 = localFont({
    src: "../app/fonts/Poppins-SemiBold.ttf",
    variable: "--font-poppins",
    weight: "100 200 400 500 700 900",
});

const poppins3 = localFont({
    src: "../app/fonts/Poppins-Bold.ttf",
    variable: "--font-poppins",
    weight: "100 200 400 500 700 900",
});

const poppins4 = localFont({
    src: "../app/fonts/Poppins-Medium.ttf",
    variable: "--font-poppins",
    weight: "100 200 400 500 700 900",
});

const Navbar = () => {
    return (
        <nav className="bg-purple-800 flex justify-between px-5 p-3 items-center text-white">
            <Link href="/">
                <div className={`${poppins4.className} logo text-2xl font-bold`}>
                    {/*<Image src={`./nav.png`} alt="nav" className={``} />*/}
                    Bitlinks
                </div>
            </Link>
            <ul className={`flex justify-center px-3 gap-8 items-center`}>
                <Link href="/"><button className={`${poppins4.className} p-2 rounded-lg text-md hover:bg-purple-700`}>Home</button></Link>
                <Link href="/about"><button className={`${poppins4.className} p-2 rounded-lg text-md hover:bg-purple-700`}>About</button></Link>
                <Link href="/shorten"><button className={`${poppins4.className} p-2 rounded-lg text-md hover:bg-purple-700`}>Shorten</button></Link>
                <li className={`flex gap-3`}>
                <Link href="/shorten">
                        <button className={`${poppins4.className} text-md bg-purple-600 hover:bg-purple-950 p-2 rounded-lg`}>
                            Try Now
                        </button>
                    </Link>
                    <Link href="https://github.com/DarkWizardCK-24">
                        <button className={`${poppins4.className} text-md bg-purple-600 hover:bg-purple-950 p-2 rounded-lg`}>
                            Github
                        </button>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
