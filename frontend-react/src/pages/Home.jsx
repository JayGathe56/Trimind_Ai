import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { useState, useEffect, useRef } from "react"
function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef(null)

useEffect(() => {

  const handleClickOutside = (event) => {

    if (
      menuRef.current &&
      !menuRef.current.contains(event.target)
    ) {
      setMenuOpen(false)
    }

  }

  document.addEventListener(
    "mousedown",
    handleClickOutside
  )

  return () => {
    document.removeEventListener(
      "mousedown",
      handleClickOutside
    )
  }

}, [])
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#030303] text-white">

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      {/* Background Glows */}
      <div className="absolute top-[-250px] left-[-200px] w-[700px] h-[700px] bg-cyan-500/20 blur-[180px] rounded-full"></div>

      <div className="absolute bottom-[-300px] right-[-200px] w-[700px] h-[700px] bg-purple-600/20 blur-[180px] rounded-full"></div>

      {/* AI Orb */}
      <div className="absolute top-[18%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-cyan-400/30 via-blue-500/20 to-purple-500/20 blur-[120px] opacity-70 animate-pulse"></div>

     {/* Navbar */}
<nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[9999] w-[95%] max-w-6xl backdrop-blur-3xl bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-5 shadow-2xl">

  <div className="flex items-center justify-between">

    {/* Logo */}
    <div className="flex items-center gap-3">

      <div className="w-3 h-3 rounded-full bg-cyan-400"></div>

      <h1 className="text-lg font-semibold">
        TriMind AI
      </h1>

    </div>

    {/* Desktop Menu */}
    <div className="hidden md:flex items-center gap-10 text-sm text-gray-400">

      <Link to="/login" className="hover:text-white transition-all">
        Login
      </Link>

      <Link to="/signup" className="hover:text-white transition-all">
        Signup
      </Link>

      <a href="#" className="hover:text-white transition-all">
        Features
      </a>

     <Link
  to="/about"
  className="hover:text-white transition-all"
>
  About
</Link>

    </div>

    {/* Mobile Menu Button */}
   <button
  onClick={() => setMenuOpen(!menuOpen)}
  // className="md:hidden text-2xl text-white"
  className="md:hidden text-xl text-gray-300 hover:text-white"
>
  {menuOpen ? "✕" : "☰"}
</button>

  </div>

  {/* Mobile Dropdown */}
  
  {menuOpen && (

    <div
     ref={menuRef}
      className="
       onMouseLeave={() => setMenuOpen(false)}
      md:hidden
      absolute
      top-[80px]
      right-4

      w-[180px]

      bg-[#07161c]/95
      backdrop-blur-3xl

      border border-cyan-400/20

      rounded-2xl

      p-3

      flex flex-col
      gap-2

      shadow-[0_0_30px_rgba(34,211,238,0.15)]

      z-[9999]
      "
    >

      <Link
        to="/login"
        onClick={() => setMenuOpen(false)}
        className="px-4 py-3 rounded-xl text-white hover:bg-cyan-500/10"
      >
        Login
      </Link>

      <Link
        to="/signup"
        onClick={() => setMenuOpen(false)}
        className="px-4 py-3 rounded-xl text-white hover:bg-cyan-500/10"
      >
        Signup
      </Link>

      <a
        href="#"
        onClick={() => setMenuOpen(false)}
        className="px-4 py-3 rounded-xl text-white hover:bg-cyan-500/10"
      >
        Features
      </a>

      <Link
  to="/about"
  onClick={() => setMenuOpen(false)}
  className="px-4 py-3 rounded-xl text-white hover:bg-cyan-500/10"
>
  About
</Link>

    </div>

  )}

</nav>

      {/* Hero */}
      <motion.section
  initial={{ opacity: 0, y: 80 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="relative z-10 flex flex-col items-center justify-center text-center pt-40 px-6"
> 

        {/* Badge */}
        <div className="backdrop-blur-2xl bg-white/5 border border-white/10 shadow-2xl px-6 py-3 rounded-full text-sm text-gray-300 mb-10">
          ✨ Next Generation Artificial Intelligence Platform
        </div>

        {/* Heading */}
        <h1 className="text-[58px] sm:text-[70px] md:text-[130px] font-black leading-[0.9] tracking-[-5px] max-w-7xl">

          Build The

          <br />

          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-cyan-200 to-cyan-500">
            Future
          </span>

          <br />

          With AI

        </h1>

        {/* Subtitle */}
        <p className="text-white-500 max-w-2xl mt-10 text-lg md:text-xl leading-9">
          Powerful AI conversations, cinematic image generation,
          intelligent fitness systems and futuristic productivity —
          all combined into one premium ecosystem.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row items-center gap-6 mt-14">

        <Link
  to="/platform"
  className="
  group
  relative
  overflow-hidden

  bg-white
  text-black

  px-8 md:px-10
  py-4 md:py-5

  rounded-2xl
  font-semibold
  text-base md:text-lg

  transition-all
  duration-500

  shadow-[0_0_50px_rgba(34,211,238,0.35)]

  hover:scale-105
  hover:shadow-[0_0_90px_rgba(34,211,238,0.8)]

  active:scale-95
  "
>
  {/* Animated Gradient */}
  <div
    className="
    absolute
    inset-0

    bg-gradient-to-r
    from-cyan-300
    via-blue-400
    to-purple-500

    opacity-70
    md:opacity-0

    md:group-hover:opacity-100

    transition-all
    duration-700
    "
  />

  {/* Extra Glow */}
  <div
    className="
    absolute
    inset-0

    blur-2xl

    bg-cyan-400/40

    opacity-40
    md:opacity-0

    md:group-hover:opacity-100

    transition-all
    duration-700
    "
  />

  <span className="relative z-10 flex items-center gap-3">
    <span className="text-xl">🚀</span>
    Launch Platform
  </span>
</Link>
          <button className="backdrop-blur-3xl bg-white/[0.04] border border-white/10 hover:border-cyan-400 px-10 py-5 rounded-2xl text-lg transition-all duration-500 hover:bg-white/[0.08] shadow-2xl">

            <span className="flex items-center gap-3">

              <span className="text-xl">
                ▶
              </span>

              Watch Demo

            </span>

          </button>

        </div>

        {/* Tiny Text */}
        <div className="mt-8 text-sm text-gray-500 tracking-wide">
          Trusted by creators, developers & AI innovators worldwide
        </div>

        {/* Floating Cards */}
        <div
  className="
relative
mt-24
w-full
max-w-6xl

flex
flex-col
items-center
gap-8

md:block
md:h-[320px]
"
> 
          {/* Left Card */}
<Link to="/chat">

<motion.div
  animate={{ y: [0, -15, 0] }}
  transition={{
    duration: 4,
    repeat: Infinity,
  }}
  className="
relative
md:absolute
md:left-0
md:top-10

w-full
max-w-[260px]

rotate-0
md:rotate-[-8deg]

backdrop-blur-3xl
bg-white/[0.04]
border border-white/10
rounded-[30px]
p-6
shadow-2xl
"
>

            <div className="text-cyan-400 text-sm mb-4">
              AI CHAT
            </div>

            <h3 className="text-2xl font-semibold mb-4">
              Real-Time Intelligence
            </h3>

            <p className="text-gray-500 leading-7">
              Advanced AI conversations powered by futuristic models.
            </p>

         </motion.div>
         </Link>

          {/* Center Card */}
          <Link to="/fitness">
         <motion.div
  animate={{ y: [0, -20, 0] }}
  transition={{
    duration: 5,
    repeat: Infinity,
  }}
  className="
relative
md:absolute
md:left-1/2
md:-translate-x-1/2
md:top-0

w-full
max-w-[320px]

backdrop-blur-3xl
bg-white/[0.05]
border border-white/10
rounded-[35px]
p-8
shadow-2xl
"
>

            <div className="text-purple-400 text-sm mb-4">
              FITNESS AI
            </div>

            <h3 className="text-3xl font-bold mb-5">
              Neural Intelligence
            </h3>

            <p className="text-gray-400 leading-8">
              Multi-model AI ecosystem designed for creators,
              developers and futuristic productivity.
            </p>

          </motion.div>
          </Link>

          {/* Right Card */}
          <Link to="/image-ai">

          <motion.div
  animate={{ y: [0, -25, 0] }}
  transition={{
    duration: 6,
    repeat: Infinity,
  }}
 className="
relative
md:absolute
md:right-0
md:top-12

w-full
max-w-[260px]

rotate-0
md:rotate-[8deg]

backdrop-blur-3xl
bg-white/[0.04]
border border-white/10
rounded-[30px]
p-6
shadow-2xl
"
>

            <div className="text-green-400 text-sm mb-4">
              IMAGE AI
            </div>

            <h3 className="text-2xl font-semibold mb-4">
              Cinematic Visuals
            </h3>

            <p className="text-gray-500 leading-7">
              Generate futuristic visuals and stunning AI art instantly.
            </p>

          </motion.div>
          </Link>

       </div>

       {/* Massive Gradient Divider */}
<div className="relative mt-12 md:mt-40 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>

{/* Dashboard Preview */}
<motion.div
  initial={{ opacity: 0, y: 100 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
 className="relative mt-6 md:mt-32 max-w-7xl mx-auto w-full"
>
  <div className="backdrop-blur-3xl bg-white/[0.03] border border-white/10 rounded-[40px] overflow-hidden shadow-2xl">

    {/* Top Bar */}
    <div className="flex items-center justify-between px-8 py-5 border-b border-white/10">

      <div className="flex gap-3">

        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>

      </div>

      <div className="text-sm text-gray-500">
        Neural Dashboard
      </div>

    </div>

    {/* Dashboard Layout */}
    <div className="grid grid-cols-1 md:grid-cols-4 min-h-[500px]">

      {/* Sidebar */}
      <div className="border-r border-white/10 p-6">

        <div className="text-cyan-400 font-semibold mb-10">
          TriMind AI
        </div>

        <div className="space-y-5 text-gray-400">

          <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white">
            AI Chat
          </div>

          <div>Image Generation</div>

          <div>Fitness AI</div>

          <div>Analytics</div>

          <div>Settings</div>

        </div>

      </div>

      {/* Main Dashboard */}
      <div className="md:col-span-3 p-8">

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6">

            <div className="text-gray-500 text-sm mb-4">
              AI REQUESTS
            </div>

            <h2 className="text-4xl font-black">
              24.8K
            </h2>

          </div>

          <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6">

            <div className="text-gray-500 text-sm mb-4">
              ACTIVE USERS
            </div>

            <h2 className="text-4xl font-black">
              10.2K
            </h2>

          </div>

          <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6">

            <div className="text-gray-500 text-sm mb-4">
              AI MODELS
            </div>

            <h2 className="text-4xl font-black">
              12+
            </h2>

          </div>

        </div>

        {/* Chat Preview */}
        <div className="mt-8 bg-black/30 border border-white/10 rounded-3xl p-6">

          <div className="text-gray-500 mb-6">
            AI Conversation Preview
          </div>

          <div className="space-y-5">

            <div className="bg-cyan-500/10 border border-cyan-400/20 rounded-2xl px-5 py-4 w-fit">
              Generate futuristic UI ideas
            </div>

            <div className="bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-4 max-w-2xl text-gray-300 leading-8">
              Creating cinematic AI interface concepts with spatial depth,
              premium glassmorphism and animated interaction systems...
            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

</motion.div>

      </motion.section>

      </div>

  )
}
export default Home