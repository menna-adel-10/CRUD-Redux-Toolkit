import { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    // Validation logic...

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('Login successful');
      // Navigate to the next route here
    }
  };

  // Function to check if all fields are filled
  const isFormValid = () => {
    return (
      formData.username.trim() !== '' &&
      formData.email.trim() !== '' &&
      formData.password.trim() !== '' &&
      formData.confirmPassword.trim() !== '' &&
      Object.values(errors).every(error => error === '')
    );
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-semibold mb-6">Sign Up</h2>
        {/* Username Input */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.username && 'border-red-500'}`}
            id="username"
            type="text"
            placeholder="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && <p className="text-red-500 text-xs italic">{errors.username}</p>}
        </div>
        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email && 'border-red-500'}`}
            id="email"
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
        </div>
        {/* Password Input */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.password && 'border-red-500'}`}
            id="password"
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="text-red-500 text-xs italic">{errors.password}</p>}
        </div>
        {/* Confirm Password Input */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.confirmPassword && 'border-red-500'}`}
            id="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && <p className="text-red-500 text-xs italic">{errors.confirmPassword}</p>}
        </div>
        {/* Submit Button */}
        <div className="flex items-center justify-between">
          <Link to="/home">
            <button
              className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${!isFormValid() && 'cursor-not-allowed opacity-50'}`}
              type="submit"
              disabled={!isFormValid()}
            >
              Sign Up
            </button>
          </Link>
          <div className="register mx-2">
            <p>Already have an account? <Link to="/login" className="hover:border-b-2 text-blue-500">Login</Link></p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
