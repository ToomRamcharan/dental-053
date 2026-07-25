"use client"
import { motion } from "framer-motion"
import { Calendar, Play } from "lucide-react"

export default function Hero({ config }: { config: any }) {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-900/90 via-purple-900/80 to-teal-800/90"></div>
      <div className="absolute inset-0 backdrop-blur-sm"></div>
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 py-32">
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}}>
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-full mb-8 border border-white/20">
            <Play className="w-4 h-4" /> See Our Clinic
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading text-white leading-tight mb-6">
            Modern Dentistry<br />for <span className="text-secondary-light">Beautiful Smiles</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            {config.clinicName} - Where advanced technology meets gentle care in {config.city}.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#contact" className="bg-white text-primary px-8 py-3.5 font-semibold flex items-center gap-2 shadow-xl hover:shadow-2xl transition-all">
              <Calendar className="w-5 h-5" /> Book Free Consultation
            </a>
            <a href="#services" className="border-2 border-white/30 text-white px-8 py-3.5 font-semibold hover:bg-white/10 transition-all">
              Explore Services
            </a>
          </div>
          <div className="mt-16 flex justify-center gap-12 text-white/60">
            <div><span className="block text-2xl font-bold text-white">15+</span> Years Exp</div>
            <div><span className="block text-2xl font-bold text-white">5000+</span> Patients</div>
            <div><span className="block text-2xl font-bold text-white">4.8</span> Rating</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
