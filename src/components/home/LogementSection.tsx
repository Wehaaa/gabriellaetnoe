import { Card, CardContent, CardHeader } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Link from "next/link"

// Type pour les props
interface Accommodation {
  name: string
  imageUrl: string
  description: string
  link: string
}

interface LogementSectionProps {
  sectionTitle: string
  introText: string
  accommodations: Accommodation[]
}

const LogementSection = ({ sectionTitle, introText, accommodations }: LogementSectionProps) => {
  // Fonction pour convertir le texte avec \n en paragraphes
  const renderIntroText = (text: string) => {
    return text.split('\n\n').map((paragraph, index) => (
      <p key={index} className="mb-6">
        {paragraph}
      </p>
    ));
  };

  return (
    <section id="loger" className="py-24 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12">{sectionTitle}</h2>
        <div className="text-lg mb-6 space-y-4" dangerouslySetInnerHTML={{ __html: introText }} />
      </div>
      
      <div className="relative w-full mt-12">
        <Carousel className="w-full">
          <CarouselContent className="pl-6 xl:pl-[calc((100%-var(--container-6xl))/2)] mr-6" style={{ paddingLeft: '' }}>
            {accommodations.map((accommodation) => (
              <CarouselItem key={accommodation.name} className="basis-[20rem] md:basis-[20rem] pl-6">
                <Link href={accommodation.link} passHref target="_blank">
                  <Card className="border-none shadow-none overflow-hidden rounded-none">
                    <CardHeader className="p-0">
                      <div className="aspect-3/2">
                        <img 
                          src={accommodation.imageUrl}
                          alt={`${accommodation.name}`}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="px-0 py-4">
                      <h3 className="text-lg font-semibold mb-4">{accommodation.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{accommodation.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-white left-4" />
          <CarouselNext className="bg-white right-4" />
        </Carousel>
      </div>
    </section>
  )
}

export default LogementSection