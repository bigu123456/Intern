import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import midas from '../images/midas.png';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (username && password) {
      try {
        const response = await fetch('http://localhost:5000/api/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        });

        const data = await response.json();

        if (response.ok) {
          setShowSuccess(true); // Hide form and left panel
          console.log('Login response:', data);

          // Navigate after 2 seconds
          setTimeout(() => {
            navigate('/');
          }, 2000);
        } else {
          alert(data.message || 'Login failed');
        }
      } catch (error) {
        console.error('Login error:', error);
        alert('An error occurred during login.');
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left panel - Hide when showSuccess is true */}
      {!showSuccess && (
        <div className="md:w-1/3 w-full bg-blue-800 text-white flex flex-col justify-between p-10">
          <div>
            <img src={midas} alt="Logo" className="w-16 h-auto object-cover mb-4" />
            <h3 className="text-xl font-semibold">midas health Service</h3>
          </div>
          <div>
            <h1 className="text-3xl font-semibold mb-4">Check The Status</h1>
            <p className="text-sm">MIDAS DR. HOMS V5.1.2.5</p>
          </div>
        </div>
      )}

      {/* Right panel */}
      <div className={`w-full flex items-center justify-center p-6 ${showSuccess ? 'md:w-full' : 'md:w-2/3'}`}>
        <div className="max-w-md w-full space-y-8 text-center">
          {showSuccess ? (
            // Success message only
            <div className="text-green-600 font-semibold text-2xl animate-bounce">
              ✅ You are now in Dashboard...
            </div>
          ) : (
            <>
              <img src={midas} alt="Logo" className="w-16 h-auto mx-auto" />
              <h2 className="mt-6 text-2xl font-semibold text-gray-900">Welcome back</h2>
              <p className="mt-2 text-gray-600">Enter your username and password to sign in</p>

              <form className="mt-8 space-y-4" onSubmit={handleSubmit} noValidate>
                <label htmlFor="username" className="sr-only">Username</label>
                <div className="flex items-center border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
                  <span className="text-gray-400 mr-2 select-none">👤</span>
                  <input
                    id="username"
                    type="text"
                    placeholder="Enter Username"
                    className="w-full outline-none"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                {submitted && !username && (
                  <p className="text-red-500 text-sm text-left mt-1">Username is required</p>
                )}

                <label htmlFor="password" className="sr-only">Password</label>
                <div className="flex items-center border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
                  <span className="text-gray-400 mr-2 select-none">🔍</span>
                  <input
                    id="password"
                    type="password"
                    placeholder="Enter Password"
                    className="w-full outline-none"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                {submitted && !password && (
                  <p className="text-red-500 text-sm text-left mt-1">Password is required</p>
                )}

                <button
                  type="submit"
                  disabled={!username || !password}
                  className={`w-full py-2 rounded-md text-white transition ${
                    username && password
                      ? 'bg-teal-500 hover:bg-teal-600 cursor-pointer'
                      : 'bg-teal-300 cursor-not-allowed'
                  }`}
                >
                  Submit
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
