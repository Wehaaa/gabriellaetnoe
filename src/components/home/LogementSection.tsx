import { Card, CardContent, CardHeader } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Link from "next/link"

// Données des hébergements
const accommodations = [
  {
    id: 1,
    name: "Vivenda Aju",
    imageUrl: "https://gabriellaetnoe.cubesite.fr/wp-content/uploads/2025/02/Vivenda-Aju-768x498.jpg",
    description: "7 mn de l'église - 8 mn du domaine",
    link: "https://www.google.com/search?q=Vivenda+Aju+ourem"
  },
  {
    id: 2,
    name: "Vilar dos Prazeres",
    imageUrl: "https://gabriellaetnoe.cubesite.fr/wp-content/uploads/2025/02/Vilar-dos-Prazeres-768x576.avif",
    description: "4 mn de l'église - 7 mn du domaine",
    link: "https://www.google.com/search?q=Vilar+dos+Prazeres+ourem"
  },
  {
    id: 3,
    name: "Quinta da Alcaidaria Mor",
    imageUrl: "https://gabriellaetnoe.cubesite.fr/wp-content/uploads/2025/02/Quinta-da-Alcaidaria-Mor-768x432.jpg",
    description: "14mn de l'église - 15 mn du domaine",
    link: "https://www.google.com/search?q=Quinta+da+Alcaidaria+Mor+ourem"
  },
  {
    id: 4,
    name: "Refugio de Alburitel",
    imageUrl: "https://gabriellaetnoe.cubesite.fr/wp-content/uploads/2025/02/Refugio-de-Alburitel-768x512.jpg",
    description: "14 mn de l'église - 13 mn du domaine",
    link: "https://www.google.com/search?q=Refugio+de+Alburitel+ourem"
  },
  {
    id: 5,
    name: "Mercure Fatima",
    imageUrl: "https://gabriellaetnoe.cubesite.fr/wp-content/uploads/2025/02/Mercure-Fatima-768x576.jpg",
    description: "16 mn de l'église - 16 mn du domaine",
    link: "https://www.google.com/search?q=Mercure+Fatima+hotel"
  },
  {
    id: 6,
    name: "Pousada de Ourém",
    imageUrl: "https://gabriellaetnoe.cubesite.fr/wp-content/uploads/2025/02/Pousada-de-Ourem-768x512.jpg",
    description: "2 mn à pieds de l'église - 6 mn en voiture",
    link: "https://www.google.com/search?q=Pousada+de+Ourem"
  },
  {
    id: 8,
    name: "Hotel Estrela de Fatima",
    imageUrl: "https://gabriellaetnoe.cubesite.fr/wp-content/uploads/2025/02/Hotel-Estrela-de-Fatima-768x1152.jpeg",
    description: "17 mn de l'église - 18 mn du domaine",
    link: "https://www.google.com/search?q=Hotel+Estrela+de+Fatima"
  },
  {
    id: 9,
    name: "Abrigo do Castelo",
    imageUrl: "https://gabriellaetnoe.cubesite.fr/wp-content/uploads/2025/02/Abrigo-do-Castelo-768x512.avif",
    description: "3 mn de l'église - 6mn du domaine",
    link: "https://www.google.com/search?q=Abrigo+do+Castelo+ourem"
  }
]

const LogementSection = () => {
  return (
    <section id="loger" className="py-24 border-t border-gray-200">
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
                <Link href={accommodation.link} passHref target="_blank">
                  <Card className="border-none shadow-none overflow-hidden rounded-none">
                    <CardHeader className="p-0">
                      <div className="aspect-3/2">
                        <img 
                        src={accommodation.imageUrl}
                        alt=""
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