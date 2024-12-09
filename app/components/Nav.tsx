'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
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
            
          <div className="text-xl hover:underline font-semibold">
            <SignedOut>
              <SignInButton> 
                <button className="hover:underline hover:text-emerald-800"> Sign In </button>
              </SignInButton>
            </SignedOut>

            <SignedIn> 
              <UserButton/>
            </SignedIn>
        </div>
        
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