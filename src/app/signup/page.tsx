"use client";

import { NextPage } from 'next';
import { useState } from 'react';
import axios from 'axios';
import { signIn, useSession } from 'next-auth/react';



const SignupForm = () => {
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

        const { message } = response.data;

        if (message) {
          alert(message);
        }

      }, 1500);
    } catch (e: unknown) {
      console.error(e);
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();


    const api = await axios.post('http://localhost:4000/api/signup', {email: email, password: password},{withCredentials: true}).then((response)=>{
      const {message, auth} = response.data;
      if(message){
        alert(message)
      }
      console.log('Email submitted:', email);
    }).catch((e: unknown) =>{
      alert('Something went wrong')
      console.log(e)
    }
    )

    

  };

  return (
    <div className="relative min-h-screen bg-white text-black flex items-center justify-center overflow-hidden">
      <div className="logo absolute top-4 left-4 text-xl sm:text-2xl font-bold text-[#ff5a00] z-10">SEMrush</div>
      <div className="circle-left absolute bottom-[-100px] left-[-100px] w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] bg-[#c4a6ff] rounded-full">
        <div className="absolute top-[-30px] left-6 w-[100px] h-[50px] sm:top-[-40px] sm:left-8 sm:w-[150px] sm:h-[75px] md:top-[-50px] md:left-12 md:w-[200px] md:h-[100px] bg-[#ff5a00] rounded-t-full transform -rotate-45"></div>
      </div>
      <div className="circle-right absolute top-[-100px] right-[-100px] w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] bg-[#66cc99] rounded-full"></div>
      <div className="form-container text-center w-full max-w-[90%] sm:max-w-[400px] z-10">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">Create your account</h2>
        <button className="google-btn flex items-center justify-center w-full max-w-[280px] sm:max-w-[300px] mx-auto p-2 border border-gray-300 rounded-md mb-2 cursor-pointer" onClick={()=>{
          handleGoogleAuth()
          }}>
          <img src="https://www.google.com/favicon.ico" alt="Google Icon" className="w-4 sm:w-5 mr-2" />
          Continue with Google
        </button>
        <div className="or mb-2 text-gray-600 text-sm sm:text-base">or</div>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full max-w-[280px] sm:max-w-[300px] mx-auto p-2 border border-gray-300 rounded-md mb-2 text-sm sm:text-base"
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full max-w-[280px] sm:max-w-[300px] mx-auto p-2 border border-gray-300 rounded-md mb-2 text-sm sm:text-base"
          />
          <div className="terms text-xs sm:text-sm text-gray-600 mb-2">
            By creating your account, you agree to the{' '}
            <a href="#" className="text-blue-500 hover:underline">Terms of Service and Privacy Policy</a>
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-green-600 w-full max-w-[280px] sm:max-w-[300px] mx-auto"
          >
            Sign up for free
          </button>
        </form>
        <div className="login mt-2 text-xs sm:text-sm">
          Already have an account? <a href="#" className="text-blue-500 hover:underline">Log in</a>
        </div>
      </div>
      <div className="activate-windows absolute bottom-4 right-4 text-[10px] sm:text-xs text-gray-400 text-right">
        Activate Windows<br />Go to Settings to activate Windows.
      </div>
      <div className="privacy absolute bottom-4 left-4 text-[10px] sm:text-xs text-gray-400">Privacy - Terms</div>
    </div>
  );
};

const Home: NextPage = () => {
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (  
    <div className="bg-gradient-to-b from-[#3f1e6d] to-[#2a1a4e] text-white font-sans">
      {/* Sign-Up Form Section */}
      <SignupForm />
    </div>
  );
};

export default Home;