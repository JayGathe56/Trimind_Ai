import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { useState } from "react";

function Signup() {

    const [success, setSuccess] = useState(false);
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      {/* Glow */}
      <div className="absolute top-[-250px] left-[-250px] w-[600px] h-[600px] bg-purple-500/10 blur-[180px] rounded-full"></div>

      <div className="absolute bottom-[-250px] right-[-250px] w-[600px] h-[600px] bg-cyan-500/10 blur-[180px] rounded-full"></div>

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4 md:p-8">

        <div className="grid lg:grid-cols-2 gap-6 md:gap-10 w-full max-w-7xl">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            className="order-2 lg:order-1 relative overflow-hidden rounded-[40px] border border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 backdrop-blur-3xl flex items-center justify-center"
          >

           <div className="text-center px-10">

  {success ? (

    <div className="flex flex-col items-center justify-center">

      <div
        className="w-40 h-40 rounded-full
        bg-green-500/20 border border-green-400
        flex items-center justify-center
        shadow-[0_0_80px_rgba(34,197,94,0.7)]
        animate-pulse mb-10"
      >
        <span className="text-8xl text-green-400">
          ✓
        </span>
      </div>

      <h2 className="text-6xl font-black text-green-400 mb-6">
        Success
      </h2>

      <p className="text-gray-300 text-xl">
        Account Created Successfully
      </p>

    </div>

  ) : (

    <>
      <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-purple-500/20 border-t-purple-400 animate-spin mx-auto mt-10 mb-10"></div>

      <h2 className="text-4xl md:text-6xl font-black mb-6">
        Join The
        <br />
        AI Revolution
      </h2>

      <p className="text-gray-400 text-base md:text-xl leading-8 md:leading-10">
        Build, create and generate with next-generation AI systems.
      </p>
    </>

  )}

</div>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            className="order-1 lg:order-2 rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-3xl p-6 md:p-12"
          >

            <h1 className="text-4xl md:text-5xl font-black mb-4">
              Create Account
            </h1>

            <p className="text-gray-400 mb-10">
              Start your futuristic AI journey today.
            </p>

            <div className="space-y-6">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-black/40 border border-white/10 rounded-2xl p-5 outline-none"
              />

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

              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full bg-black/40 border border-white/10 rounded-2xl p-5 outline-none"
              />

             <button
  onClick={() => {
    setSuccess(true)

    setTimeout(() => {
      window.location.href = "/"
    }, 2500)
  }}
  className="
  w-full h-20 rounded-[24px]
  font-bold text-xl md:text-3xl
  bg-gradient-to-r
  from-purple-500
  via-pink-500
  to-cyan-400
  hover:scale-[1.03]
  hover:shadow-[0_0_50px_rgba(168,85,247,0.8)]
  active:scale-[0.98]
  transition-all duration-500
  "
>
  Create Account
</button>
            </div>

            <p className="text-gray-400 mt-8">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-purple-400"
              >
                Login
              </Link>
            </p>

          </motion.div>

        </div>

      </div>

    </div>
  )
}

export default Signup