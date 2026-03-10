'use client'

import { useEffect, useState } from "react"
import TimeUnit from "./TimeUnit"

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

    const hours = formatTime(time.getHours())
    const minutes = formatTime(time.getMinutes())
    const seconds = formatTime(time.getSeconds())

    return(
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-950  text-white p-4">
            <div className=" p-10 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl flex gap-4 text-6xl md:text-8xl font-mono font-bold">
                <TimeUnit value = {hours} lable = "Hours"/>
                <span className="animate-pulse text-blue-500 ">:</span>
                <TimeUnit value = {minutes} lable = "Minutes"/>
                <span className="animate-pulse text-blue-500 ">:</span>
                <TimeUnit value = {seconds} lable = "Seconds"/>
            </div>
        </div>
    )
    
}