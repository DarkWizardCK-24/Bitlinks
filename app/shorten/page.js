"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import localFont from "next/font/local";

const poppins1 = localFont({
    src: "../fonts/Poppins-ExtraBold.ttf",
    variable: "--font-poppins",
    weight: "100 200 400 500 700 900",
});

const poppins2 = localFont({
    src: "../fonts/Poppins-SemiBold.ttf",
    variable: "--font-poppins",
    weight: "100 200 400 500 700 900",
});

const poppins3 = localFont({
    src: "../fonts/Poppins-Bold.ttf",
    variable: "--font-poppins",
    weight: "100 200 400 500 700 900",
});

const poppins4 = localFont({
    src: "../fonts/Poppins-Medium.ttf",
    variable: "--font-poppins",
    weight: "100 200 400 500 700 900",
});

const Shorten = () => {
    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [generated, setGenerated] = useState("")

    const generate = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "shorturl": shorturl
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("/api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
                seturl("")   
                setshorturl("")
                console.log(result)
                alert(result.message)
            })
            .catch((error) => console.error(error));
    }

    return (
        <div className='mx-auto max-w-lg my-16 p-8 bg-green-400 rounded-xl flex flex-col gap-4'>
            <h1 className={`${poppins2.className} text-2xl p-2 gap-3`}>Generate your short URLs</h1>
            <div className='flex flex-col gap-4'>
                <input value={url} className={`p-3 focus:outline-pink-600 text-lg rounded-xl`}
                    onChange={e => { seturl(e.target.value) }} type="text" placeholder="Enter your URL" />
                <input value={shorturl} className={`p-3 focus:outline-pink-600 text-lg rounded-xl`}
                    onChange={e => { setshorturl(e.target.value) }} type="text" placeholder="Enter your preferred short URL text" />
                <Link href="/shorten">
                    <button onClick={generate} className={`${poppins4.className} text-white text-md bg-purple-800 hover:bg-purple-950 p-3 rounded-lg`}>
                        Generate Link
                    </button>
                </Link>
            </div>
            {generated &&
                <>
                    <span className={`${poppins2.className}`}>Your link : </span><code><Link target="_blank" href={generated}>{generated}</Link>
                    </code>
                </>}
        </div>
    )
}

export default Shorten
