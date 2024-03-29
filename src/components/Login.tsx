import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="bg-gray-200 h-screen flex justify-center items-center relative">
      <h1 className="text-center text-4xl font-extrabold text-gray-900 absolute top-14">NIGGA<span className="text-blue-600 leading-relaxed"> VAULT</span></h1>
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-semibold mb-2">Username</label>
            <input type="text" id="username" name="username" placeholder="Enter your username" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
          </div>
          <Link to="/Vault">
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">Login</button>
          </Link>
        </form>
        <Link to="/adduser">
        <div className="mt-4 text-center">
          <p className="text-gray-700">Don't have an account? <a href="/signup" className="text-blue-500 font-semibold hover:text-blue-800">Sign Up</a></p>
        </div>
        </Link>
      </div>
    </div>
  );
}

export default Login;
