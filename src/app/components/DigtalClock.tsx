'use client'

import { useEffect, useState } from "react"
import TimeUnit from "./TimeUnit"
import { motion } from "motion/react";

export default function DigitalClock() {

    const [time, setTime] = useState(new Date())
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        const timer = setInterval(() => {
            setTime(new Date())
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    if (!mounted) return null

    const formatTime = (unit: number) => unit.toString().padStart(2, '0')

    const hours = time.getHours()
    const displayHours = formatTime((hours % 12 || 12 ))
    const minutes = formatTime(time.getMinutes())
    const seconds = formatTime(time.getSeconds())
    const ampm = hours >= 12 ? 'PM' : 'AM'  
    
    const dateString = time.toLocaleDateString('en-US',{
        weekday: 'long',
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    })

    return(
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-950  text-white p-4">
            <motion.div initial={{opacity: 0, y: -10}}
            animate={{opacity: 1, y:0}}
            className="text-blue-400 font-medium tracking-widest mb-6 uppercase text-sm md:text-base">
                {dateString}
            </motion.div>
            <motion.div
            initial={{opacity: 0, scale: 0.9}}
            whileInView={{opacity: 1, scale: 1}}
            transition={{duration: .5}}
             className="p-8 md:p-12 rounded-[3rem] bg-slate-900/20 border border-slate-800 backdrop-blur-xl flex items-baseline gap-3 md:gap-6 text-6xl md:text-9xl font-bold shadow-2xl">
                <TimeUnit value = {displayHours} lable = "Hours"/>
                <span className="animate-pulse text-blue-500 ">:</span>
                <TimeUnit value = {minutes} lable = "Minutes"/>
                <span className="animate-pulse text-blue-500 ">:</span>
                <TimeUnit value = {seconds} lable = "Seconds"/>

                <div className="text-xl md:text-3xl text-blue-500 font-mono self-start mt-2">
                    {ampm}
                </div>
            </motion.div>
        </div>
    )
    
}