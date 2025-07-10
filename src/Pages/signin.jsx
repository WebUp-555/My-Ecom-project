import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    
    <div className="flex items-center justify-center h-screen bg-black text-white ">

      <div className="bg-zinc-900 p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Sign In</h1>
        <form>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-4 bg-zinc-800 border border-zinc-700 rounded text-white"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-6 bg-zinc-800 border border-zinc-700 rounded text-white"
          />
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 py-3 rounded font-semibold"
          >
            Sign In
          </button>
        </form>
        <p className="mt-6 text-center text-sm">
          New to Japanee?{' '}
          <Link to="/signup" className="text-blue-400 hover:underline">
            Sign up now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;