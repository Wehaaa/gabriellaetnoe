import { Card, CardContent, CardHeader } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface TourismPlace {
  name: string
  imageUrl: string
  description: string
}

interface TourismSectionProps {
  sectionTitle: string
  introText: string
  places: TourismPlace[]
}

const TourismSection = ({ sectionTitle, introText, places }: TourismSectionProps) => {
  return (
    <section id="visiter" className="py-24 border-t border-b border-gray-200">
      <div className="px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl mb-12">{sectionTitle}</h2>
          <div className="text-lg mb-6 space-y-4" dangerouslySetInnerHTML={{ __html: introText }} />
        </div>
      </div>
      
      <div className="relative w-full">
        <Carousel className="w-full">
          <CarouselContent className="pl-6 xl:pl-[calc((100%-var(--container-6xl))/2)] mr-6" style={{ paddingLeft: '' }}>
            {places.map((place, i) => (
              <CarouselItem key={i} className="basis-[20rem] md:basis-[20rem] pl-6">
                <Card className="border-none shadow-none overflow-hidden rounded-none">
                  <CardHeader className="p-0">
                    <div className="aspect-3/2">
                      <img 
                        src={place.imageUrl}
                        alt={place.name}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="px-0 py-4">
                    <h3 className="text-lg font-semibold mb-4">{place.name}</h3>
                    <p className="text-sm text-gray-600">{place.description}</p>
                  </CardContent>
                </Card>
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

export default TourismSection