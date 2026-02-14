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
    <div className='[background:radial-gradient(125%_125%_at_50%_10%,#000_30%,#00E_100%)] min-h-screen'>
        <div className='mt-25 flex flex-col justify-center items-center bg-gradient-to-bl from-[#0f172a] via-[#1e1a84] to-[#0f172a] gap-6 p-5 w-1/2 mx-auto rounded-lg'>
        <h1 className='flex text-2xl font-bold justify-start'>Ready to get your URL shorten...</h1>
            <input className='bg-gray-700 border-3 font-extrablack border-blue-700 rounded-lg w-full md:w-1/2 xl:h-10 h-15 p-2' type="text" placeholder='Enter your URL'
            value={url}
            onChange={e => {setUrl(e.target.value)}} />
            <textarea className='bg-gray-700 border-3 font-extrablack border-blue-700 rounded-lg w-full md:w-1/2 xl:h-10 h-15 p-2' placeholder='Enter your preffered short URL text'
            value={shortUrl}
            onChange={e => {setShortUrl(e.target.value)}} />
            <button onClick={generate} className='bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg m-5 hover:bg-blue-300 transition duration-300'>GENERATE</button>
        {generated && <>  
            <div className='bg-blue-600 p-5 w-full rounded-lg flex flex-col justify-items-start break-words'>
                <span className='font-bold text-lg'>Your Link ~ </span><code><Link target="_blank" href={generated}>{generated}</Link></code>
                </div>
                </>}
        </div>
        
        
    </div>
  )
}

export default Shorten