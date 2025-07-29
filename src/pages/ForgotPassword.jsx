import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import SideImage from '../components/SideImage';
import Logo from '../assets/Logo';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('/api/auth/forgot-password', { email });
      toast.info(data.message); // Show the success/info message from the server
    } catch (error) {
      toast.error(error.response?.data?.error || 'An error occurred');
    }
  };

  return (
    <div className="flex min-h-screen bg-white">
      <div className="w-full md:w-1/2 items-start px-6 py-8">

        <div className="mb-6 flex justify-center md:justify-start">
          <Logo className="h-8 md:h-10" />
        </div>
        <div className="bg-white p-8 mx-auto rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-3xl font-bold text-center mb-4">Forgot Password</h2>
          <p className="text-center text-gray-600 mb-6">Enter your email and we'll send you a link to reset your password.</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                Email address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="mb-6">
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Send Reset Link
              </button>
            </div>
          </form>
          <div className="text-center text-gray-600">
            Remembered your password?{' '}
            <Link to="/login" className="text-blue-500 hover:text-blue-800">
              Login
            </Link>
          </div>
        </div>
      </div>
      <SideImage />
    </div>

  );
};

export default ForgotPasswordPage;