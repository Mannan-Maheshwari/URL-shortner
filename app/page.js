import React from "react";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div className="min-h-0 flex flex-col mt-15 pb-10">
      <div className="flex justify-around items-start flex-wrap gap-6">
        <div className="flex flex-col justify-start items-start flex-1 min-w-0 max-w-2xl">
          <div className="text-3xl font-bold mt-10 m-2">
            Best Free URL Shortener: Track & Optimize Links
          </div>
          <div className="text-xl mt-5 m-2 max-w-2xl">
            <p>
				We believe simplicity is the key. Our URL shortener is designed to be the most straightforward tool you will ever use — no clutter, no unnecessary steps, just paste your link, create a short URL, and share it instantly. Whether you’re managing personal links or professional campaigns, we make shortening URLs fast, reliable, and effortless.
			</p>

          </div>
          <div className="flex">
            <Link width={15} href={"/Shorten"}>
              <button className="bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg m-5 hover:bg-blue-300 transition duration-300">
                TRY NOW
              </button>
            </Link>
            <Link width={19} href={"/GITHUB"}>
              <button className="bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg m-5 hover:bg-blue-300 transition duration-300">
                GITHUB
              </button>
            </Link>
          </div>
        </div>
        <Image
          src={"/urlshort.png"}
          width={500}
          height={500}
          className="m-5 hidden md:block"
          alt="URL Shortener"
        />
      </div>
      <div className="flex justify-center items-center ">
        <Image
          src={"/urlshort.png"}
          width={350}
          height={350}
          className="m-5 md:hidden"
          alt="URL Shortener"
        />
        </div>
	  
    </div>
  );
};

export default Home;
