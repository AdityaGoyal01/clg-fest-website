import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';


export default function AdminLogin() {
  const [form, setForm] = useState({ email: '', password: '', eventName: '' });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/admin/login', form);
      const token = res.data.token;
    const decoded = jwtDecode(token); // contains eventName, etc.

  
    localStorage.setItem('token', token);
    localStorage.setItem('eventName', decoded.eventName);
      navigate('/admin-dashboard');
    } catch (err) {
      alert('Login failed');
    }
  };

  const handleSignUp = async () => {
    try {
      await axios.post('http://localhost:5000/api/admin/signup', form);
      alert('Admin account created successfully!');
    } catch (err) {
      alert(err.response.data.error || 'Signup failed');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 ml-96 mb-4 w-full max-w-md"
      >
        <h2 className="text-2xl mb-4 text-center text-gray-800 font-bold">Lets get started !</h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          className="w-full px-3 py-2 mb-3 border bg-white rounded"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          className="w-full px-3 py-2 mb-3 border bg-white rounded"
          onChange={handleChange}
        />
        <input
          type="text"
          name="eventName"
          placeholder="Event Name"
          value={form.eventName}
          className="w-full px-3 py-4 mb-4 border bg-white rounded"
          onChange={handleChange}
        />

        <div className="flex justify-between">
          <button
            onClick={handleSignUp}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          >
            Sign In
          </button>
          <button
            onClick={handleLogin}
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
