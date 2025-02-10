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
import CurvedArrow from "../arrows/CurvedArrow";
import Square from "./Square";


const RSVPSection = () => {
  const [open, setOpen] = useState(false);
  const [response, setResponse] = useState("");
  const sectionRef = useRef(null);
  
  // const { scrollYProgress } = useScroll({
  //   target: sectionRef,
  //   offset: ["start end", "end start"]
  // });

  // const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  
  const handleOpen = (value: string) => {
    setResponse(value);
    setOpen(true);
  };

  return (
    <section ref={sectionRef} id="rsvp" className="relative z-10 bg-orange-100">

      {/* <motion.div 
        className="absolute inset-0 w-full h-[100%] -top-[15%] opacity-50"
        style={{
          y,
          backgroundImage: 'url(/assets/background-5.png)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      /> */}
      
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
    </section>
  );
};

export default RSVPSection;