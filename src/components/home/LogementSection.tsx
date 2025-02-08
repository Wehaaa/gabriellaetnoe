import { Card, CardContent, CardHeader } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"



// Données des hébergements
const accommodations = [
  {
    id: 1,
    name: "Quinta da Alcaidaria-Mor",
    description: "Élégant hôtel 4 étoiles situé dans le centre historique d'Ourém, avec vue sur le château médiéval. Restaurant traditionnel portugais sur place.",
    imageUrl: "/api/placeholder/400/300",
  },
  {
    id: 2,
    name: "Pousada de Ourém",
    description: "Maison d'hôtes traditionnelle avec piscine, entourée d'oliviers. Petit-déjeuner avec produits locaux inclus. À 10 minutes de Fátima.",
    imageUrl: "/api/placeholder/400/300",
  },
  {
    id: 3,
    name: "Vivenda Alju",
    description: "Hôtel familial rénové au cœur d'Ourém. Chambres climatisées avec balcon. Parking gratuit et connexion Wi-Fi.",
    imageUrl: "/api/placeholder/400/300",
  },
  {
    id: 4,
    name: "Vilar dos Prazeres",
    description: "Maison traditionnelle portugaise pouvant accueillir jusqu'à 8 personnes. Terrasse avec barbecue et jardin privé. Idéal pour les familles.",
    imageUrl: "/api/placeholder/400/300",
  },
  {
    id: 5,
    name: "Refugio de Alburitel",
    description: "Hôtel moderne avec vue panoramique sur la Serra d'Aire. Restaurant panoramique, spa et piscine extérieure. Navette gratuite pour Fátima.",
    imageUrl: "/api/placeholder/400/300",
  },
  {
    id: 6,
    name: "Abrigo do Castelo",
    description: "Hôtel moderne avec vue panoramique sur la Serra d'Aire. Restaurant panoramique, spa et piscine extérieure. Navette gratuite pour Fátima.",
    imageUrl: "/api/placeholder/400/300",
  },
  {
    id: 7,
    name: "Mercure Fátima",
    description: "Hôtel moderne avec vue panoramique sur la Serra d'Aire. Restaurant panoramique, spa et piscine extérieure. Navette gratuite pour Fátima.",
    imageUrl: "/api/placeholder/400/300",
  },
  {
    id: 8,
    name: "Hotel Estrela De Fatima",
    description: "Hôtel moderne avec vue panoramique sur la Serra d'Aire. Restaurant panoramique, spa et piscine extérieure. Navette gratuite pour Fátima.",
    imageUrl: "/api/placeholder/400/300",
  }
]

const LogementSection = () => {
  return (
    <section id="loger" className="my-32">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12">Se loger</h2>
        <div className="text-lg">
          <p className="mb-6">
            Pour que votre séjour soit le plus agréable possible, nous avons rassemblé quelques options d'hébergements non loin des lieux de la cérémonie. On vous les recommande car ils sont près du lieu de la navette qui assurera les retours le soir du mariage.
          </p>
          <p className="mb-6">
            N'oubliez pas de réserver votre hébergement le plus tôt possible, car les places peuvent se remplir rapidement autour de cette période estivale. Si vous avez des questions ou besoin d'aide pour vos réservations, n'hésitez pas à contacter vos témoins.
          </p>
        </div>
      </div>
      
      <div className="relative w-full mt-12">
        <Carousel className="w-full">
          <CarouselContent className="pl-6 xl:pl-[calc((100%-var(--container-6xl))/2)] mr-6" style={{ paddingLeft: '' }}>
            {accommodations.map((accommodation) => (
              <CarouselItem key={accommodation.id} className="basis-[20rem] md:basis-[20rem] pl-6">
                <Card className="border-none shadow-none overflow-hidden rounded-none">
                  <CardHeader className="p-0">
                  <div className="bg-gray-200 w-full h-48"></div>
                  </CardHeader>
                  <CardContent className="px-0 py-4">
                    <h3 className="text-lg font-semibold mb-4">{accommodation.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{accommodation.description}</p>
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

export default LogementSection