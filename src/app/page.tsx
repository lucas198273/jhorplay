import Image from "next/image";
import { Navbar } from "./_componentes/Navbar";
import {BannerSlider} from "./_componentes/BannerSlider";
import { AboutIPTV } from "./_componentes/AboutIptv";
import { HeroSection } from "./_componentes/Hero";
import { PlansSection } from "./_componentes/PlansSection";
import { PlanSectionJhor } from "./_componentes/PlanSectionJhor";
import { MovieSection } from "./_componentes/MovieSection";
import {SubscriptionSection} from "./_componentes/SuscriptionSection"
import {VantagesSectionJhor} from "./_componentes/VantageJhorSection"
import { NewsSection } from "./_componentes/NewsSection"
import React from 'react';



export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
  
      <AboutIPTV />
      < PlansSection />
      <MovieSection />
      <PlanSectionJhor />
      <SubscriptionSection /> 
      <VantagesSectionJhor />
      {/* <NewsSection /> */}
    

      


    </main>
  )
}
