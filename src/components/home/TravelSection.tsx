interface TravelSection {
  subtitle: string
  content: string
}

interface TravelSectionProps {
  sectionTitle: string
  intro: string
  mapImageUrl: string
  sections: TravelSection[]
}

const TravelSection = ({ sectionTitle, intro, mapImageUrl, sections }: TravelSectionProps) => {
  return (
    <section id="venir" className="max-w-6xl mx-auto px-6 py-24">
      <h2 className="text-4xl font-bold mb-12">{sectionTitle}</h2>
      <p className="mb-16">{intro}</p>

      <div className="flex flex-col md:flex-row gap-16">
        <div className="w-full max-w-1/3">
          <img 
            src={mapImageUrl} 
            alt="Carte de Portugal" 
            className="w-full rounded-md border border-gray-200" 
          />
        </div>

        <div className="flex-grow">
          <div className="space-y-16 text-base leading-[1.61] font-light">
            {sections.map((section, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold mb-8">{section.subtitle}</h3>
                <div 
                  dangerouslySetInnerHTML={{ __html: section.content }}
                  className="[&_ul]:list-disc [&_ul]:pl-6 [&_p]:mb-0 [&_strong]:font-medium"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TravelSection