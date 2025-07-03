"use client";

import Head from 'next/head';
import { NextPage } from 'next';
import { useState } from 'react';
import axios from 'axios';
import { signIn, useSession } from 'next-auth/react';



const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

   const { data: session } = useSession(); // ✅ valid use

  const handleGoogleAuth = async () => {
    try {
      await signIn('google');

      // Wait for session to become available (not reliable with setTimeout)
      setTimeout(async () => {
        if (!session?.user?.email) return;

        const response = await axios.post(
          'http://localhost:4000/api/google-auth',
          { email: session.user.email },
          { withCredentials: true }
        );

        const { message, auth } = response.data;

        if (message) {
          alert(message);
        }

      }, 1500); // wait for redirect to complete
    } catch (e) {
      console.error(e);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:4000/api/login',
        { email, password },
        { withCredentials: true }
      );

      const { message, auth } = response.data;

      if (message) {
        alert(message);
      }

      console.log('Login submitted:', { email, password });

    } catch (e: any) {
      console.error('Login error:', e.response?.data || e.message || e);
      alert(e.response?.data?.message || 'Something went wrong');
    }

  };

  return (
    <div className="relative min-h-screen bg-white text-black flex items-center justify-center overflow-hidden">
      <div className="logo absolute top-5 left-5 text-2xl font-bold text-[#ff5a00] z-10">SEMrush</div>
      <div className="circle absolute top-[-50px] right-[-50px] w-[600px] h-[600px] md:w-[400px] md:h-[400px] sm:w-[300px] sm:h-[300px] bg-[#66ccff] rounded-full clip-ellipse-50-100"></div>
      <div className="hero absolute top-1/2 right-16 md:right-10 sm:right-5 transform -translate-y-1/2 w-[200px] h-[300px] md:w-[150px] md:h-[225px] sm:hidden bg-gray-300"></div> {/* Simplified background */}
      <div className="form-container text-center w-full max-w-[400px] md:max-w-[300px] sm:max-w-[250px]">
        <h2 className="text-2xl md:text-base sm:text-lg font-bold mb-4">Log in</h2>
        <button className="google-btn flex cursor-pointer items-center justify-center w-full p-2 border border-gray-300 rounded-md mb-2" onClick={()=>{
          handleGoogleAuth()
          }}>
          <img src="https://www.google.com/favicon.ico" alt="Google Icon" className="w-5 mr-2" />
          Log in with Google
        </button>
        <div className="or mb-2 text-gray-600">or</div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md mb-1"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md mb-1"
          />
          <div className="forgot text-xs text-blue-500 text-right mb-4">
            <a href="#">Forgot your password?</a>
          </div>
          <button
            type="submit"
            className="login-btn bg-[#ff5a00] text-white w-full p-2 rounded-md mb-2"
          >
            Log in
          </button>
        </form>
        <div className="signup text-sm">
          Don't have a Semrush account? <a href="#" className="text-blue-500 hover:underline">Sign up</a>
        </div>
        <div className="saml text-sm mt-2">Log in with SAML</div>
      </div>
      <div className="activate-windows absolute bottom-5 right-5 text-xs md:text-[10px] sm:text-[8px] text-gray-400">
        Activate Windows<br />Go to Settings to activate Windows.
      </div>
      <div className="privacy absolute bottom-5 left-5 text-xs md:text-[10px] sm:text-[8px] text-gray-400">Privacy - Terms</div>
    </div>
  );
};

const Home: NextPage = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="bg-gradient-to-b from-[#3f1e6d] to-[#2a1a4e] text-white font-sans">
      {/* Login Form Section */}
      <LoginForm />
    </div>
  );
};

export default Home;