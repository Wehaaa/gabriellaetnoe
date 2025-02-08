import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import CurvedArrow from "./CurvedArrow";


const RSVPSection = () => {
  const [open, setOpen] = useState(false);
  const [response, setResponse] = useState("");
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  
  const handleOpen = (value: string) => {
    setResponse(value);
    setOpen(true);
  };

  return (
    <section ref={sectionRef} id="rsvp" className="relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 w-full h-[100%] -top-[15%] opacity-50"
        style={{
          y,
          backgroundImage: 'url(/assets/images/ourem.jpg)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div className="absolute inset-0 bg-[#0a0300]/90" />
      
      <div className="min-h-[40vh] md:min-h-[60vh] relative flex items-center justify-center px-6 text-white">
        <div className="w-full">
          <h3 className="font-blue-paradise text-3xl text-center mb-8">On vous comptera parmi nous ?</h3>
          <div>
            <div className="flex justify-center gap-12 mb-4">
            <div className="">
                <CurvedArrow className="w-14 h-14" />
              </div>
              <div className="scale-x-[-100%]">
                <CurvedArrow className="w-14 h-14" />
              </div>
            </div>

          </div>
          <div className="flex justify-center gap-3">
            <Button 
              className="bg-white/90 hover:bg-white border-black/20 h-14 text-xs md:text-md md:text-[15px] font-medium tracking-wide md:w-48 p-4 h-12 md:h-14 text-gray-800" 
              size="lg" 
              variant="outline"
              onClick={() => handleOpen("Oui bien sûr !!")}
            >
              Oui bien sûr !
            </Button>
            <Button 
              className="bg-white/90 hover:bg-white border-black/20 h-14 text-xs md:text-md md:text-[15px] font-medium tracking-wide md:w-48 p-4 h-12 md:h-14 text-gray-800" 
              size="lg"
              variant="outline"
              onClick={() => handleOpen("Hélas non...")}
            >
              Hélas non :(
            </Button>
          </div>
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-4xl bg-white py-16">
          <div className="mx-auto max-w-lg w-full">
            <DialogHeader>
              <DialogTitle className="text-2xl mb-8">On vous comptera parmis nous ?</DialogTitle>
            </DialogHeader>
            <div className="grid gap-6">
              <div className="grid gap-2">
                <Select value={response} onValueChange={setResponse}>
                  <SelectTrigger>
                    <SelectValue placeholder="On vous comptera parmi nous ?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Oui bien sûr !!">Oui bien sûr !!</SelectItem>
                    <SelectItem value="Hélas non...">Hélas non...</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Input 
                  placeholder="Ma réponse vaut aussi pour..." 
                />
              </div>
              <div className="grid gap-2">
                <Textarea 
                  placeholder="Si vous avez une allergie / intolérance c'est ici" 
                  className="h-20"
                />
              </div>
              <div className="grid gap-2">
                <Textarea 
                  placeholder="Et vous avez un petit message à faire passer, c'est là :)" 
                  className="h-20"
                />
              </div>
              <Button className="w-24 ml-auto shadow-none bg-zinc-800 h-12 w-32 text-white">Envoyer</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* <div className="bg-orange-100 absolute inset-0 object-cover w-full h-full -z-10">
        <img 
          src="/assets/background-5.png" 
          alt="" 
          className="w-full h-full object-cover opacity-30 scale-[1.3] blur-[0px]"
        />
      </div> */}
        {/* <div className="absolute inset-12 border border-white" /> */}
    </section>
  );
};

export default RSVPSection;