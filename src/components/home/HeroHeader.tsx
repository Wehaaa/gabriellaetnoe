import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import ResponsiveSquare from "@/components/home/ResponsiveSquare";

const HeroHeader = () => {
  return (
    <Carousel className="border-b border-gray-200 select-none">
      <CarouselContent>
        <CarouselItem className="pl-0">
          <header className="relative min-h-[30vh] md:min-h-[50vh] lg:min-h-[70vg] w-full flex justify-center items-center text-center overflow-hidden pt-0">
            {/* Overlay avec fade-in */}
            <div className="absolute inset-0 bg-white opacity-0 animate-in fade-in-0 duration-1000"></div>
            
            {/* Contenu principal avec animation de slide et fade */}
            <div className="relative z-10 space-y-3 -top-0">
              <h1 className="font-blue-paradise text-3xl md:text-5xl lg:text-5xl leading-[150%]">
                <span className="block animate-in fade-in-10 slide-in-from-bottom-3 duration-700 fill-mode-forwards">
                  Gabriella
                </span>
                <span className="block animate-in fade-in-10 slide-in-from-bottom-3 duration-700 delay-100 fill-mode-forwards">
                  & Noé
                </span>
              </h1>
              <p className="text-sm md:text-base text-gray-600 animate-in fade-in-10 slide-in-from-bottom-3 duration-700 delay-200 fill-mode-forwards">
                12 juillet 2025, Ourém, Portugal
              </p>
            </div>

            {/* Carré rotatif avec zoom et fade */}
            <div className="absolute rotate-[45deg] shadow-lg bg-white animate-in fade-in-0 zoom-in-95 slide-in-from-bottom-3 duration-1000 delay-500">
              <ResponsiveSquare
                xs={{
                  size: 400,
                  imagesPer: 5,
                  cropSize: 70,
                  innerFrameInset: '10px',
                }}
                sm={{
                  size: 500,
                  imagesPer: 5,
                  cropSize: 60
                }}
                md={{
                  size: 700,
                  imagesPer: 7,
                  cropSize: 55
                }}
                lg={{
                  size: 800,
                  imagesPer: 7,
                  cropSize: 55,
                  innerFrameInset: '20px',
                  innerFrameMaskHeight: '100px'
                }}
                xl={{
                  size: 900,
                  imagesPer: 7,
                  cropSize: 55,
                  innerFrameInset: '20px',
                  innerFrameMaskHeight: '100px'
                }}
                inset={0}
              />
            </div>

            {/* Arrière-plan avec fade-in */}
            <div className="bg-orange-100/70 absolute inset-0 object-cover w-full h-full -z-10">
            </div>
          </header>
        </CarouselItem>        
        <CarouselItem className="pl-0">
          <header className="relative min-h-[30vh] md:min-h-[50vh] lg:min-h-[70vg] w-full flex justify-center items-center text-center overflow-hidden pt-0">
            <div className="absolute inset-0 bg-black opacity-0"></div>
            <div className="relative z-10 space-y-3 -top-0">
              <h1 className="font-shantell text-3xl md:text-5xl lg:text-6xl leading-[120%]">
                <span className="block">Gabriella</span>
                <span className="block">& Noé</span>
              </h1>
              <p className="text-sm md:text-base text-gray-600">12 juillet 2025, Ourém, Portugal</p>
            </div>
            <div className="absolute rotate-[45deg] shadow-lg bg-white">
              <ResponsiveSquare
                xs={{
                  size: 400,
                  imagesPer: 3,
                  cropSize: 90,
                  innerFrameInset: '10px',
                }}
                sm={{
                  size: 500,
                  imagesPer: 3,
                  cropSize:900
                }}
                md={{
                  size: 700,
                  imagesPer: 3,
                  cropSize:905
                }}
                lg={{
                  size: 800,
                  imagesPer: 3,
                  cropSize: 90,
                  innerFrameInset: '20px',
                  innerFrameMaskHeight: '100px'
                }}
                xl={{
                  size: 900,
                  imagesPer: 3,
                  cropSize: 90,
                  innerFrameInset: '20px',
                  innerFrameMaskHeight: '100px'
                }}
                inset={0}
              />
            </div>
            <div className="bg-orange-100 absolute inset-0 object-cover w-full h-full -z-10">
              <img 
                src="/assets/background-5.png" 
                alt="" 
                className="w-full h-full object-cover opacity-30 scale-[1.3] blur-[0px]"
              />
            </div>
          </header>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default HeroHeader;