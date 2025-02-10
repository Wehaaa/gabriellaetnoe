'use client'; 

import React from 'react';
import HeroHeader from './HeroHeader';
import LogementSection from './LogementSection';
import VisitSection from './VisitSection';
import VenirSection from './VenirSection';
import RSVPSection from './RSVPSection';
import Navigation from './Navigation';
import ProgramSectionSimple from './ProgramSectionSimple';


const HomeTemplate = () => {

  return (
    <div className="font-light text-gray-800">

      <HeroHeader />

      <Navigation />

      <ProgramSectionSimple />

      <RSVPSection />
      
      <VenirSection />
      
      <LogementSection />

      <VisitSection />

      <RSVPSection />

    </div>
  );
};

export default HomeTemplate;