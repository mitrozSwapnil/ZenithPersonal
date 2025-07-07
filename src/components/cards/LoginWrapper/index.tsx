"use client"

import LoginFormCard from "../LoginFormCard"


const LoginWrapper = () => {
  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-gray-100 font-sans">
      {/* Background with diagonal split */}
      <div className="absolute inset-0">
        {/* Left side - light background */}
        <div className="absolute inset-0 bg-gray-100"></div>

        {/* Right side - purple gradient with diagonal cut */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(90deg, #191C36 0%, #313669 50%, #191C36 100%)",
            clipPath: "polygon(48% 0%, 100% 0%, 100% 100%, 28% 100%)",
          }}
        ></div>

      </div>

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col md:flex-row">
        {/* Left Side - Welcome Section */}
        <div className="flex-1 flex flex-col justify-between p-8 lg:p-16 max-w-2xl">
          {/* Welcome Content */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="mb-8">
              <h1 className="text-4xl lg:text-5xl font-bold text-[#222C81] font-Poppins leading-tight">Welcome</h1>
              <h2 className="text-4xl lg:text-5xl  text-[#4A528F] mb-6 leading-tight">to Zenith Portal</h2>
              {/* Orange underline */}
              <div className="w-32 h-1 bg-orange-400 mb-8"></div>
              <p className="text-gray-600 text-lg lg:text-xl leading-relaxed">
                Your trusted partner in
                <br />
                certification management
              </p>
            </div>
          </div>

          {/* Logo Section */}
          
          {/* Logo Section */}
          <div className="mt-auto">
            <div className="flex items-center mb-20">
              <img
                src="/images/logo/zenith.png"
                alt="Zenith Logo"
                className="h-12 lg:h-16 object-contain"
              />
            </div>
            
          </div>

        </div>

        {/* Right Side - Login Form */}
        <div className="flex-1 flex items-center justify-center p-8">
          <LoginFormCard />
        </div>
      </div>
    </div>
  )
}

export default LoginWrapper
