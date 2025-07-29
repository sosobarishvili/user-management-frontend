import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import Logo from '../assets/Logo';
import SideImage from '../components/SideImage'; // ✅ Reusable component

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('/api/auth/login', { email, password });
      localStorage.setItem('token', data.token);
      toast.success('Login successful!');
      navigate('/');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="flex h-full flex-row items-center justify-between min-h-screen bg-white">
      {/* Left form area */}
      <div className="w-full h-[100vh] md:w-1/2 flex flex-col justify-between px-[5%] py-[5%]">
        <div className="mb-6 flex justify-center md:justify-start">
          <Logo className="h-8 md:h-10" />
        </div>
        <div className="w-full max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h2>

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
              <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline w-full transition duration-150 ease-in-out"
              >
                Log In
              </button>
            </div>
          </form>
        </div>

        <div className="flex flex-row justify-between items-center">
          <div className="text-gray-600 text-sm">
            Don’t have an account?{' '}
            <Link to="/register" className="text-blue-600 hover:underline text-lg font-bold">
              Sign Up
            </Link>
          </div>
          <div className="text-blue-600 hover:underline">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </div>
      </div>

      {/* Right image area */}
      <SideImage />
    </div>
  );
};

export default LoginPage;
