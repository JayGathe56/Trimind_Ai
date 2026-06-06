import { Link } from "react-router-dom"
import { motion } from "framer-motion"

function Platform() {

  // const [position, setPosition] = useState({
  //   x: 0,
  //   y: 0,
  // })

  return (

    <div
  className="
relative
min-h-screen
overflow-hidden
bg-[#030303]
text-white
px-4
sm:px-6
md:px-8
py-10
"
>

      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      {/* Glow Effects */}
      <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-cyan-500/10 blur-[180px] rounded-full"></div>

      <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-purple-500/10 blur-[180px] rounded-full"></div>

      {/* Navbar */}
      <div className="
relative z-10
max-w-7xl mx-auto
flex items-center justify-between
backdrop-blur-3xl
bg-white/[0.03]
border border-white/10
rounded-3xl
px-4 md:px-8
py-4 md:py-5
">

        <div className="flex items-center gap-3">

          <div className="w-3 h-3 rounded-full bg-cyan-400"></div>

          <h1 className="text-xl md:text-2xl font-semibold">
  TriMind AI
</h1>

        </div>

       <Link
  to="/"
  className="text-sm md:text-base text-gray-400 hover:text-white transition"
>
  Back Home
</Link>

      </div>

      {/* Hero */}
      <div className="relative z-10 text-center mt-28">

        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="
text-4xl
sm:text-5xl
md:text-7xl
lg:text-8xl
font-black
leading-none
break-words
"
        >

          AI Workspace

        </motion.h1>

        <p className="
text-gray-500
max-w-3xl
mx-auto
mt-8
text-base
md:text-xl
leading-8
md:leading-9
px-2
">
          Access futuristic AI tools, intelligent systems and cinematic
          productivity experiences.
        </p>

      </div>

      {/* Cards */}
      <div className="relative z-10 mt-28 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* AI Chat */}
        <Link to="/chat">

          <motion.div
            whileHover={{ y: -10 }}
            className="group backdrop-blur-3xl bg-white/[0.03] border border-white/10 rounded-[35px] p-8 min-h-[280px] md:min-h-[320px] hover:border-cyan-400/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_60px_rgba(34,211,238,0.15)]"
          >

            <div className="text-cyan-400 text-sm mb-6">
              AI CHAT
            </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Neural Assistant
            </h2>

            <p className="text-gray-500 leading-8">
              Advanced AI conversations, coding assistance,
              startup ideas and intelligent productivity.
            </p>

          </motion.div>

        </Link>

        {/* Fitness AI */}
        <Link to="/fitness">

          <motion.div
            whileHover={{ y: -10 }}
            className="group backdrop-blur-3xl bg-white/[0.03] border border-white/10 rounded-[35px] p-8 min-h-[280px] md:min-h-[320px] hover:border-green-400/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_60px_rgba(34,211,238,0.15)]"
          >

            <div className="text-green-400 text-sm mb-6">
              FITNESS AI
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Smart Fitness
            </h2>

            <p className="text-gray-500 leading-8">
              Personalized workouts, intelligent diet plans
              and futuristic fitness tracking systems.
            </p>

          </motion.div>

        </Link>

        {/* Image AI */}
        
        <Link to="/image-ai">

        <motion.div
          whileHover={{ y: -10 }}
          className="group backdrop-blur-3xl bg-white/[0.03] border border-white/10 rounded-[35px] p-8 min-h-[280px] md:min-h-[320px] hover:border-purple-400/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_60px_rgba(34,211,238,0.15)]"
        >

          <div className="text-purple-400 text-sm mb-6">
            IMAGE AI
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Vision Generator
          </h2>

          <p className="text-gray-500 leading-7 text-sm md:text-base">
            Generate cinematic AI art, futuristic visuals
            and premium concept imagery instantly.
          </p>

        </motion.div>

        </Link>

      </div>

    </div>

  )

}

export default Platform