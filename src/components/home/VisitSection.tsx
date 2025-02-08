import { Card, CardContent, CardHeader } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const visits = [
  {
    name: "Sanctuaire de Fatima",
    description: "15 km — Le célèbre Sanctuaire est un lieu de pèlerinage mondialement connu. Prenez le temps de visiter la basilique, la chapelle des apparitions et d'assister à une messe."
  },
  {
    name: "Monastère de Batalha",
    description: "Situé au plein patrimoine historique de l'architecture gothique portugaise."
  },
  {
    name: "Monastère d'Alcobaça",
    description: "Un lieu très chargé d'histoire de PORTUGAL et un monastère impressionnant architecturalement enthousiasmé"
  },
  {
    name: "Plage de Nazaré",
    description: "La plage la plus célèbre pour ses vagues géantes qui peuvent atteindre les 30 mètres."
  },
  {
    name: "Village médiéval d'Óbidos",
    description: "Village historique avec ses remparts, ruelles étroites et maisons blanches à l'intérieur. Marché sous la Belle."
  }
]

const VisitSection = () => {
  return (
    <section id="visiter" className="my-32">

      <div className="px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl mb-12">Visiter</h2>
          <div className="text-lg mb-6">
            Et si le coeur vous en dit, voici quelques suggestions de lieux à visiter pour découvrir les alentours.
          </div>
        </div>
      </div>
      
      <div className="relative w-full">
        <Carousel className="w-full">
          <CarouselContent className="pl-6 xl:pl-[calc((100%-var(--container-6xl))/2)] mr-6" style={{ paddingLeft: '' }}>
          {visits.map((visit, i) => (
              <CarouselItem key={i} className="pl-6 basis-[20rem] md:basis-[20rem]">
                <Card className="border-none shadow-none overflow-hidden rounded-none">
                  <CardHeader className="p-0">
                  <div className="bg-gray-200 w-full h-48"></div>
                  </CardHeader>
                  <CardContent className="px-0 py-4">
                    <h3 className="text-lg font-semibold mb-4">{visit.name}</h3>
                    <p className="text-sm text-gray-600">{visit.description}</p>
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

export default VisitSection