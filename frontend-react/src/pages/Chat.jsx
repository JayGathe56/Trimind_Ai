import { motion } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import axios from "axios"

function Chat() {
  const [copiedIndex, setCopiedIndex] = useState(null)
const textareaRef = useRef(null);

  const [input, setInput] = useState("")

  const [messages, setMessages] = useState([
    {
      role: "user",
      text: "Generate a futuristic AI dashboard design."
    },
    {
      role: "ai",
      text: "Creating a cinematic AI dashboard with glassmorphism..."
    }
  ]) 
  const [conversations, setConversations] = useState([])

const [currentChatId, setCurrentChatId] = useState(null)

  const [loading, setLoading] = useState(false)
  const [showSidebar, setShowSidebar] = useState(false)

  const messagesRef = useRef(null)

  const handleSend = async () => {

 if (!input.trim()) return

const messageText = input

const userMessage = {
  role: "user",
  text: messageText,
}

  setMessages((prev) => [
    ...prev,
    userMessage,
  ])

  setInput("")
  if (textareaRef.current) {
  textareaRef.current.style.height = "70px"
}
  setLoading(true)

  try {

    const res = await axios.post(
      "https://trimind-backend.onrender.com/api/chat",
      {
       message: messageText
      }
    )

    const aiMessage = {
      role: "ai",
      text: res.data.reply,
    }

    setMessages((prev) => [
      ...prev,
      aiMessage,
    ])

  } catch (err) {

    console.log(err)

  } finally {

    setLoading(false)

  }

}

useEffect(() => {

  const container = messagesRef.current

  if (!container) return

  setTimeout(() => {

    container.scrollTo({
      top: container.scrollHeight,
      behavior: "smooth",
    })

  }, 100)

}, [messages.length])

useEffect(() => {

  if (!currentChatId) return

  setConversations((prev) =>
    prev.map((chat) =>
      chat.id === currentChatId
        ? {
            ...chat,
            messages,
            title:
              messages[0]?.text?.slice(0, 25) ||
              "New Conversation",
          }
        : chat
    )
  )

}, [messages])
  return (

    <div className="h-screen text-white flex overflow-hidden relative bg-[#030303]">

        {/* Animated Background */}
<div className="absolute inset-0 overflow-hidden">

  <div className="absolute top-[-200px] left-[-200px] w-[700px] h-[700px] bg-cyan-500/8 blur-[180px] rounded-full animate-pulse"></div>

  <div className="absolute bottom-[-250px] right-[-250px] w-[700px] h-[700px] bg-purple-500/5 blur-[180px] rounded-full animate-pulse"></div>

  <div className="absolute top-[40%] left-[35%] w-[400px] h-[400px] bg-blue-500/10 blur-[140px] rounded-full"></div>

  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:70px_70px]"></div>

</div>

      {/* Sidebar */}
    <div
  className={`
  fixed md:relative
  left-0 top-0
  h-screen
  w-[85%] max-w-[320px]
  z-50

  ${showSidebar ? "translate-x-0" : "-translate-x-full"}

  md:translate-x-0
  transition-all duration-500 ease-out

  border-r border-white/10
  backdrop-blur-3xl

  bg-gradient-to-b
  from-cyan-950/80
  via-slate-950/90
  to-purple-950/80

  shadow-[0_0_80px_rgba(34,211,238,0.15)]

  p-6
  flex flex-col
  shrink-0
  `}
>

        <div className="flex flex-col flex-1 min-h-0">
         <button
  onClick={() => setShowSidebar(false)}
  className="
  md:hidden
  mb-6
  text-2xl
  text-gray-400
  hover:text-white
  transition
  "
>
  ✕
</button>

  <div className="flex items-center gap-3 mb-10">

            <div className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_20px_#22d3ee]"></div>

            <h1 className="text-2xl font-semibold">
              TriMind AI
            </h1>

          </div>

          <button
 onClick={() => {

  const newChat = {
    id: Date.now(),
    title: "New Conversation",
    messages: [],
  }

  setConversations((prev) => [
    newChat,
    ...prev,
  ])

  setCurrentChatId(newChat.id)

  setMessages([])

  setInput("")

}}
  className="w-full bg-white/5 border border-white/10 hover:border-cyan-400 rounded-2xl px-5 py-4 transition-all duration-300 text-left"
>

            + New Conversation

          </button>

        <div className="relative flex-1 min-h-0 overflow-hidden mt-10">

          <div className="absolute inset-0 overflow-y-auto space-y-4 pr-2 text-gray-400">

  {conversations.map((chat) => (

    <div
  key={chat.id}
  className={`group flex items-center justify-between rounded-xl px-4 py-3 cursor-pointer transition-all duration-300 ${
    currentChatId === chat.id
      ? "bg-white/10 border border-white/10 text-white"
      : "hover:bg-white/5 hover:text-white"
  }`}
>

  <div
    onClick={() => {
      setCurrentChatId(chat.id)
      setMessages(chat.messages)
    }}
    className="flex-1 truncate"
  >

    {chat.title}

  </div>

  <button
    onClick={(e) => {

      e.stopPropagation()

      setConversations((prev) =>
        prev.filter((c) => c.id !== chat.id)
      )

      if (currentChatId === chat.id) {
        setMessages([])
        setCurrentChatId(null)
      }

    }}
    className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-red-400 hover:text-red-300 ml-3"
  >

    ✕

  </button>

</div>

  ))}

  </div>

</div>

        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-5">

          <div className="text-sm text-gray-500">
            Logged in as
          </div>

          <div className="mt-2 font-medium">
            Jay
          </div>

        </div>

      </div>

      {/* Main */}
     <div className="flex flex-col flex-1 h-screen">

        {/* Top */}
        
<div className="
border-b
border-white/10
bg-white/[0.03]
backdrop-blur-3xl

px-4 md:px-8
py-4 md:py-5

flex
flex-col md:flex-row
gap-4

md:items-center
justify-between

shrink-0
">
          <div>
<button
  onClick={() => setShowSidebar(true)}
  className="
    md:hidden
    text-2xl
    hover:text-cyan-400
    transition-all duration-300
  "
>
  ☰
</button>
            <div className="text-xl font-semibold">
              TriMind Assistant
            </div>

            <div className="text-sm text-gray-500 mt-1">
              Advanced AI conversation system
            </div>

          </div>

          <div className="flex items-center gap-4">

  <button
    onClick={() => window.history.back()}
    className="px-5 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 text-sm"
  >

    ← Back Home

  </button>

  <div className="text-cyan-400 text-sm">
    GPT-Next Model
  </div>

</div>
{showSidebar && (
  <div
    onClick={() => setShowSidebar(false)}
    className="
      fixed inset-0 z-40 md:hidden
      bg-black/40
      backdrop-blur-sm
      transition-all duration-300
    "
  />
)}

        </div>

        {/* Messages */}
    <div className="flex-1 relative overflow-hidden">

  <div
  ref={messagesRef}
  className="
messages-scroll
absolute inset-0
overflow-y-auto

px-4 md:px-8
py-6 md:py-8

space-y-6 md:space-y-8
"
>


          {messages.map((msg, index) => (

            <motion.div
              key={index}
              initial={{
  opacity: 0,
  y: 40,
  scale: 0.95,
}}
              animate={{
  opacity: 1,
  y: 0,
  scale: 1,
}}
             transition={{
  duration: 0.5,
  ease: "easeOut",
}}
              className={`flex ${
                msg.role === "user"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >

              <div
                className={`group relative max-w-[90%] md:max-w-3xl px-6 py-5 rounded-[28px] shadow-[0_0_30px_rgba(255,255,255,0.03)] leading-8 ${
                  msg.role === "user"
                    ? "bg-cyan-500/10 border border-cyan-400/20"
                    : "bg-white/[0.04] border border-white/10 text-gray-300 backdrop-blur-3xl"
                }`}
              >
{msg.role === "ai" && (

  <button
    onClick={() => {

      navigator.clipboard.writeText(msg.text)

      setCopiedIndex(index)

      setTimeout(() => {
        setCopiedIndex(null)
      }, 1500)

    }}
    className="
      absolute
      top-3
      right-3

      opacity-0
      group-hover:opacity-100

      text-gray-400
      hover:text-white

      transition-all
      duration-300
    "
  >

    {copiedIndex === index ? "✓" : "⧉"}

  </button>

)}
                {msg.text}

              </div>

            </motion.div>

          ))}

          {loading && (

  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="flex justify-start"
  >

    <div className="bg-white/[0.04] border border-white/10 text-gray-300 backdrop-blur-3xl rounded-[28px] shadow-[0_0_30px_rgba(255,255,255,0.03)] px-6 py-5">

      <div className="flex items-center gap-2">

        <div className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce"></div>

        <div className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.2s]"></div>

        <div className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.4s]"></div>

      </div>

    </div>

  </motion.div>

)}

         </div>

</div>

{/* Input */}
        <div className="border-t border-white/10 p-5 bg-[#030303] shrink-0">

         <div className="relative max-w-5xl mx-auto">

  <div className="rounded-3xl border border-cyan-400 overflow-hidden">

    <textarea
    ref={textareaRef}
      value={input}
      onChange={(e) => setInput(e.target.value)}
      onInput={(e) => {
        e.target.style.height = "auto";
        e.target.style.height =
          Math.min(e.target.scrollHeight, 200) + "px";
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault();
          handleSend();
        }
      }}
      rows={1}
      placeholder="Ask TriMind AI anything..."
     className="
w-full
bg-white/[0.04]
outline-none

px-4 md:px-7
py-4 md:py-5

pr-24 md:pr-32

text-base md:text-lg

backdrop-blur-3xl
resize-none
overflow-y-auto

min-h-[70px]
max-h-[200px]
"
    />

  </div>

  <button
    onClick={handleSend}
    
   className="
absolute
right-2 md:right-3
bottom-2 md:bottom-3

bg-cyan-400
text-black

px-4 md:px-6
py-2 md:py-3

rounded-2xl
text-sm md:text-base
"
  >
    Send
  </button>

</div>

        </div>

      </div>

    </div>

  )
}

export default Chat