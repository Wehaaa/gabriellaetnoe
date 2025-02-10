// RSVPDialog.tsx
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

interface RSVPDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  response: string;
  onResponseChange: (value: string) => void;
  onSubmit: (data: {
    response: string;
    attendees?: string;
    allergies?: string;
    message?: string;
  }) => void;
}

const RSVPDialog = ({ 
  open, 
  onOpenChange, 
  response, 
  onResponseChange,
  onSubmit 
}: RSVPDialogProps) => {
  const handleSubmit = () => {
    // You could add form validation here
    onSubmit({
      response,
      // Add other form fields here
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-4xl bg-white py-16">
        <div className="mx-auto max-w-lg w-full">
          <DialogHeader>
            <DialogTitle className="text-2xl mb-8">On vous comptera parmi nous ?</DialogTitle>
          </DialogHeader>
          <div className="grid gap-6">
            <div className="grid gap-2">
              <Select value={response} onValueChange={onResponseChange}>
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
            <Button 
              onClick={handleSubmit}
              className="w-24 ml-auto shadow-none bg-zinc-800 h-12 w-32 text-white"
            >
              Envoyer
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};


export default RSVPDialog;