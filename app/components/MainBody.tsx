'use client';

import { FaSearch } from "react-icons/fa";
import { MicrophoneIcon } from '@heroicons/react/16/solid';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useRef } from 'react';

const MainBody: React.FC = () => {
  const router = useRouter();
  const searchInputRef = useRef<HTMLInputElement>(null);

  const search = async (e: React.KeyboardEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const term = searchInputRef.current?.value;
    console.log(term);
  
    if (term) {
      try {
        const response = await fetch('https://www.google.co.in/complete/search?q&cp=0&client=gws-wiz&xssi=t&gs_pcrt=2&hl=en-IN&authuser=0&psi=H0jhZo2cBdup2roPuMm5mAs.1726040095449&dpr=2https://google-two-zero.vercel.app/_next/data/JE1lkNVZpau4WJVTUTDtY/search.json?term=helloa', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: term,
          }),
        });
  
        console.log('Response Status:', response.status);
        console.log('Response Headers:', response.headers);
        console.log('Response Body:', await response.text()); // Detailed error info
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const data = await response.json();
        console.log('Data received:', data);
  
        router.push('/search');
  
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  };

  return (
    <form className="flex flex-col items-center mt-24 flex-grow w-4/5">
      <Image
        src="/google.png"
        width={300}
        height={100}
        alt="Google 2.0 - Made by Md Mohsin - Software Engineer"
      />
      <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
        <FaSearch className="h-5 mr-3 text-gray-500" />
        <input
          ref={searchInputRef}
          type="text"
          className="flex-grow focus:outline-none"
          onKeyDown={(e) => {
            if (e.key === 'Enter') search(e);
          }}
        />
        <MicrophoneIcon className="h-5" />
      </div>

      <div className="flex flex-col w-2/6 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
        <button
          type="button"
          onClick={(e) => search(e)} 
          className="btn"
        >
          Google Search
        </button>
        <button
          type="button"
          onClick={(e) => search(e)} 
          className="btn"
        >
          I&#39;m Feeling Lucky
        </button>
      </div>
    </form>
  );
};

export default MainBody;
