'use client';
import Image from "next/image";
import Link from "next/link";
import React from 'react';
import '../globals.css';
// import Countdown from '../Countdown';
// import Notes from '../notes/page';



// Main Dashboard
export default function Dashboard() {



  return (
    <div id="dashboard">
      <div className="container mx-auto mt-20">
        <div className="grid sm:grid-cols-3 gap-16 justify-items-center">
          <div className="justify-items-center">
            <Link href={"/todos"} className="hover:underline"><h3 className="text-2xl font-bold"> Tasks for Santa </h3></Link>
          
            <p className="p-4">Simple to do list to make sure nothing gets forgotten.</p>
            <Image
              className="dark:invert pt-8 items-end"
              src="/santa.svg"
              alt="santa"
              width={150}
              height={150} 
            />

          </div>
          <div className="justify-items-center">
            <h3 className="text-2xl font-bold mb-2"> Countdown ... <em>tick tock!</em></h3>
            <p className="p-4"> There's still time. There is still time.</p>
            {/* {days.toString()} : {hours} : {minutes} : {seconds} */}
            {/* < Countdown /> */}
            <div className=""> 
            <Image
              className="dark:invert pt-8 items-end"
              src="/candle.svg"
              alt="candle"
              width={150}
              height={150} 
            />
              
            </div>
            
          </div>
          <div className="justify-items-center">
            <Link href={"/notes"} className="hover:underline"> <h3 className="text-2xl font-bold"> Food Is Love </h3> </Link>
            <p className="p-4"> Make notes about your plans for meals and snacks.</p>
            <Image
              className="dark:invert pt-8 items-end"
              src="/gingerbread.svg"
              alt="gingerbread man"
              width={150}
              height={150} 
            />
          </div>
        </div>
      </div>
    
    
    </div>
  )
};