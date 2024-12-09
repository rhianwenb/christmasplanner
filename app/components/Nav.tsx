'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import '../globals.css'


export default function Nav() {

  const path = usePathname();

  const menuItems = [
    {
      name: "Home",
      link: "/"
    },
    {
      name: "Dashboard",
      link: "/dashboard"
    },
    // {
    //   name: "Login",
    //   link: "/sign-in"
    // },
  ];




  return (
    <div id="nav">
        <div className="flex justify-between p-3">
            <h1 className="font-extrabold text-emerald-800 text-4xl">Christmas Planner</h1>
        
        <div>
          <ul className="flex items-center text-xl">
          {menuItems.map((item, index) => { 
            const isActive = item.link === path;
            return <li key={index}>
              <Link className={isActive?"m-2 text-xl hover:underline text-emerald-800 font-bold":"text-xl m-2 hover:underline"}
              href={item.link}>
              {item.name}
              </Link>
            </li> })}
            <li  className={"mx-2"}>
            </li>
          </ul>
        </div>
        </div>
    </div>
  )
};