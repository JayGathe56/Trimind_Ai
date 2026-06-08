import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Platform from "./pages/Platform"
import Chat from "./pages/Chat"
import Fitness from "./pages/Fitness"
import ImageAI from "./pages/ImageAI"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import About from "./pages/About";

function App() {

  return (

    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/platform" element={<Platform />} />

      <Route path="/chat" element={<Chat />} />

      <Route path="/fitness" element={<Fitness />} />

      <Route path="/image-ai" element={<ImageAI />} />

      <Route path="/login" element={<Login />} />

      <Route path="/signup" element={<Signup />} />
      
      <Route path="/about" element={<About />} />

    </Routes>

  )

}

export default App