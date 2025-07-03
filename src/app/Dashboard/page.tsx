"use client";

import Head from 'next/head';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import axios from 'axios';



const NotVerified = () => {
  return (
    <div className='fixed top-0 right-0 left-0 bottom-0 z-[999] font-bold bg-white text-black text-center items-center content-center'><div className='text-center text-4xl'>Access Denied, Please Login Now</div></div>
  )
}



const DashboardLayout = () => {
    const [verify, setVerify] = useState<null | boolean>(null);
  const handleButtonClick = (action: string) => {
    console.log(`${action} clicked`);
  };

  const verifyUser = async () => {
    try {
      const response = await axios.post('http://localhost:4000/api/verify', {}, { withCredentials: true })
      const { auth, message } = response.data;
      if (auth === true) {
        console.log("User verified");
        setVerify(Boolean(auth));
      } else {
        console.log("User not verified");
        setVerify(false);
      }
    } catch (error: any) {
      console.error('Verify error:', error.response?.data || error.message || error);
      setVerify(false);
    }
  }

  useEffect(() => {
    verifyUser()
  }, [])
  console.log("verify state:", verify)


  if (verify === null) {
    return <div className='text-center fixed top-0 bottom-0 justify-center justify-items-center items-center content-center'><div className='text-2xl text-center relative left-[45vw]'>Loading...</div></div>
  }

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      {!verify?<NotVerified />:null}
      <div className="header bg-[#1a0d48] text-white h-15 sm:h-12 md:h-16 flex items-center justify-between p-2 sm:p-2 md:p-5">
        <div className="logo text-2xl sm:text-xl md:text-2xl font-bold text-[#ff5a00]">SEMrush</div>
        <div className="search-bar flex items-center bg-white rounded-md p-1 sm:p-1 md:p-2">
          <input
            type="text"
            value="caryaati.com"
            readOnly
            className="border-none outline-none text-base sm:text-sm md:text-lg w-40 sm:w-36 md:w-56 p-1 sm:p-1 md:p-2"
          />
          <button
            onClick={() => handleButtonClick('Clear')}
            className="border-none cursor-pointer text-gray-600 ml-1 sm:ml-1 md:ml-2"
          >
            ×
          </button>
          <select className="border-none bg-white ml-1 sm:ml-1 md:ml-2 cursor-pointer p-1 sm:p-1 md:p-2 text-sm sm:text-xs md:text-sm">
            <option>Root Domain</option>
          </select>
        </div>
        <div className="nav-buttons flex space-x-2 sm:space-x-1 md:space-x-2">
          <button
            onClick={() => handleButtonClick('Upgrade')}
            className="upgrade bg-[#00cc66] border-none text-white p-1 sm:p-1 md:p-2 rounded-md"
          >
            Upgrade
          </button>
          <button
            onClick={() => handleButtonClick('Pricing')}
            className="border border-white text-white p-1 sm:p-1 md:p-2 rounded-md"
          >
            Pricing
          </button>
          <button
            onClick={() => handleButtonClick('Enterprise')}
            className="border border-white text-white p-1 sm:p-1 md:p-2 rounded-md"
          >
            Enterprise
          </button>
          <button
            onClick={() => handleButtonClick('More')}
            className="border border-white text-white p-1 sm:p-1 md:p-2 rounded-md"
          >
            More
          </button>
        </div>
      </div>
      <div className="flex flex-1">
        <div className="sidebar w-15 sm:w-12 md:w-15 bg-[#f5f7fa] absolute top-15 sm:top-12 md:top-16 left-0 bottom-0 flex flex-col items-center p-2 sm:p-2 md:p-2.5 transition-width duration-300 ease-in-out hover:w-52 sm:hover:w-40 md:hover:w-56">
          <a href="#" className="active text-2xl sm:text-xl md:text-2xl text-gray-600 hover:text-[#4b5e9d] flex items-center w-full pl-2.5 mb-3.5 sm:mb-3 md:mb-3.5 transition-colors duration-300">
            ⌂<span className="hidden hover:md:inline ml-2.5 text-base sm:text-sm md:text-base text-black">Home</span>
          </a>
          <a href="#" className="text-2xl sm:text-xl md:text-2xl text-gray-600 hover:text-[#4b5e9d] flex items-center w-full pl-2.5 mb-3.5 sm:mb-3 md:mb-3.5 transition-colors duration-300">
            <span className="hidden hover:md:inline ml-2.5 text-base sm:text-sm md:text-base text-black">SEO</span>
          </a>
          <a href="#" className="text-2xl sm:text-xl md:text-2xl text-gray-600 hover:text-[#4b5e9d] flex items-center w-full pl-2.5 mb-3.5 sm:mb-3 md:mb-3.5 transition-colors duration-300">
            <span className="hidden hover:md:inline ml-2.5 text-base sm:text-sm md:text-base text-black">Analytics</span>
          </a>
          <a href="#" className="text-2xl sm:text-xl md:text-2xl text-gray-600 hover:text-[#4b5e9d] flex items-center w-full pl-2.5 mb-3.5 sm:mb-3 md:mb-3.5 transition-colors duration-300">
            <span className="hidden hover:md:inline ml-2.5 text-base sm:text-sm md:text-base text-black">Location</span>
          </a>
          <a href="#" className="text-2xl sm:text-xl md:text-2xl text-gray-600 hover:text-[#4b5e9d] flex items-center w-full pl-2.5 mb-3.5 sm:mb-3 md:mb-3.5 transition-colors duration-300">
            <span className="hidden hover:md:inline ml-2.5 text-base sm:text-sm md:text-base text-black">Edit</span>
          </a>
          <a href="#" className="text-2xl sm:text-xl md:text-2xl text-gray-600 hover:text-[#4b5e9d] flex items-center w-full pl-2.5 mb-3.5 sm:mb-3 md:mb-3.5 transition-colors duration-300">
            ♥<span className="hidden hover:md:inline ml-2.5 text-base sm:text-sm md:text-base text-black">Heart</span>
          </a>
          <a href="#" className="text-2xl sm:text-xl md:text-2xl text-gray-600 hover:text-[#4b5e9d] flex items-center w-full pl-2.5 mb-3.5 sm:mb-3 md:mb-3.5 transition-colors duration-300">
            <span className="hidden hover:md:inline ml-2.5 text-base sm:text-sm md:text-base text-black">Settings (04:14 PM PKT, Jul 02, 2025)</span>
          </a>
          <a href="#" className="text-2xl sm:text-xl md:text-2xl text-gray-600 hover:text-[#4b5e9d] flex items-center w-full pl-2.5 mb-3.5 sm:mb-3 md:mb-3.5 transition-colors duration-300">
            <span className="hidden hover:md:inline ml-2.5 text-base sm:text-sm md:text-base text-black">Users</span>
          </a>
          <a href="#" className="text-2xl sm:text-xl md:text-2xl text-gray-600 hover:text-[#4b5e9d] flex items-center w-full pl-2.5 mb-3.5 sm:mb-3 md:mb-3.5 transition-colors duration-300">
            <span className="hidden hover:md:inline ml-2.5 text-base sm:text-sm md:text-base text-black">Grid</span>
          </a>
        </div>
        <div className="overview bg-[#f0f4f8] p-2.5 sm:p-2 md:p-2.5 flex items-center border-b border-[#e0e7ff] ml-15 sm:ml-12 md:ml-15 w-[calc(100%-60px)] sm:w-[calc(100%-50px)] md:w-[calc(100%-60px)] flex-wrap gap-2.5">
          <div className="breadcrumbs text-[#1a0d48] text-sm sm:text-xs md:text-sm">
            <a href="#">Home</a> &gt; <a href="#">SEO</a> &gt; <a href="#">Domain Overview</a>
          </div>
          <div className="title text-[#1a0d48] text-sm sm:text-xs md:text-sm font-bold">
            Domain Overview: caryaati.com
          </div>
          <div className="filters flex flex-wrap gap-2.5">
            <select className="border border-gray-300 rounded-md p-1.5 sm:p-1 md:p-1.5 text-sm sm:text-xs md:text-sm">
              <option>Worldwide</option>
              <option>US</option>
              <option>UK</option>
              <option>DE</option>
            </select>
            <select className="border border-gray-300 rounded-md p-1.5 sm:p-1 md:p-1.5 text-sm sm:text-xs md:text-sm">
              <option>Desktop</option>
            </select>
            <select className="border border-gray-300 rounded-md p-1.5 sm:p-1 md:p-1.5 text-sm sm:text-xs md:text-sm">
              <option>Jul 02, 2025</option>
            </select>
            <select className="border border-gray-300 rounded-md p-1.5 sm:p-1 md:p-1.5 text-sm sm:text-xs md:text-sm">
              <option>USD</option>
            </select>
          </div>
          <div className="actions flex flex-wrap gap-2.5">
            <button
              onClick={() => handleButtonClick('User manual')}
              className="border border-gray-300 rounded-md p-1.5 sm:p-1 md:p-1.5 text-sm sm:text-xs md:text-sm text-gray-600"
            >
              User manual
            </button>
            <button
              onClick={() => handleButtonClick('Send feedback')}
              className="border border-gray-300 rounded-md p-1.5 sm:p-1 md:p-1.5 text-sm sm:text-xs md:text-sm text-gray-600"
            >
              Send feedback
            </button>
            <button
              onClick={() => handleButtonClick('Export to PDF')}
              className="border border-gray-300 rounded-md p-1.5 sm:p-1 md:p-1.5 text-sm sm:text-xs md:text-sm text-gray-600"
            >
              Export to PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Home: NextPage = () => {
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="bg-gradient-to-b from-[#3f1e6d] to-[#2a1a4e] text-white font-sans">
      <Head>
        <title>SEMrush Dashboard</title>
        <meta name="description" content="SEMrush dashboard with header, sidebar, and overview" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DashboardLayout />
    </div>
  );
};

export default Home;