import React, { useState } from 'react';
import logo from '../images/logo.jpg';
// import { Link } from 'react-router-dom';

const Register: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="min-h-screen flex flex-col">
      {/* Login Content */}
      <div className="flex-1 flex">
        {/* Left Side - Green Background with Logo */}
        <div className="w-1/2 bg-green-500 flex flex-col items-center justify-center text-white p-12">
          <div className="w-48 h-48 mb-5">
            <img src={logo} alt="UNI VISION BOT Logo" className="w-full h-full object-contain p-2"/>
          </div>
          <h1 className="text-2xl font-semibold text-center text-black mb-4">UNI VISION BOT</h1>
          <p className="text-center text-lg">
            "Chọn đúng trường, hướng đúng nghề – <br />
            Bước tới tương lai cùng hệ thống tư vấn <br />
            tuyển sinh trực tuyến!"
          </p>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-1/2 bg-white p-8 mt-8">
          <h2 className="text-3xl font-bold mb-6">Tạo tài khoản</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Địa chỉ Email <span className="text-red-500">*</span>
              </label>
              <input 
                type="email" 
                placeholder="Nhập email của bạn"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="mb-4 relative">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Mật khẩu <span className="text-red-500">*</span>
              </label>
              <input 
                type={showPassword ? 'text' : 'password'} 
                placeholder="Nhập mật khẩu"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <span 
                className="absolute right-3 top-10 text-sm text-blue-500 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? 'Ẩn mật khẩu' : 'Hiển thị mật khẩu'}
              </span>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Nhập lại mật khẩu <span className="text-red-500">*</span>
              </label>
              <input 
                type="password" 
                placeholder="Nhập lại mật khẩu"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="mb-4">
              <label className="flex items-center">
                <input 
                  type="checkbox" 
                  className="mr-2 leading-tight" 
                />
                <span className="text-gray-700 text-sm">Nhớ mật khẩu</span>
              </label>
            </div>

            <button 
              type="submit"
              className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Tạo tài khoản
            </button>

            <p className="mt-4 text-center text-sm">
              Bạn đã có tài khoản? <a href="/login" className="text-blue-500 font-bold">Đăng Nhập</a>.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;