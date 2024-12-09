'use client';
import React from 'react';
import { useState, useEffect } from 'react';


// Display Countdown 
export default function Countdown() {

    const [xmas, setXmas] = useState(false);
    const [days, setDays] = useState<number>(0);
    const [hours, setHours] = useState<number>(0);
    const [minutes, setMinutes] = useState<number>(0);
    const [seconds, setSeconds] = useState<number>(0);
  
    useEffect(() => {
  
        const target = new Date("December 24, 2024 23:59:59");
  
        const interval = setInterval(() => {
            const now = new Date();
            const difference = target.getTime() - now.getTime();
            const d = Math.floor(difference / (1000 * 60 * 60 * 24));
                setDays(d);
            const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                setHours(h);
            const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                setMinutes(m);
            const s = Math.floor((difference % (1000 * 60)) / 1000);
                setSeconds(s);
            if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
                setXmas(true);
            };
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    
  return (
    <div>
        { xmas ? ("Merry Christmas!") : 
        (<div className="flex justify-center">
            <div className="flex-col px-2 text-4xl text-center">
                <span >{days}</span>     
                <div className="text-sm mt-1 text-center">Days</div>
            </div>
                <span className="text-4xl text-center"> : </span>
            <div className="flex-col px-2 text-4xl text-center">
                <span>  {hours} </span>
                <div className="text-sm mt-1 text-center">Hours</div>
            </div>
                <span className="text-4xl text-center"> : </span>
            <div className="flex-col px-2 text-4xl text-center"> 
                <span> {minutes} </span>
                <div className="text-sm mt-1 text-center">Minutes</div>
            </div>
                <span className="text-4xl text-center"> : </span>
            <div className="flex-col px-2 text-4xl text-center">
                <span> {seconds} </span>
                <div className="text-sm mt-1 text-center">Seconds</div>
            </div>
        </div>)
        }
    </div>
  )
};