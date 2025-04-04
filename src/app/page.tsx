import Image from "next/image";
import { Navbar } from "./_componentes/Navbar";
import {BannerSlider} from "./_componentes/BannerSlider";
import { AboutIPTV } from "./_componentes/AboutIptv";
import { HeroSection } from "./_componentes/Hero";
import { PlansSection } from "./_componentes/PlansSection";
import { MovieSection } from "./_componentes/MovieSection";
import React from 'react';



export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
  
      <AboutIPTV />
      < PlansSection />
      <MovieSection />
    

      


    </main>
  )
}
