"use client"
import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa';

function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false)


    // Show and hide functionality


    useEffect(()=>{
        const toggleVisibility = () => {
            if (window.scrollY > 300 ) setIsVisible(true);
            else setIsVisible(false);
        };

        window.addEventListener("scroll", toggleVisibility)


        return ()=> window.removeEventListener("scroll",toggleVisibility)

    },[]);

    // Scroll Functionality
    const ScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }
  return (
    <div className='fixed bottom-4 animate-pulse right-4'>
        {
            isVisible && (
                <button className='bg-blue-700 cursor-pointer text-white rounded-full size-12 flex items-center justify-center focus:outline-none' onClick={ScrollToTop}>
                    <FaArrowUp/>
                </button>
            )
        }

    </div>
  )
}

export default ScrollToTop