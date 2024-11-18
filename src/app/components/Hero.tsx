'use client';
import "@/app/styles/Hero.css";
import React from 'react';
import Image from "next/image"

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">UJK Shipping Industry</h1>
        <p className="hero-subtitle">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur praesentium accusantium tempo
        </p>
        <button className="hero-button">Get Started</button>
      </div>
      <div className="hero-image-container">
        <Image src="/ship.jpeg" alt="Hero" height={400} width={600} />
      </div>
    </div>
  );
};

export default Hero;
