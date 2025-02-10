import { FlowerIcon } from 'lucide-react';
import React from 'react';
import CurvedArrow from '../arrows/CurvedArrow';
import DottedLine from '../arrows/DottedLine';

type ImageType = {
  src: string;
  alt: string;
  className?: string;
};

type EventType = {
  time: string;
  title: string;
  description?: string;
};

type BeforeAfterContentType = {
  content: React.ReactNode;
  wrapperClassName?: string;
};

type SectionType = {
  id: number;
  events: EventType[];
  before?: BeforeAfterContentType;
  after?: BeforeAfterContentType;
};

type ProgramDataType = {
  images: ImageType[];
  sections: SectionType[];
};

const programData: ProgramDataType = {
  images: [
    { 
      src: '/assets/images/eglise.jpg', 
      alt: "L'église",
      className: ""
    },
    { 
      src: '/assets/images/quinta.jpg', 
      alt: "La Quinta",
      className: "md:mt-2"
    },
    { 
      src: '/assets/images/maison.jpg', 
      alt: "La maison",
      className: "md:relative -top-0"
    }
  ],
  sections: [
    {
      id: 1,
      events: [
        { time: '13h30', title: "Rendez-vous à l'Église" },
        { time: '15h', title: "Début de la messe" }
      ],
      before: {
        content: <CurvedArrow color='var(--color-orange-400)' className="w-14 h-14 text-rose-400 md:scale-x-[-1]" />,
        wrapperClassName: "absolute rotate-[-30deg] md:rotate-0 -top-20 -left-4 md:-left-12"
      }
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
      ],
      before: {
        content: <DottedLine color='var(--color-orange-300)' className="w-3 h-24 scale-x-[-1]" />,
        wrapperClassName: "relative -top-10 left-0 -my-10 md:-my-12"
      },
    },
    {
      id: 3,
      events: [
        { 
          time: '12h', 
          title: "Rendez-vous au Casal do Aroeiro",
          description: "Nous serons ravis de vous retrouver pour prolonger cette joie et partager encore plus de moments inoubliables."
        }
      ],
      before: {
        content: <DottedLine color='var(--color-orange-300)' className="w-3 h-24 scale-x-[-1]" />,
        wrapperClassName: "relative -top-10 left-0 -mt-12 -mb-10 md:-top-0 md:left-0 md:mt-0 md:-mb-3"
      },
    }
  ]
};

const Event: React.FC<EventType> = ({ time, title, description }) => (
  <div className="">
    <h3 className="text-base md:text-lg font-medium">
      <div className="inline-block w-16 md:w-24">{time}</div>
      <div className="inline-block">{title}</div>
    </h3>
    {description && <p className="mt-2 pl-16 md:pl-24 text-gray-700 text-sm font-light">{description}</p>}
  </div>
);

const Section: React.FC<{ section: SectionType; image: ImageType; isLast: boolean }> = ({ section, image, isLast }) => (
  <div className="flex flex-col md:flex-row items-start">
    <div className={`w-full md:w-1/3 ${image.className || ''}`}>
      <img
        src={image.src}
        alt={image.alt}
        className="h-[120px] md:h-[240px] w-full object-contain object-right md:object-center"
      />
    </div>
    <div className="relative md:w-2/3">
      {section.before && (
        <div className={section.before.wrapperClassName}>
          {section.before.content}
        </div>
      )}
      
      <div className="space-y-8 pt-8">
        {section.events.map((event, index) => (
          <Event key={index} {...event} />
        ))}
      </div>

      {section.after && (
        <div className={section.after.wrapperClassName}>
          {section.after.content}
        </div>
      )}
    </div>
  </div>
);

const ProgramSectionSimple: React.FC = () => {
  return (
    <section id="programme" className="max-w-6xl mt-24 mx-auto my-8 px-6">
      <h2 className="text-3xl font-bold mb-16">Le programme</h2>
      <div className="space-y-0">
        {programData.sections.map((section, index) => (
          <Section 
            key={section.id}
            section={section}
            image={programData.images[index]}
            isLast={index === programData.sections.length - 1}
          />
        ))}
      </div>
    </section>
  );
};

export default ProgramSectionSimple;