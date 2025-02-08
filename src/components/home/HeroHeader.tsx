import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import ResponsiveSquare from "@/components/home/ResponsiveSquare";

const HeroHeader = () => {
  return (
    <Carousel className="border-b border-gray-200">
      <CarouselContent>
        <CarouselItem>
          <header className="relative min-h-[30vh] md:min-h-[50vh] lg:min-h-[60vg] w-full flex justify-center items-center text-center overflow-hidden pt-0">
            <div className="absolute inset-0 bg-black opacity-0"></div>
            <div className="relative z-10 space-y-3 -top-0">
              <h1 className="font-blue-paradise text-3xl md:text-5xl lg:text-5xl leading-[150%]">
                <span className="block">Gabriella</span>
                <span className="block">& Noé</span>
              </h1>
              <p className="text-sm md:text-base text-gray-600">12 juillet 2025, Ourém, Portugal</p>
            </div>
            <div className="absolute rotate-[45deg] shadow-lg">
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
            <div className="bg-orange-100 absolute inset-0 object-cover w-full h-full -z-10">
              <img 
                src="/assets/background-5.png" 
                alt="" 
                className="w-full h-full object-cover opacity-30 scale-[1.3] blur-[6px]"
              />
            </div>
          </header>
        </CarouselItem>
        {/* <CarouselItem>
          <header className="relative h-[60vh] w-full flex justify-center items-center text-center overflow-hidden pt-0">
            <div className="absolute inset-0 bg-black opacity-0"></div>
            <div className="relative z-10 -top-0">
              <h1 className="font-shantell xl:text-6xl leading-[130%]">
                <span className="block">Gabriella</span>
                <span className="block">& Noé</span>
              </h1>
              <p className="text-gray-600">12 juillet 2025, Ourém, Portugal</p>
            </div>
            <div className="absolute rotate-[45deg] shadow-lg">
              <ResponsiveSquare
                xs={{
                  size: 240,
                  imagesPer: 3,
                  cropSize: 90
                }}
                sm={{
                  size: 400,
                  imagesPer: 3,
                  cropSize: 90
                }}
                md={{
                  size: 560,
                  imagesPer: 3,
                  cropSize: 90
                }}
                lg={{
                  size: 720,
                  imagesPer: 3,
                  cropSize: 90
                }}
                xl={{
                  size: 800,
                  imagesPer: 3,
                  cropSize: 90
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
        </CarouselItem> */}
      </CarouselContent>
    </Carousel>
  );
};

export default HeroHeader;