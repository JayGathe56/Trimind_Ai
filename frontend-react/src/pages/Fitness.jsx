
import { motion } from "framer-motion"
import { useState, useRef } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
const API_URL =
  import.meta.env.VITE_API_URL ||
  "http://localhost:5000";

function Fitness() {

  const [accepted, setAccepted] = useState(false);

  const [plan, setPlan] = useState("")

  const handleGeneratePlan = async () => {

  try {

    setLoading(true)

    const res = await axios.post(
     `${API_URL}/api/fitness`,
      formData
    )

    console.log(res.data)

    setPlan(res.data.plan)

  } catch (err) {

    console.log(err)

  } finally {

    setLoading(false)

  }

}

      const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    height: "",
    weight: "",
    goal: "",
    activity: "",
    setting: "",
  })

  const genderRef = useRef(null)
  const heightRef = useRef(null)
  const weightRef = useRef(null)
  const goalRef = useRef(null)
  const activityRef = useRef(null)
  const workoutRef = useRef(null)
  const buttonRef = useRef(null)

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })

  }

  const handleEnter = (e, nextRef) => {

    if (e.key === "Enter") {

      e.preventDefault()

      nextRef.current.focus()

    }

  }

  const isFormValid =
    formData.age &&
    formData.gender &&
    formData.height &&
    formData.weight &&
    formData.goal &&
    formData.activity &&
    formData.setting
    
   const generatePlan = () => {

  setLoading(true)

  setTimeout(() => {

    setLoading(false)

  }, 1000)

}

  return (

    <div className="min-h-screen bg-[#030303] text-white relative overflow-hidden">

      {/* Background Glow */}

      <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-cyan-500/10 blur-[180px] rounded-full"></div>

      <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-purple-500/10 blur-[180px] rounded-full"></div>

      {/* Grid */}

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      {/* Navbar */}

      <div className="relative z-10 max-w-7xl mx-auto px-8 pt-8">

        <div className="flex items-center justify-between backdrop-blur-3xl bg-white/[0.03] border border-white/10 rounded-3xl px-8 py-5">

          <div className="flex items-center gap-2">

            <div className="w-3 h-3 rounded-full bg-green-400 shadow-[0_0_20px_#4ade80]"></div>

            <h1 className="text-lg md:text-2xl font-semibold">
  TriMind Fitness AI
</h1>

          </div>

          <Link
            to="/platform"
            className="text-gray-400 hover:text-white transition-all duration-300"
          >
            Back Platform
          </Link>

        </div>

      </div>

      {/* Hero */}

      <div className="relative z-10 text-center mt-24 px-8">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >

          <div className="inline-block px-6 py-2 rounded-full border border-green-400/20 bg-green-400/10 text-green-300 text-sm mb-8 backdrop-blur-xl">

            AI FITNESS SYSTEM

          </div>

          <h1 className="
text-5xl
sm:text-6xl
md:text-7xl
lg:text-8xl
font-black
leading-none
"
>

            Build Your
            <br />

            <span className="text-green-400">
              Ultimate Body
            </span>

          </h1>

          <p className="text-gray-500 max-w-3xl mx-auto mt-10 text-xl leading-10">

            Personalized workout systems, intelligent nutrition planning
            and futuristic body optimization powered by AI.

          </p>

        </motion.div>

      </div>

      {/* Main Layout */}

      {/* <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 mt-24 px-8 pb-16"> */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 mt-20 px-6 pb-16 overflow-hidden">
        {/* <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-cyan-500/10 blur-[180px] rounded-full"></div> */}
       {/* <div className="relative z-10 max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-8 mt-20 px-6 pb-16"> */}

        {/* Left Panel */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          // className="backdrop-blur-3xl bg-white/[0.03] border border-white/10 rounded-[35px] p-8"
        className="backdrop-blur-3xl bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-[35px] p-8 lg:h-[91vh] flex flex-col justify-between"
        // className="bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-[40px] p-10 shadow-[0_0_60px_rgba(0,255,170,0.06)]"
       
        >

          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Body Metrics
          </h2>

          <div className="space-y-4">

            {/* Row 1 */}

            <div className="grid grid-cols-2 gap-5">

              <div>

                <label className="text-gray-300 text-sm mb-3 block">
                  Age
                </label>

                <input
  name="age"
  value={formData.age}
  onChange={handleChange}
  onKeyDown={(e) => handleEnter(e, genderRef)}
  type="number"
  placeholder="21"
  className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-green-400 transition-all"
/>

              </div>

              <div>

                <label className="text-gray-300 text-sm mb-3 block">
                  Gender
                </label>

                <select
  ref={genderRef}
  name="gender"
  value={formData.gender}
  onChange={handleChange}
  onKeyDown={(e) => handleEnter(e, heightRef)}
  className="w-full bg-[#050816] text-white border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-green-400 transition-all"
>

  <option value="">Select</option>
  <option>Male</option>
  <option>Female</option>
  <option>Other</option>

</select>

              </div>

            </div>

            {/* Row 2 */}

            <div className="grid grid-cols-2 gap-5">

              <div>

                <label className="text-gray-300 text-sm mb-3 block">
                  Height (cm)
                </label>

                <input
  ref={heightRef}
  name="height"
  value={formData.height}
  onChange={handleChange}
  onKeyDown={(e) => handleEnter(e, weightRef)}
  type="number"
  placeholder="175"
  className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-green-400 transition-all"
/>

              </div>

              <div>

                <label className="text-gray-300 text-sm mb-3 block">
                  Weight (kg)
                </label>

                <input
  ref={weightRef}
  name="weight"
  value={formData.weight}
  onChange={handleChange}
  onKeyDown={(e) => handleEnter(e, goalRef)}
  type="number"
  placeholder="70"
  className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-green-400 transition-all"
/>

              </div>

            </div>

            {/* Goal + Activity */}

<div className="grid grid-cols-2 gap-5">

  {/* Goal */}

  <div>

    <label className="text-gray-300 text-sm mb-3 block">
      Goal
    </label>

    <select
      ref={goalRef}
      name="goal"
      value={formData.goal}
      onChange={handleChange}
      onKeyDown={(e) => handleEnter(e, activityRef)}
      className="w-full bg-[#050816] text-white border border-white/10 rounded-2xl px-5 py-3 outline-none focus:border-green-400 transition-all"
    >

      <option value="">Select</option>
      <option>Fat Loss</option>
      <option>Muscle Gain</option>
      <option>Strength</option>
      <option>General Fitness</option>

    </select>

  </div>

  {/* Activity */}

  <div>

    <label className="text-gray-300 text-sm mb-3 block">
      Activity
    </label>

    <select
      ref={activityRef}
      name="activity"
      value={formData.activity}
      onChange={handleChange}
      onKeyDown={(e) => handleEnter(e, workoutRef)}
      className="w-full bg-[#050816] text-white border border-white/10 rounded-2xl px-5 py-3 outline-none focus:border-green-400 transition-all"
    >

      <option value="">Select</option>
      <option>Sedentary</option>
      <option>Lightly Active</option>
      <option>Moderately Active</option>
      <option>Very Active</option>

    </select>

  </div>

</div>

            {/* Workout */}

            <div>

              <label className="text-gray-300 text-sm mb-3 block">
                Workout Setting
              </label>

              <select
  ref={workoutRef}
 name="setting"
 value={formData.setting}
  onChange={handleChange}
  onKeyDown={(e) => handleEnter(e, buttonRef)}
  className="w-full bg-[#050816] text-white border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-green-400 transition-all"
>

  <option value="">Select</option>
  <option>Gym</option>
  <option>Home</option>

</select>

            </div>
  <div className="mt-4 mb-4">
  <label className="flex items-center gap-3 text-sm text-gray-400 cursor-pointer">
    
    <input
      type="checkbox"
      checked={accepted}
      onChange={(e) => setAccepted(e.target.checked)}
      className="w-4 h-4 accent-green-400"
    />

    <span>
      ⚠️ This is general fitness guidance, not medical advice.
      Consult a doctor before starting any program.
    </span>

  </label>
</div>
{/* Button */}

          {/* <button
  ref={buttonRef}
  onClick={handleGeneratePlan}
  disabled={!isFormValid || loading}
  className={`w-full mt-3 py-5 rounded-2xl font-bold text-lg transition-all duration-300 ${
    isFormValid
      ? "bg-gradient-to-r from-green-400 via-emerald-500 to-cyan-500 hover:scale-[1.02] shadow-[0_0_25px_rgba(74,222,128,0.15)]"
      : "bg-white/10 text-gray-500 cursor-not-allowed"
  }`}
>

  {loading ? "Generating..." : "Generate AI Plan"}

</button> */}  <button
  ref={buttonRef}
  onClick={handleGeneratePlan}
  disabled={!isFormValid || loading || !accepted}
  className={`w-full mt-1 py-5 rounded-2xl font-bold text-lg transition-all duration-300 ${
    isFormValid && accepted
      ? "bg-gradient-to-r from-green-400 via-emerald-500 to-cyan-500 hover:scale-[1.02] shadow-[0_0_25px_rgba(74,222,128,0.15)]"
      : "bg-white/10 text-gray-500 cursor-not-allowed"
  }`}
>
  {loading ? "Generating..." : "Generate AI Plan"}
</button>

            {/* <p className="text-gray-500 text-sm mt-1 leading-7">

              This is general fitness guidance, not medical advice.
              Consult a doctor before starting any program.

            </p> */}

          </div>

        </motion.div>

        {/* Right Panel */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        //   className="backdrop-blur-3xl bg-white/[0.03] border border-white/10 rounded-[35px] p-8 relative overflow-hidden"
        // className=" bg-gradient-to-br from-emerald-500/20 via-cyan-500/10 to-transparent backdrop-blur-3xl border border-emerald-400/20 rounded-[40px] p-10 shadow-[0_0_100px_rgba(16,185,129,0.15)] overflow-y-auto h-[89vh]"
        // > backdrop-blur-3xl bg-white/[0.03] border border-white/10 rounded-[35px] p-8 relative overflow-y-auto h-[89vh]"
       
        // className="bg-gradient-to-br from-emerald-500/20 via-cyan-500/10 to-transparent backdrop-blur-3xl border border-emerald-400/20 rounded-[40px] p-10 shadow-[0_0_100px_rgba(16,185,129,0.15)] overflow-y-auto h-[82vh]"
       className="relative isolate overflow-hidden h-[75vh] lg:h-[91vh] rounded-[40px] border border-emerald-400/20 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.25),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.18),transparent_35%),linear-gradient(135deg,rgba(0,20,20,0.95),rgba(0,10,25,0.98))] backdrop-blur-3xl p-10"
        >

       <div className="relative z-10 h-full pr-2">

            <div className="flex items-center justify-between">

              <h2 className="text-white text-4xl font-bold">
                AI Fitness Plan
              </h2>

              <div className="px-4 py-2 rounded-full bg-green-400/10 border border-green-400/20 text-green-300 text-sm">

                LIVE AI

              </div>

            </div>

           <div className="w-full">

  {loading ? (

  <div>

    <div className="w-16 h-16 border-4 border-green-400/20 border-t-green-400 rounded-full animate-spin mx-auto"></div>

    <h3 className="text-4xl font-bold mt-10">
      Generating your plan...
    </h3>

  </div>

) : plan ? (

  <div className="text-left w-full overflow-y-auto max-h-[55vh] lg:max-h-[70vh] pr-2 custom-scroll">

    <h3 className="text-4xl font-bold mb-8">
      Your AI Fitness Plan
    </h3>

    <pre className="whitespace-pre-wrap break-words text-gray-300 leading-8">
      {plan}
    </pre>

  </div>

) : (

  <div>

    <h3 className="text-4xl font-bold mt-11">
      Awaiting Analysis
    </h3>

    <p className="text-gray-400 mt-8 max-w-md mx-auto leading-8">

      Enter your body metrics and goals to generate
      a futuristic AI-powered workout and nutrition system.

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

export default Fitness