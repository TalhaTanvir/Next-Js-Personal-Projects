"use client";
import { NavLinks } from '@/constant/constant';
import React, { useEffect, useState } from 'react'
import { LuNetwork } from "react-icons/lu";
import { HiBars3BottomRight } from "react-icons/hi2";
import Link from 'next/link'
import ThemeToggler from '@/components/Helper/ThemeToggler';


type Props = {
  openNav: () => void;
}


function Nav({openNav}:Props) {

  const [navbg, setNavBg] = useState(false)

  useEffect(()=>{
    const handler = () =>{
      if(window.scrollY >= 90) setNavBg(true);
      if(window.scrollY < 90) setNavBg(false);
    }

    window.addEventListener("scroll", handler)
    return ()=> window.removeEventListener("scroll", handler)
  }, [])


  return (
    <div className={`transition-all ${navbg ? 'bg-white shadow-md' : 'fixed'} duration-200 h-[12vh] z-[10000] fixed w-full`}>
      <div className='flex items-center h-full justify-between w-[92%] mx-auto'>
        <div className='flex items-center sm:space-x-20'>
          {/* Logo */}
          <div className='flex items-center space-x-2'>
            <div className='size-10 bg-cyan-800 rounded-full flex items-center justify-center flex-col'>
              <LuNetwork className='size-5 text-white'/>
            </div>
            <h1 className='text-xl hidden sm:block md:text-2xl text-cyan-800 dark:text-white font-bold '>DevHire</h1>
          </div>
            {/* NavLinks */}
          <div className='hidden lg:flex items-center space-x-10 '>
            {NavLinks.map((link)=>(
              <Link key={link.id} href={link.url} className='text-base hover:text-cyan-700 dark:hover:text-cyan-200 font-medium transition-all duration-200'>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        {/* Buttons */}
        <div className='flex items-center space-x-4'>
          {/* Login/Register Buttons */}
          <button className='px-8 py-2.5 text-xs sm:text-sm rounded-lg cursor-pointer bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-900 hover:bg-gray-300 transition-all duration-300'>Login / Register</button>
          {/* Job Post Button */}
          <button className='px-8 py-2.5 text-sm hidden sm:block cursor-pointer rounded-lg bg-cyan-700 hover:bg-cyan-900 transition-all duration-300 text-white'>
            Job Post
          </button>
          {/* Theme Toggler */}
          <ThemeToggler/>

          {/* Hamburger Menu */}
          <HiBars3BottomRight onClick={openNav} className='size-8 cursor-pointer text-black dark:text-white lg:hidden'/>
        </div>
      </div>
    </div>
  )
}

export default Nav