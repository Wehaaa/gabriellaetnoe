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
    name: "Sanctuario de Fátima",
    description: "Lieu de pèlerinage catholique le plus important du Portugal, dédié à Notre-Dame de Fátima.",
    image: "https://gabriellaetnoe.cubesite.fr/wp-content/uploads/2025/02/Sanctuario-de-Fatima-768x1024.jpg",
  },
  {
    name: "Obidos",
    description: "Village médiéval entouré de remparts, avec des rues pavées et des maisons blanchies à la chaux.",
    image: "https://gabriellaetnoe.cubesite.fr/wp-content/uploads/2025/02/Obidos-768x511.jpg",
  },
  {
    name: "Praia de Nazaré",
    description: "La plage la plus célèbre pour ses vagues géantes qui peuvent atteindre les 30 mètres.",
    image: "https://gabriellaetnoe.cubesite.fr/wp-content/uploads/2025/02/Praia-de-Nazare-768x1024.jpg",
  },
  {
    name: "Mosteiro da Batalha",
    description: "Monastère gothique du XIVe siècle classé au patrimoine mondial de l'UNESCO.",
    image: "https://gabriellaetnoe.cubesite.fr/wp-content/uploads/2025/02/Mosteiro-da-Batalha-768x432.jpg",
  },
  {
    name: "Mosteiro de Alcobaça",
    description: "Monastère cistercien du XIIe siècle, également classé au patrimoine mondial de l'UNESCO.",
    image: "https://gabriellaetnoe.cubesite.fr/wp-content/uploads/2025/02/Mosteiro-de-Alcobaca-768x433.jpg",
  },
  {
    name: "Castelo de Ourém",
    description: "Château médiéval situé sur une colline surplombant la ville d'Ourém.",
    image: "https://gabriellaetnoe.cubesite.fr/wp-content/uploads/2025/02/Castelo-de-Tomar-768x1024.jpg",
  },
  {
    name: "Castelo de Tomar",
    description: "Château médiéval situé sur une colline surplombant la ville de Tomar.",
    image: "https://gabriellaetnoe.cubesite.fr/wp-content/uploads/2025/02/Castelo-de-Tomar-768x1024.jpg",
  }
]

const VisitSection = () => {
  return (
    <section id="visiter" className="py-24 border-t border-b border-gray-200">

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
                    <div className="aspect-3/2">
                      <img 
                      src={visit.image}
                      alt=""
                      className="object-cover w-full h-full"
                      />
                    </div>
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