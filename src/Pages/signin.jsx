import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black text-white px-4">
      <div className="bg-zinc-900 bg-opacity-80 p-12 md:p-16 rounded-md w-full max-w-[450px] shadow-xl">
        
        {/* Centered Heading */}
        <h1 className="text-3xl font-bold mb-8 text-center text-white">Sign In</h1>
        
        <form className="space-y-6">
          <input
            type="email"
            placeholder="Email or phone number"
            className="w-full p-4 bg-zinc-800 border border-zinc-700 rounded text-white placeholder-gray-400 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-4 bg-zinc-800 border border-zinc-700 rounded text-white placeholder-gray-400 focus:outline-none"
          />
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 transition-colors py-3 rounded font-semibold"
          >
            Sign In
          </button>
        </form>

        <div className="flex justify-between items-center text-sm text-gray-400 mt-4">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            Remember me
          </label>
          <a href="#" className="hover:underline">Need help?</a>
        </div>

        {/* Centered "Sign up now" Text */}
        <p className="mt-8 text-sm text-center text-gray-400">
          New to Japanee?{' '}
          <Link to="/signup" className="text-white hover:underline">
            Sign up now
          </Link>
        </p>

        {/* Centered reCAPTCHA Text */}
        <p className="text-xs text-center text-gray-500 mt-4 leading-5">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
        </p>
      </div>
    </div>
  );
};

export default SignIn;
