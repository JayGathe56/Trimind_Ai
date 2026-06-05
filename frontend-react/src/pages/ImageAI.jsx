import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

function ImageAI() {

  const [image, setImage] = useState("")
const [prompt, setPrompt] = useState("")
const [generating, setGenerating] = useState(false)

const handleGenerate = async () => {
  try {

    setImage("");
    setGenerating(true);

    console.log("PROMPT =", prompt);

    const res = await axios.post(
      "https://trimind-backend.onrender.com/api/image",
      {
        prompt,
      }
    );

    console.log("API RESPONSE:", res.data);

   setImage(res.data.imageUrl);

  } catch (err) {

    console.log(err);

    alert(
      err.response?.data?.error ||
      "Image generation failed. Try again later."
    );

  } finally {

    setGenerating(false);

  }
};

    useEffect(() => {
  window.scrollTo(0, 0)
}, [])

// const handleGenerate = () => {
//   setLoading(true)

//   setTimeout(() => {
//     setLoading(false)
//   }, 5000)
// }


  return (

    <div className="h-screen bg-[#030303] text-white relative overflow-x-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      {/* Glow */}
      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-purple-500/20 blur-[160px] rounded-full"></div>

      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-cyan-500/20 blur-[160px] rounded-full"></div>
      
      {/* Navbar */}

<div className="relative z-20 max-w-7xl mx-auto pt-8 px-6">

  <div className="flex items-center justify-between rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-3xl px-8 py-5">

    <div className="flex items-center gap-4">

      <div className="w-4 h-4 rounded-full bg-purple-400 shadow-[0_0_20px_rgba(168,85,247,1)]"></div>

      <h1 className="text-3xl font-bold">

        TriMind Image AI

      </h1>

    </div>

    <Link
      to="/platform"
      className="text-gray-400 hover:text-white transition-all"
    >
      Back Platform
    </Link>

  </div>

</div>

{/* Hero Section */}

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
  className="relative z-10 text-center pt-24 pb-20"
>

  {/* Badge */}
  <motion.div
    initial={{ y: -30, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8 }}
    className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-purple-400/20 bg-purple-500/10 text-purple-300 mb-10 backdrop-blur-xl"
  >

    <motion.div
      animate={{
        scale: [1, 1.4, 1],
        opacity: [0.5, 1, 0.5],
      }}
      transition={{
        repeat: Infinity,
        duration: 2,
      }}
      className="w-2 h-2 rounded-full bg-purple-400"
    />

    AI IMAGE SYSTEM

  </motion.div>

  {/* Main Title */}
  <motion.h1
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
    className="text-7xl md:text-[110px] font-black leading-none tracking-[-4px]"
  >

    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      Create Your
    </motion.div>

    <motion.span
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1,
        delay: 0.3,
        type: "spring",
      }}
      className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent inline-block"
    >

      Dream Visuals

    </motion.span>

  </motion.h1>

  {/* Paragraph */}
  <motion.p
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.5 }}
    className="text-gray-400 max-w-4xl mx-auto mt-10 text-2xl leading-[50px]"
  >

    Generate cinematic AI artwork, futuristic concepts,
    anime visuals and ultra realistic renders powered by AI.

  </motion.p>

</motion.div>

      {/* Main */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 px-6 py-10">

        {/* LEFT PANEL */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-[40px] p-8"
        >

          <h1 className="text-5xl font-black mb-8">
            Image AI
          </h1>

          <div className="space-y-3">

            {/* Prompt */}
            <div>
              <label className="text-gray-300 mb-2 block">
                Prompt
              </label>

              <textarea
  value={prompt}
  onChange={(e) => setPrompt(e.target.value)}
  placeholder="Describe your futuristic image..."
                className="w-full h-[180px] resize-none rounded-3xl bg-white/[0.04] border border-white/10 p-6 outline-none focus:border-purple-400 transition-all"
              />
            </div>

            {/* Style */}
            <div>
              <label className="text-gray-300 mb-2 block">
                Style
              </label>

              <select className="w-full rounded-2xl bg-[#050816] border border-white/10 p-5 outline-none">
                <option>Cyberpunk</option>
                <option>Realistic</option>
                <option>Anime</option>
                <option>3D Render</option>
                <option>Cinematic</option>
              </select>
            </div>

            {/* Size */}
            <div>
              <label className="text-gray-300 mb-2 block">
                Image Size
              </label>

              <select className="w-full rounded-2xl bg-[#050816] border border-white/10 p-5 outline-none">
                <option>1024 x 1024</option>
                <option>Portrait</option>
                <option>Landscape</option>
              </select>
            </div>

            {/* Button */}
           <button
  onClick={handleGenerate}
  className="relative overflow-hidden group w-full py-5 rounded-[22px]
  bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500
  text-white font-bold text-xl
  transition-all duration-500
  hover:scale-[1.02]
  hover:shadow-[0_0_60px_rgba(59,130,246,0.6)]
  active:scale-[0.98]"
>

  {/* Glow Animation */}
  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700">

    <div className="absolute inset-0 bg-gradient-to-r from-cyan-300/40 via-blue-400/40 to-purple-500/40 blur-2xl"></div>

  </div>

  {/* Shine Effect */}
  <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-[100%] transition-all duration-1000"></div>

  <span className="relative z-10 flex items-center justify-center gap-3">

    ✨ Generate AI Image

  </span>

</button>

          </div>

        </motion.div>

       {/* RIGHT PANEL */}
<motion.div
  initial={{ opacity: 0, x: 40 }}
  animate={{ opacity: 1, x: 0 }}
  className="relative overflow-hidden rounded-[40px] border border-purple-400/20 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.22),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.18),transparent_35%),linear-gradient(135deg,rgba(10,10,25,0.96),rgba(0,10,20,0.98))] backdrop-blur-3xl p-8 h-[95vh] overflow-y-auto"
>

  {/* Grid */}
  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20"></div>

  <div className="relative z-10 h-full flex flex-col">

    {/* Top */}
    <div className="flex items-center justify-between mb-6">

      <h2 className="text-5xl font-black">
        Vision AI
      </h2>

      <div className="px-5 py-2 rounded-full border border-purple-400/20 bg-purple-500/10 text-purple-300">
        LIVE
      </div>

    </div>

    {/* Main Content */}
    {/* <div className="flex-1 flex items-center justify-center text-center"> */}
   <div className="flex-1 flex items-center justify-center overflow-y-auto">

    {generating ? (

  <div className="flex flex-col items-center justify-center h-full">

    {/* <div className="w-24 h-24 rounded-full border-4 border-purple-500/20 border-t-cyan-400 animate-spin mx-auto mb-10"></div> */}
    <div className="w-32 h-32 rounded-full border-4 border-purple-500/20 border-t-cyan-400 animate-spin mb-10"></div>

    <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
      Generating Visual...
    </h2>

    <p className="text-gray-400 text-lg leading-9 max-w-xl">
      AI is crafting cinematic artwork...
    </p>

  </div>

) : image ? (

  <div className="w-full flex flex-col gap-6">

 <div className="rounded-[30px] overflow-hidden">
 <img
  src={image}
  alt="Generated AI"
  onLoad={() => console.log("IMAGE LOADED")}
  onError={() => {
    console.log("IMAGE FAILED");
    alert("Pollinations server busy. Try again in a few minutes.");
    setImage("https://image.pollinations.ai/prompt/cat");
  }}
  className="w-full rounded-[30px]"
/>
</div>

    <a
      href={image}
      download="trimind-ai-image.png"
      className="mt-6 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 text-center font-bold"
    >
      Download Image
    </a>

  </div>

) : (

  <div className="flex flex-col items-center justify-center text-center h-full">

    <div className="w-24 h-24 rounded-full border-4 border-purple-500/20 mx-auto mb-10"></div>

    <h2 className="text-5xl font-black mb-6">
      Awaiting Generation
    </h2>

    <p className="text-gray-400 text-lg leading-9 max-w-xl">
      Enter a creative prompt and generate futuristic AI-powered artwork instantly.
    </p>

  </div>

)}

    </div>

  </div>

</motion.div>

      </div>

    </div>
  )
}  

export default ImageAI