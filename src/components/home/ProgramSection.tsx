import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type ImageType = {
  src: string;
  alt: string;
};

type EventType = {
  time: string;
  title: string;
  description?: string;
};

type SectionType = {
  id: number;
  events: EventType[];
};

type ProgramDataType = {
  images: ImageType[];
  sections: SectionType[];
};

const programData: ProgramDataType = {
  images: [
    { src: '/assets/images/eglise.jpg', alt: "L'église" },
    { src: '/assets/images/quinta.jpg', alt: "La Quinta" },
    { src: '/assets/images/maison.jpg', alt: "La maison" }
  ],
  sections: [
    {
      id: 1,
      events: [
        { time: '13h30', title: "Rendez-vous à l'Église" },
        { time: '15h', title: "Début de la messe" }
      ]
    },
    {
      id: 2,
      events: [
        { 
          time: '17h', 
          title: "Vin d'honneur",
          description: "Après la cérémonie, faisons nos verres ensemble pour célébrer notre union !"
        },
        { 
          time: '18h', 
          title: "Dîner",
          description: "Venez savourer un délicieux repas en bonne compagnie."
        },
        { 
          time: '19h30', 
          title: "Nuit de danse enflammée",
          description: "La fête continue avec de la musique et des danses jusqu'au bout de la nuit !"
        }
      ]
    },
    {
      id: 3,
      events: [
        { 
          time: '12h', 
          title: "Rendez-vous au Casal do Aroeiro",
          description: "Nous serons ravis de vous retrouver pour prolonger cette joie et partager encore plus de moments inoubliables."
        }
      ]
    }
  ]
};

const Event: React.FC<EventType> = ({ time, title, description }) => (
  <div className="mt-8 first:mt-0">
    <h3 className="text-lg">
      <div className="inline-block w-24">{time}</div>
      <div className="inline-block">{title}</div>
    </h3>
    {description && <p className="mt-4 pl-24">{description}</p>}
  </div>
);

type SectionProps = {
  section: SectionType;
  sectionRef: React.RefObject<HTMLDivElement>;
  isActive: boolean;
};

const Section: React.FC<SectionProps> = ({ section, sectionRef, isActive }) => (
  <motion.div 
    ref={sectionRef}
    className={`min-h-[0vh] mb-12 last:mb-0 transition-colors duration-200 pb-12 border-b border-gray-200`}
    initial={{ opacity: 0.5 }}
    animate={{ opacity: isActive ? 1 : 0.8 }}
    transition={{ duration: 0.2 }}
  >
    <div>
      {section.events.map((event, index) => (
        <Event key={index} {...event} />
      ))}
    </div>
  </motion.div>
);

type ImageSliderProps = {
  activeSection: number;
  images: ImageType[];
};

const ImageSlider: React.FC<ImageSliderProps> = ({ activeSection, images }) => (
  <div className="h-full flex items-center">
    <div className="relative w-full aspect-square mx-auto overflow-hidden">
      <AnimatePresence mode="wait">
        {images.map((image, index) => (
          activeSection === index + 1 && (
            <motion.img
              key={image.src}
              src={image.src}
              alt={image.alt}
              className="absolute inset-0 w-full h-full object-contain"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
          )
        ))}
      </AnimatePresence>
    </div>
  </div>
);

const ProgramSection: React.FC = () => {
  const [activeSection, setActiveSection] = useState(1);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
  const lastScrollY = useRef(0);
  const sectionRefs = useRef<React.RefObject<HTMLDivElement>[]>(
    programData.sections.map(() => React.createRef())
  );

  useEffect(() => {
    const handleScroll = () => {
      const newScrollY = window.scrollY;
      setScrollDirection(newScrollY > lastScrollY.current ? 'down' : 'up');
      lastScrollY.current = newScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const checkSectionVisibility = () => {
      const windowHeight = window.innerHeight;
      const middleY = windowHeight / 2;

      sectionRefs.current.forEach((ref, index) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        
        if (scrollDirection === 'down') {
          if (rect.top <= middleY && rect.bottom > middleY) {
            setActiveSection(index + 1);
          }
        } else {
          if (rect.bottom >= middleY && rect.top < middleY) {
            setActiveSection(index + 1);
          }
        }
      });
    };

    const observer = new IntersectionObserver(checkSectionVisibility, {
      threshold: Array.from({ length: 101 }, (_, i) => i / 100),
    });

    sectionRefs.current.forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    window.addEventListener('scroll', checkSectionVisibility, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', checkSectionVisibility);
    };
  }, [scrollDirection]);

  return (
    <section id="programme" className="min-h-screen px-6">
      <div className="px-16 py-16">
        <h2 className="text-5xl mb-16">Le programme</h2>
      </div>
      
      <div className="flex min-h-[calc(100vh-13rem)]">
        <div className="w-1/3 pb-48">
          <div className="sticky top-24 h-1/2 px-24">
            <ImageSlider activeSection={activeSection} images={programData.images} />
          </div>
        </div>

        <div className="flex-grow px-16">
          <div className="space-y-12">
            {programData.sections.map((section, index) => (
              <Section 
                key={section.id}
                section={section}
                sectionRef={sectionRefs.current[index]}
                isActive={activeSection === section.id}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;