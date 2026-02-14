"use client"
import Link from 'next/link';
import React from 'react'
import { useState } from 'react'



const Shorten = () => {

    const[url, setUrl] = useState("");
    const[shortUrl, setShortUrl] = useState("");
    const[generated, setGenerated] = useState(false);

    const generate =()=>{
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
        "url": url,
        "shortUrl": shortUrl
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
            const base = window.location.origin;
            setGenerated(`${base}/${shortUrl}`);
            setUrl("");
            setShortUrl("");
            console.log(result)
            alert(result.message)})
        .catch((error) => console.error(error));
    }


  return (
    <div className="min-h-0 pt-24 pb-10 px-4">
        <div className="flex flex-col justify-center items-center gap-6 p-6 w-full max-w-xl mx-auto rounded-xl bg-[#0f172a]/80 backdrop-blur-sm border border-[#1e1a78]/50 shadow-xl">
        <h1 className="text-2xl font-bold text-white w-full text-left">Ready to get your URL shorten...</h1>
            <div className="w-full flex flex-col gap-2">
              <label className="text-sm font-medium text-white/90">Your URL</label>
              <input
                className="bg-gray-700/90 border-2 border-blue-700/60 rounded-lg w-full min-h-10 px-3 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                type="url"
                placeholder="Enter your URL"
                value={url}
                onChange={e => setUrl(e.target.value)}
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <label className="text-sm font-medium text-white/90">Preferred short URL text</label>
              <input
                className="bg-gray-700/90 border-2 border-blue-700/60 rounded-lg w-full min-h-10 px-3 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                type="text"
                placeholder="e.g. my-link"
                value={shortUrl}
                onChange={e => setShortUrl(e.target.value)}
              />
            </div>
            <button onClick={generate} className="bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300 w-full max-w-xs">GENERATE</button>
        {generated && (
            <div className="bg-blue-600/90 p-4 w-full rounded-lg flex flex-col justify-items-start break-all text-white">
                <span className="font-bold text-lg">Your Link ~</span>
                <code className="mt-1"><Link target="_blank" href={generated} className="text-blue-200 hover:underline">{generated}</Link></code>
            </div>
        )}
        </div>
    </div>
  )
}

export default Shorten