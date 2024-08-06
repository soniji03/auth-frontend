import React from 'react';
import { Link } from 'react-router-dom';
import UnAuthenticatedLayouts from '../../../layouts/UnAuthenticatedLayout';
import { useNavigate } from 'react-router-dom';
import '../Login'
import { useState } from 'react';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const SignUpPage = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const apiUrl = `http://localhost:3000/api/users/register`;
  console.log(apiUrl, "jjjhhjh")
  const navigate = useNavigate();

  const validateForm = () => {
    let isValid = true;

    if (name.trim() === '') {
      toast.error("Please fill the name");
      isValid = false;
    }

    if (email.trim() === '') {
      toast.error("Please fill the email");
      isValid = false;
    }

    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (password.length < minLength) {
      toast.error('Password must be at least 8 characters long');
      isValid = false;
    } else if (!hasUpperCase) {
      toast.error('Password must contain at least one uppercase letter');
      isValid = false;
    } else if (!hasSpecialChar) {
      toast.error('Password must contain at least one special character');
      isValid = false;
    } else if (password !== confirmPassword) {
      toast.error("Password does not match");
      isValid = false;
    }
    return isValid;
  };

  async function handleSubmit(e) {
    e.preventDefault();

    if (!isChecked) {
      toast.error("Please accept the terms and condition !");
      return;
    }
    if (!validateForm()) {
      return;
    }
    const registerForm = document.getElementById('registerForm');
    const formData = new FormData(registerForm);

    // FormData से name, email और password प्राप्त करना
    var name = formData.get('name');
    var email = formData.get('email');
    var password = formData.get('password');

    // डेटा को एक ऑब्जेक्ट में संग्रहीत करना
    var userData = {
      name: name,
      email: email,
      password: password
    };

    const response = await fetch(apiUrl, {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const jsonRes = await response.json();
    if (response.status !== 200) {
      alert(jsonRes.message)
      return;
    }
    console.log(jsonRes.token);
    localStorage.setItem('userData', JSON.stringify(jsonRes));
    navigate('/home');
  }

  return (
    <UnAuthenticatedLayouts>
      <section className="bg-slate-100 min-h-screen flex items-center justify-center py-6 sm:py-12 px-4 sm:px-6 lg:px-8">
  <div className="w-full max-w-md space-y-8">
  
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6 sm:p-8 space-y-4 sm:space-y-6">
        <h1 className="text-lg sm:text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-center">
          Create an account
        </h1>
        <form id="registerForm" onSubmit={handleSubmit} method='post' className="space-y-4 sm:space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Your name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} type="name" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Enter your name" required="" />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required="" />
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
            <div className='relative'>
              <input value={password} onChange={(e) => setPassword(e.target.value)} type={showPassword ? 'text' : 'password'} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
              {password && (
                <button type="button" onClick={() => { setShowPassword(!showPassword) }} className="absolute right-2.5 top-1/2 -translate-y-1/2 border-none bg-transparent cursor-pointer">
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              )}
            </div>
          </div>
          <div>
            <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900">Confirm password</label>
            <div className='relative'>
              <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type={showConfirmPassword ? 'text' : 'password'} name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
              {confirmPassword && (
                <button type="button" onClick={() => { setShowConfirmPassword(!showConfirmPassword) }} className="absolute right-2.5 top-1/2 -translate-y-1/2 border-none bg-transparent cursor-pointer">
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              )}
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input id="terms" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" required="" />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="terms" className="font-light text-gray-500">I accept the <a className="font-medium text-primary-600 hover:underline" href="#">Terms and Conditions</a></label>
            </div>
          </div>
          <button type="submit" className="w-full text-white bg-green-400 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition duration-150 ease-in-out">Create an account</button>
          <p className="text-sm font-light text-gray-500 text-center">
            Already have an account? <Link to="/login" className="font-medium text-primary-600 hover:underline">Login here</Link>
          </p>
        </form>
      </div>
    </div>
  </div>
</section>
    </UnAuthenticatedLayouts>
  );
};

export default SignUpPage;