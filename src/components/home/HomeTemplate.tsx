'use client';

import React, { useEffect, useState } from 'react';
import HeroHeader from './HeroHeader';
import LogementSection from './LogementSection';
import TourismSection from './TourismSection';
import TravelSection from './TravelSection';
import RSVPSection from './RSVPSection';
import Navigation from './Navigation';
import ProgramSectionSimple from './ProgramSectionSimple';
import { getHomeData } from '@/queries/queryHome';
import { fetchGraphQL } from '@/utils/fetchGraphQL';
import Participer from './Participer';

// Types
interface Accommodation {
  name: string;
  imageUrl: string;
  description: string;
  link: string;
}

interface AccommodationsSection {
  sectionTitle: string;
  introText: string;
  accommodations: Accommodation[];
}

interface TourismPlace {
  name: string;
  imageUrl: string;
  description: string;
}

interface TourismSection {
  sectionTitle: string;
  introText: string;
  places: TourismPlace[];
}

interface TravelSectionData {
  sectionTitle: string;
  intro: string;
  mapImageUrl: string;
  sections: {
    subtitle: string;
    content: string;
  }[];
}

interface ParticiperSection {
  sectionTitle: string;
  description: string;
}

interface GFForm {
  cssClass: string | null;
  databaseId: number;
  dateCreated: string;
  formFields: {
    nodes: Array<{
      databaseId: number;
      type: string;
      label: string;
      isRequired: boolean;
      description: string | null;
      choices?: Array<{
        text: string;
        value: string;
      }>;
    }>;
  };
  pagination: unknown | null;
  title: string;
}

interface HomeData {
  data: {
    page: {
      accommodationsSection: AccommodationsSection;
      tourismSection: TourismSection;
      travelSection: TravelSectionData;
      participerSection: ParticiperSection;
    };
    gfForm: GFForm;
  };
}

const Loader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
  </div>
);

const HomeTemplate = () => {
  const [homeData, setHomeData] = useState<HomeData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchGraphQL(getHomeData);
        
        // Vérification de la présence des données nécessaires
        if (!data?.page?.accommodationsSection || 
            !data?.page?.tourismSection || 
            !data?.page?.travelSection ||
            !data?.page?.participerSection || 
            !data?.gfForm) {
          throw new Error('Données des sections non trouvées');
        }

        setHomeData({ data });
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
        setError(error instanceof Error ? error.message : 'Une erreur est survenue');
      }
    };

    fetchData();
  }, []);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600">
        <p>Erreur: {error}</p>
      </div>
    );
  }

  if (!homeData) return <Loader />;

  const { 
    page: { 
      accommodationsSection, 
      tourismSection, 
      travelSection, 
      participerSection 
    }, 
    gfForm 
  } = homeData.data;

  return (
    <div className="font-light text-gray-800">
      <HeroHeader />
      <Navigation gfForm={gfForm} />
      <ProgramSectionSimple />
      <RSVPSection gfForm={gfForm} />
      <TravelSection 
        sectionTitle={travelSection.sectionTitle}
        intro={travelSection.intro}
        mapImageUrl={travelSection.mapImageUrl}
        sections={travelSection.sections}
      />
      <LogementSection 
        sectionTitle={accommodationsSection.sectionTitle}
        introText={accommodationsSection.introText}
        accommodations={accommodationsSection.accommodations}
      />
      <TourismSection 
        sectionTitle={tourismSection.sectionTitle}
        introText={tourismSection.introText}
        places={tourismSection.places}
      />
      <Participer 
        content={{
          title: participerSection.sectionTitle,
          description: participerSection.description
        }}
      />
      <RSVPSection gfForm={gfForm} />
    </div>
  );
};

export default HomeTemplate;