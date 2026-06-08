import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
function About() {
  return (
     <div className="min-h-screen bg-black text-white px-6 py-12 relative overflow-hidden">
{/* Background Effects */}

<div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />

<div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[180px] rounded-full" />

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/20 blur-[180px] rounded-full" />

<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[180px] rounded-full" />

<div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/20 blur-[180px] rounded-full" />

<div className="relative z-10 max-w-6xl mx-auto"></div>
      <div className="max-w-6xl mx-auto">

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
         <h1
className="
text-6xl
font-black
mb-4
bg-gradient-to-r
from-cyan-400
via-white
to-purple-500
bg-clip-text
text-transparent
"
>
About TriMind AI
</h1>

          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            TriMind AI is an intelligent productivity platform that combines
            AI Chat, Fitness Planning and AI Image Generation into a single
            futuristic experience.
          </p>
        </motion.div>

        {/* Project Info */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">

          <div className="
group
backdrop-blur-xl
bg-white/5
border
border-white/10
rounded-3xl
p-8
transition-all
duration-500
hover:scale-105
hover:border-cyan-400/40
hover:shadow-[0_0_40px_rgba(0,255,255,0.25)]
">
            <h2 className="text-2xl font-semibold mb-4">
              🚀 Project Vision
            </h2>

            <p className="text-gray-400 leading-8">
              Our goal is to create a modern AI assistant that helps users
              communicate, stay fit, generate creative content and improve
              productivity through advanced artificial intelligence.
            </p>
          </div>

          <div className="
group
backdrop-blur-xl
bg-white/5
border
border-white/10
rounded-3xl
p-8
transition-all
duration-500
hover:scale-105
hover:border-cyan-400/40
hover:shadow-[0_0_40px_rgba(0,255,255,0.25)]
">
            <h2 className="text-2xl font-semibold mb-4">
              ⚡ Features
            </h2>

            <ul className="space-y-3 text-gray-400">
              <li>✓ AI Chat Assistant</li>
              <li>✓ Fitness & Diet Planner</li>
              <li>✓ AI Image Generator</li>
              <li>✓ MongoDB History Storage</li>
              <li>✓ Responsive Mobile Design</li>
              <li>✓ Modern Futuristic UI</li>
            </ul>
          </div>

        </div>

        {/* Developer */}
        <div className="mt-16 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-white/10 rounded-3xl p-10
group
backdrop-blur-xl
bg-white/5
border
border-white/10
rounded-3xl
p-8
transition-all
duration-500
hover:scale-105
hover:border-cyan-400/40
hover:shadow-[0_0_40px_rgba(0,255,255,0.25)]
">

          <h2 className="text-3xl font-bold mb-6">
            👨‍💻 Developer
          </h2>

         <h3 className="text-3xl font-bold text-cyan-400">
  Jay Gathe
</h3>
<div className="flex items-center gap-1 mt-4">
  <FaInstagram className="text-pink-500 text-2xl" />

  <a
    href="https://instagram.com/jaygathe55"
    target="_blank"
    rel="noopener noreferrer"
    className="text-cyan-400 hover:text-pink-400 transition-all"
  >
    Follow on Instagram
  </a>
</div>

<p className="text-purple-400 mt-2">
  Full Stack AI Developer
</p>

          <p className="text-gray-400 mt-2 leading-8">
            Full Stack Developer passionate about AI, Web Development
            and futuristic digital experiences.
            Built TriMind AI using modern technologies including
            React, Node.js, Express, MongoDB and Google Gemini AI.
          </p>

        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">

  <div className="
bg-white/5
backdrop-blur-xl
border border-white/10
rounded-2xl
p-6
text-center
cursor-pointer
transition-all duration-500
hover:-translate-y-2
hover:border-cyan-400/50
hover:bg-cyan-500/10
hover:shadow-[0_0_40px_rgba(34,211,238,0.35)]
">
    <h2 className="text-3xl font-bold text-cyan-400">10K+</h2>
    <p className="text-gray-400">AI Responses</p>
  </div>

  <div className="
bg-white/5
backdrop-blur-xl
border border-white/10
rounded-2xl
p-6
text-center
cursor-pointer
transition-all duration-500
hover:-translate-y-2
hover:border-cyan-400/50
hover:bg-cyan-500/10
hover:shadow-[0_0_40px_rgba(34,211,238,0.35)]
">
    <h2 className="text-3xl font-bold text-cyan-400">2K+</h2>
    <p className="text-gray-400">Images Generated</p>
  </div>

  <div className="
bg-white/5
backdrop-blur-xl
border border-white/10
rounded-2xl
p-6
text-center
cursor-pointer
transition-all duration-500
hover:-translate-y-2
hover:border-cyan-400/50
hover:bg-cyan-500/10
hover:shadow-[0_0_40px_rgba(34,211,238,0.35)]
">
    <h2 className="text-3xl font-bold text-cyan-400">500+</h2>
    <p className="text-gray-400">Users Served</p>
  </div>

  <div className="
bg-white/5
backdrop-blur-xl
border border-white/10
rounded-2xl
p-6
text-center
cursor-pointer
transition-all duration-500
hover:-translate-y-2
hover:border-cyan-400/50
hover:bg-cyan-500/10
hover:shadow-[0_0_40px_rgba(34,211,238,0.35)]
">
    <h2 className="text-3xl font-bold text-cyan-400">99.9%</h2>
    <p className="text-gray-400">Uptime</p>
  </div>

</div>

        {/* Technologies */}
        <div className="mt-16
group
backdrop-blur-xl
bg-white/5
border
border-white/10
rounded-3xl
p-8
transition-all
duration-500
hover:scale-105
hover:border-cyan-400/40
hover:shadow-[0_0_40px_rgba(0,255,255,0.25)]
">

          <h2 className="text-3xl font-bold mb-8 text-center">
            🛠 Technologies Used
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            {[
              "React",
              "Tailwind CSS",
              "Node.js",
              "Express.js",
              "MongoDB",
              "Gemini AI",
              "Render",
              "GitHub"
            ].map((tech) => (
              <div
                key={tech}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center"
              >
                {tech}
              </div>
            ))}

          </div>

        </div>

        {/* Future Roadmap */}
        <div className="mt-16 bg-white/5 border border-white/10 rounded-3xl p-8 
group
backdrop-blur-xl
bg-white/5
border
border-white/10
rounded-3xl
p-8
transition-all
duration-500
hover:scale-105
hover:border-cyan-400/40
hover:shadow-[0_0_40px_rgba(0,255,255,0.25)]
">

          <h2 className="text-2xl font-semibold mb-4">
            🔮 Future Roadmap
          </h2>

          <ul className="space-y-3 text-gray-400">
            <li>✓ Voice Assistant</li>
            <li>✓ AI Study Planner</li>
            <li>✓ AI Resume Builder</li>
            <li>✓ Personal AI Memory</li>
            <li>✓ Real-time Image Editing</li>
            <li>✓ Smart Productivity Dashboard</li>
          </ul>

        </div>

        {/* Footer */}
        <div className="text-center mt-16 text-gray-500">

          <p>
            TriMind AI © 2026
          </p>

          <p className="mt-2">
            Designed & Developed by Jay Gathe
          </p>

        </div>

      </div>

    </div>
  );
}

export default About;