import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";
import CurvedArrow from "../arrows/CurvedArrow";
import Square from "./Square";

// Import du nouveau composant RSVPDialog
import RSVPDialog from "./RSVPDialog";

const RSVPSection = () => {
  const [open, setOpen] = useState(false);
  const [response, setResponse] = useState("");
  const sectionRef = useRef(null);
  
  const handleOpen = (value: string) => {
    setResponse(value);
    setOpen(true);
  };

  const handleSubmit = (data: {
    response: string;
    attendees?: string;
    allergies?: string;
    message?: string;
  }) => {
    // Gérer la soumission du formulaire
    console.log('Form submitted:', data);
  };

  return (
    <section ref={sectionRef} id="rsvp" className="relative z-10 bg-orange-50/50 border-y border-orange-100">
      <div className="min-h-[40vh] md:min-h-[60vh] relative flex items-center justify-center px-6">
        <div className="relative z-10">
          <h2 className="text-3xl text-center mb-8">On vous comptera parmi nous ?</h2>
          <div>
            <div className="flex justify-center gap-12 mb-4">
              <div className="">
                <CurvedArrow color="var(--color-orange-300)" className="w-18 h-18" />
              </div>
              <div className="scale-x-[-100%]">
                <CurvedArrow color="var(--color-orange-300)" className="w-18 h-18" />
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-3 md:gap-8">
            <Button 
              className="bg-white/90 hover:bg-white border-black/20 border-gray-400! h-14 text-xs md:text-md md:text-[15px] font-medium tracking-wide md:w-48 p-4 h-12 md:h-14 text-gray-800" 
              size="lg" 
              variant="outline"
              onClick={() => handleOpen("Oui bien sûr !!")}
            >
              Oui bien sûr !
            </Button>
            <Button 
              className="bg-white/90 hover:bg-white border-black/20 border-gray-400! h-14 text-xs md:text-md md:text-[15px] font-medium tracking-wide md:w-48 p-4 h-12 md:h-14 text-gray-800" 
              size="lg"
              variant="outline"
              onClick={() => handleOpen("Hélas non...")}
            >
              Hélas non :(
            </Button>
          </div>
        </div>
      </div>

      {/* Utilisation du nouveau composant RSVPDialog */}
      <RSVPDialog
        open={open}
        onOpenChange={setOpen}
        response={response}
        onResponseChange={setResponse}
        onSubmit={handleSubmit}
      />
    </section>
  );
};

export default RSVPSection;