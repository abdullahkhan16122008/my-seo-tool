"use client";

import Head from 'next/head';
import { NextPage } from 'next';
import { useState } from 'react';

const Home: NextPage = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#3f1e6d] to-[#2a1a4e] text-white font-sans">
      <Head>
        <title>SEO Tool Landing Page</title>
        <meta name="description" content="SEO tool for online marketing" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 bg-[#1c1426] shadow-md">
        <div className="flex items-center space-x-6">
          <div className="text-2xl font-bold text-orange-500">SEMRUSH</div>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-gray-300">Features</a></li>
            <li><a href="#" className="hover:text-gray-300">Pricing</a></li>
            <li className="relative">
              <a
                href="#"
                className="hover:text-gray-300 flex items-center"
                onClick={(e) => {
                  e.preventDefault();
                  setIsDropdownOpen(!isDropdownOpen);
                }}
              >
                Resources
                <svg
                  className="ml-1 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </a>
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-[#1c1426] border border-gray-700 rounded-lg shadow-lg z-10">
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-700 hover:text-white"
                  >
                    Blog
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-700 hover:text-white"
                  >
                    Guides
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-700 hover:text-white"
                  >
                    Help Center
                  </a>
                </div>
              )}
            </li>
            <li><a href="#" className="hover:text-gray-300">Company</a></li>
            <li><a href="#" className="hover:text-gray-300">App Center <span className="text-green-400 text-xs">new</span></a></li>
            <li><a href="#" className="hover:text-gray-300">Enterprise</a></li>
          </ul>
        </div>
        <div className="flex items-center space-x-4">
          <select className="bg-transparent border border-gray-500 rounded px-2 py-1 text-sm">
            <option>EN</option>
          </select>
          <a href="#" className="hover:text-gray-300">Log In</a>
          <a href="#" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Sign Up</a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-6 overflow-hidden">
        {/* Background Shapes */}
        <svg className="absolute bottom-0 left-0" width="300" height="300" viewBox="0 0 300 300" fill="none">
          <circle cx="150" cy="150" r="150" fill="#4AD7D1" fillOpacity="0.7" />
        </svg>
        <svg className="absolute top-0 right-0" width="400" height="400" viewBox="0 0 400 400" fill="none">
          <circle cx="200" cy="200" r="200" fill="#C4B5FD" fillOpacity="0.5" />
        </svg>

        {/* Content */}
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-4">
          Get measurable results<br />from online marketing
        </h1>
        <p className="text-lg md:text-xl text-center mb-8">
          Do SEO, content marketing, competitor research,<br />
          PPC and social media marketing from just one platform.
        </p>
        <div className="flex items-center space-x-2 bg-white rounded-lg shadow-lg p-1 w-full max-w-lg">
          <input
            type="text"
            placeholder="Enter website or URL"
            className="flex-1 p-2 text-black rounded-l-lg outline-none"
          />
          <select className="p-2 text-black border-l border-gray-300">
            <option>US</option>
            <option>UAE</option>
            <option>PK</option>
          </select>
          <button className="bg-orange-500 text-white px-6 py-2 rounded-r-lg hover:bg-orange-600">
            Start now
          </button>
        </div>

        {/* Trusted By Section */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm mb-4">Trusted by the world's leading brands</p>
          <div className="flex justify-center items-center space-x-6 md:space-x-10">
            <span className="text-lg font-semibold">TESLA</span>
            <span className="text-lg font-semibold">DECATHLON</span>
            <span className="text-lg font-semibold">P&G</span>
            <span className="text-lg font-semibold">SAMSUNG</span>
            <span className="text-lg font-semibold">LALIGA</span>
            <span className="text-lg font-semibold">FEDEX</span>
          </div>
        </div>
      </main>
        {/* Footer */}
        <footer className="bg-[#1A1A1A] text-white py-8 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="mt-8 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <button className="flex items-center space-x-2 mb-4 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-4l-3 3v-3z" />
              </svg>
              <span>Contact us</span>
            </button> 
            <p className="text-sm text-gray-400" style={{marginTop:'-25px', marginLeft:'20px'}}>USA, 800 Boylston Street, Suite 2475, Boston, MA 02199</p>
           </div>
        </div>
         <div className="mt-8 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              Get started with Semrush!
            </button>
            <a href="#" className="text-green-500 hover:text-green-400 text-sm">
              or see our plans & pricing
            </a>
          </div>
        </div>  
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-6 gap-8">
         
          <div>
            <h3 className="font-bold mb-2">SEMRUSH</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:text-gray-300">Features</a></li>
              <li><a href="#" className="hover:text-gray-300">Pricing</a></li>
              <li><a href="#" className="hover:text-gray-300">Free Trial</a></li>
              <li><a href="#" className="hover:text-gray-300">Success Stories</a></li>
              <li><a href="#" className="hover:text-gray-300">Stats and Facts</a></li>
              <li><a href="#" className="hover:text-gray-300">Insights</a></li>
              <li><a href="#" className="hover:text-gray-300">News</a></li>
              <li><a href="#" className="hover:text-gray-300">Affiliate Program</a></li>
              <li><a href="#" className="hover:text-gray-300">Help</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">COMMUNITY</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:text-gray-300">Semrush Blog</a></li>
              <li><a href="#" className="hover:text-gray-300">Webinars</a></li>
            </ul>
            <h3 className="font-bold mt-4 mb-2">FREE TOOLS</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:text-gray-300">AI Writing Tools</a></li>
              <li><a href="#" className="hover:text-gray-300">SEO Tools</a></li>
              <li><a href="#" className="hover:text-gray-300">SEOquake</a></li>
              <li><a href="#" className="hover:text-gray-300">Sensor</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">MORE TOOLS</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:text-gray-300">Enterprise SEO</a></li>
              <li><a href="#" className="hover:text-gray-300">Enterprise Crawler</a></li>
              <li><a href="#" className="hover:text-gray-300">Insights24</a></li>
              <li><a href="#" className="hover:text-gray-300">Mfour</a></li>
              <li><a href="#" className="hover:text-gray-300">Prowly</a></li>
              <li><a href="#" className="hover:text-gray-300">App Center</a></li>
              <li><a href="#" className="hover:text-gray-300">Agency Partners</a></li>
              <li><a href="#" className="hover:text-gray-300">SplitSignal</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">COMPANY</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:text-gray-300">About Us</a></li>
              <li><a href="#" className="hover:text-gray-300">Newsroom</a></li>
              <li><a href="#" className="hover:text-gray-300">Careers</a></li>
              <li><a href="#" className="hover:text-gray-300">Partners</a></li>
              <li><a href="#" className="hover:text-gray-300">Legal Info</a></li>
              <li><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-300">Cookie Settings</a></li>
              <li><a href="#" className="hover:text-gray-300">Do not sell my personal info</a></li>
              <li><a href="#" className="hover:text-gray-300">Security Info</a></li>
              <li><a href="#" className="hover:text-gray-300">For Investors</a></li>
              <li><a href="#" className="hover:text-gray-300">Semrush Select</a></li>
              <li><a href="#" className="hover:text-gray-300">Global Issues Index</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">FOLLOW US</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:text-gray-300">X (twitter)</a></li>
              <li><a href="#" className="hover:text-gray-300">Facebook</a></li>
              <li><a href="#" className="hover:text-gray-300">LinkedIn</a></li>
              <li><a href="#" className="hover:text-gray-300">Instagram</a></li>
              <li><a href="#" className="hover:text-gray-300">YouTube</a></li>
              <li><a href="#" className="hover:text-gray-300">Pinterest</a></li>
            </ul>
            <h3 className="font-bold mt-4 mb-2">LANGUAGE</h3>
            <select className="bg-transparent border border-gray-500 rounded px-2 py-1 text-sm">
              <option>English</option>
            </select>
          </div>
        </div>
       
        <div className="mt-4 bg-gray-900 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="text-orange-500 text-xl font-bold">SEMRUSH</div>
            <p className="text-sm text-gray-400">© 2008 - 2025 Semrush. All rights reserved.</p>
          </div>
          </div>
        {/* Background Pattern */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-repeat-x bg-[url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'%3E%3Cpath d=\'M0 0 L50 50 L100 0 Z\' fill=\'%23E5E7EB\' opacity=\'0.1\'/%3E%3C/svg%3E')] opacity-50" />
      </footer>
    </div>
  );
};

export default Home;