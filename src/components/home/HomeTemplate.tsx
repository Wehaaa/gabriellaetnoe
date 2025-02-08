'use client'; 

import React from 'react';
import { Button } from "@/components/ui/button";
import HeroHeader from './HeroHeader';
import LogementSection from './LogementSection';
import VisitSection from './VisitSection';
import VenirSection from './VenirSection';
import RSVPSection from './RSVPSection';
import ProgramSection from './ProgramSection';
import Navigation from './Navigation';
import ProgramSectionSimple from './ProgramSectionSimple';


const HomeTemplate = () => {

  return (
    <div className="font-light text-gray-800">

      <HeroHeader />

      <Navigation />

      {/* <ProgramSection /> */}
      <ProgramSectionSimple />

      <RSVPSection />
      
      <VenirSection />
      
      <LogementSection />

      <VisitSection />

    </div>
  );
};

export default HomeTemplate;