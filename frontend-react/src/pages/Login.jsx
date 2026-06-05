import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { useState } from "react"

function Login() {

    const [success, setSuccess] = useState(false);
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      {/* Glow */}
      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-cyan-500/10 blur-[180px] rounded-full"></div>
      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-purple-500/10 blur-[180px] rounded-full"></div>

      <div className="relative z-10 min-h-screen flex items-center justify-center p-8">

        <div className="grid lg:grid-cols-2 gap-10 w-full max-w-7xl">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            className="rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-3xl p-12"
          >

            <h1 className="text-5xl font-black mb-4">
              Welcome Back
            </h1>

            <p className="text-gray-400 mb-10">
              Access your futuristic AI workspace.
            </p>

            <div className="space-y-6">

              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-black/40 border border-white/10 rounded-2xl p-5 outline-none"
              />

              <input
                type="password"
                placeholder="Password"
                className="w-full bg-black/40 border border-white/10 rounded-2xl p-5 outline-none"
              />

             <button
  onClick={() => {
    setSuccess(true)

    setTimeout(() => {
      window.location.href = "/"
    }, 200)
  }}
  className="
  w-full h-20 rounded-[24px]
  font-bold text-3xl
  bg-gradient-to-r
  from-cyan-500
  via-blue-500
  to-indigo-500
  hover:scale-[1.03]
  hover:shadow-[0_0_50px_rgba(59,130,246,0.8)]
  active:scale-[0.98]
  transition-all duration-500
  "
>
  Login
</button>

            </div>

            <p className="text-gray-400 mt-8">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-cyan-400"
              >
                Sign Up
              </Link>
            </p>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative overflow-hidden rounded-[40px] border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-3xl flex items-center justify-center"
          >
<div className="text-center px-10">

  {success ? (

    <div className="flex flex-col items-center justify-center h-full">

      <div
        className="
        w-40 h-40 rounded-full
        bg-cyan-500/20
        border border-cyan-400
        flex items-center justify-center
        shadow-[0_0_80px_rgba(34,211,238,0.8)]
        animate-pulse
        mb-10
        "
      >
        <span className="text-8xl text-cyan-400">
          ✓
        </span>
      </div>

      <h2 className="text-6xl font-black text-cyan-400 mb-6">
        Access Granted
      </h2>

      <p className="text-gray-300 text-xl">
        Welcome Back To TriMind AI
      </p>

    </div>

  ) : (

    <>
      <div className="w-32 h-32 rounded-full border-4 border-cyan-500/20 border-t-cyan-400 animate-spin mx-auto mb-10"></div>

      <h2 className="text-6xl font-black mb-6">
        Access
        <br />
        The Future
      </h2>

      <p className="text-gray-400 text-xl leading-10">
        Enter the next generation AI ecosystem with intelligent tools and cinematic experiences.
      </p>
    </>

  )}

</div>

          </motion.div>

        </div>

      </div>

    </div>
  )
}

export default Login