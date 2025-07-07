"use client"

import type React from "react"
import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { useNavigate } from "react-router"

const LoginFormCard = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate =useNavigate()

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Login attempt:", { email, password })
  }

  return (
    <div className="w-full max-w-md">
      <div
        className="rounded-3xl p-8 border border-white/20 shadow-2xl"
        style={{
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        }}
      >
        <h2 className="text-2xl font-semibold text-white mb-8 font-sans">Log In</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-white text-sm font-medium mb-3 font-sans">
              Email Id*
            </label>
            <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border-0 border-b border-white/50 bg-transparent text-white text-base focus:outline-none focus:border-white transition duration-200"
          />

          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-white text-sm font-medium mb-3 font-sans">
              Password*
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border-0 border-b border-white/50 bg-transparent text-white text-base focus:outline-none focus:border-white transition duration-200"
                
                
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-colors duration-200"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Forgot Password Link */}
          <div className="text-right">
            <a
              href="#"
              className="text-white/80 text-sm hover:text-white transition-colors duration-200 underline font-sans"
              style={{ textDecorationColor: "rgba(255, 255, 255, 0.5)" }}
            >
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button onClick={()=>navigate("/application")}
            type="submit"
            className="w-full bg-white text-purple-900 font-semibold py-3 px-4 rounded-xl hover:bg-gray-100 transition-all duration-200 focus:outline-none shadow-lg font-sans"
            style={{
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
            }}
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginFormCard
