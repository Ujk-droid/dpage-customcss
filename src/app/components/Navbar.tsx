
'use client';
import "@/app/styles/Navbar.css";
import Image from "next/image";
import React from 'react'
import Link from "next/link";

const Navbar = () => {
  return (
    
      <nav className="navbar">
        <div className="logo">
            <Image src="/log.jpg" alt="my logo" height={70} width={80} />
        </div>
        <ul className="ulitem">
            
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/contactus">Delivery Form</Link></li>
                   
        </ul>
    </nav>
  
  )
}

export default Navbar
