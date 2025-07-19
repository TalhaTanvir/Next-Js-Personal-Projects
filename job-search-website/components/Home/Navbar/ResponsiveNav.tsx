"use client"
import React, { useState } from 'react'
import MobileNav from './MobileNav'
import Nav from './Nav'

function ResponsiveNav() {


  const [showNav, setShowNav] = useState(false)

  const openNavHandler = ()=>setShowNav(true);
  const closeNavHandler = ()=>setShowNav(false);


  return (
    <div>
        <Nav openNav={openNavHandler}/>
        <MobileNav showNav={showNav} closeNav={closeNavHandler}/>
    </div>
  )
}

export default ResponsiveNav