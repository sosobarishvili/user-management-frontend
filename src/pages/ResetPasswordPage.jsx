import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import SideImage from '../components/SideImage';
import Logo from '../assets/Logo';

const ResetPasswordPage = () => {
  const [password, setPassword] = useState('');
  const { token } = useParams(); // Reads the token from the URL
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`/api/auth/reset-password/${token}`, { password });
      toast.success(data.message);
      navigate('/login');
    } catch (error) {
      toast.error(error.response?.data?.error || 'Failed to reset password');
    }
  };

  return (
    <div className="flex h-full flex-row items-center justify-between min-h-screen bg-white">
      <div className="w-full h-[100vh] md:w-1/2 flex flex-col justify-between px-[5%] py-[5%]">
        <div className="mb-6 flex justify-center md:justify-start">
          <Logo className="h-8 md:h-10" />
        </div>
        <div className="w-full max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-6">Reset Password</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="newPassword" className="block text-gray-700 text-sm font-bold mb-2">
                New Password
              </label>
              <input
                type="password"
                id="newPassword"
                placeholder="Enter new password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="mb-6">
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Reset Password
              </button>
            </div>
          </form>
        </div>

        <div className="text-center text-gray-600">
          <Link to="/login" className="text-blue-500 hover:text-blue-800">
            Back to Login
          </Link>
        </div>
      </div>
      <SideImage />
    </div>
  );
};

export default ResetPasswordPage;