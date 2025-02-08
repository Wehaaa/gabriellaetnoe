import { useEffect, useState } from 'react';

interface SquareProps {
  size?: number;
  imagesPer?: number;
  inset?: number;
  cropSize?: number; // percent
  innerFrameInset?: string;
  innerFrameBorderWidth?: string;
  innerFrameMaskHeight?: string;
}

const Square: React.FC<SquareProps> = ({ 
  size = 700, 
  imagesPer = 7, 
  inset = 0,
  cropSize = 50,
  innerFrameInset = '20px',
  innerFrameBorderWidth = '1px',
  innerFrameMaskHeight = '100px'
}) => {
  const [azulejos, setAzulejos] = useState<string[]>([]);
  
  const availableSpaces = imagesPer - 1;
  const borderSize = size / imagesPer;
  
  useEffect(() => {
    import('@/data/azulejos.json').then(module => {
      setAzulejos(module.default);
    });
  }, []);

  if (!azulejos.length) return null;

  const getRandomImage = (lastImage: string | null): string => {
    const availableImages = azulejos.filter(img => img !== lastImage);
    return availableImages[Math.floor(Math.random() * availableImages.length)];
  };

  const generateNonRepeatingImages = (count: number): string[] => {
    const result: string[] = [];
    let lastImage: string | null = null;
    
    for (let i = 0; i < count; i++) {
      const newImage = getRandomImage(lastImage);
      result.push(newImage);
      lastImage = newImage;
    }
    
    return result;
  };

  const horizontalImages = generateNonRepeatingImages(availableSpaces);
  const verticalImages = generateNonRepeatingImages(availableSpaces);
  const cropSizePx = (cropSize / 100) * borderSize;
  const crop = cropSizePx * 2;

  // calcule le pourcentage de la taille du crop par rapport à la taille de l'image
  const cropPercent = size / (size - crop);

  const contentSize = size - cropSizePx * 2;

  return (
    <div 
      id="outer-container" 
      style={{ 
        width: contentSize, 
        height: contentSize,
        transform: `scale(${cropPercent})`,
        boxShadow: `0 0 ${cropSizePx}px rgba(0,0,0,0.2)`
      }} 
      className="relative rounded-sm p-5 overflow-hidden flex justify-center items-center"
    >
      <div style={{ width: size, height: size }} className="absolute">
        {/* Top border */}
        <div className="absolute top-0 left-0 flex">
          {horizontalImages.map((img, index) => (
            <img 
              key={`top-${index}`} 
              src={img} 
              alt="azulejo"
              className="object-cover"
              style={{ width: borderSize, height: borderSize }}
            />
          ))}
        </div>
        
        {/* Left border */}
        <div className="absolute bottom-0 left-0 flex flex-col">
          {verticalImages.map((img, index) => (
            <img 
              key={`left-${index}`} 
              src={img} 
              alt="azulejo"
              className="object-cover"
              style={{ width: borderSize, height: borderSize }}
            />
          ))}
        </div>
        
        {/* Right border */}
        <div className="absolute top-0 right-0 flex flex-col">
          {verticalImages.map((img, index) => (
            <img 
              key={`right-${index}`} 
              src={img} 
              alt="azulejo"
              className="object-cover"
              style={{ width: borderSize, height: borderSize }}
            />
          ))}
        </div>
        
        {/* Bottom border */}
        <div className="absolute bottom-0 right-0 flex">
          {horizontalImages.map((img, index) => (
            <img 
              key={`bottom-${index}`} 
              src={img} 
              alt="azulejo"
              className="object-cover"
              style={{ width: borderSize, height: borderSize }}
            />
          ))}
        </div>

        {/* Center */}
        <div 
          className="absolute" 
          style={{
            inset: borderSize + inset,
          }} 
        >
          <img 
            src={azulejos[0]} 
            alt="azulejo" 
            className="object-cover w-full h-full" 
          />
          
          <div className="absolute w-full h-full bg-white inset-0 shadow-lg flex justify-center items-center overflow-hidden">
            <div className={`absolute inset-[${innerFrameInset}] border-[${innerFrameBorderWidth}] border-red-100`} />
            <div className={`absolute h-[${innerFrameMaskHeight}] w-[150%] rotate-[-45deg] bg-white`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Square;