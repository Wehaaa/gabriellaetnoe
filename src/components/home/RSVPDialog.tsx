import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import RSVPForm from './RSVPForm';

export type RSVPResponse = "Oui bien sûr !!" | "Hélas non..." | "";

interface GFFormData {
  cssClass: string | null;
  databaseId: number;
  dateCreated: string;
  formFields: {
    nodes: Array<{
      databaseId: number;
      type: string;
      label: string;
      isRequired: boolean;
      description: string | null;
      choices?: Array<{
        text: string;
        value: string;
      }>;
    }>;
  };
  pagination: unknown | null;
  title: string;
}

interface RSVPDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  response: RSVPResponse;
  onResponseChange: (response: RSVPResponse) => void;
  gfForm: GFFormData;
}

const RSVPDialog: React.FC<RSVPDialogProps> = ({
  open,
  onOpenChange,
  response,
  onResponseChange,
  gfForm
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-4xl bg-white py-16">
        <div className="mx-auto max-w-lg w-full">
          <DialogHeader>
            <DialogTitle className="text-2xl mb-8">
              On vous comptera parmi nous ?
            </DialogTitle>
          </DialogHeader>
          <RSVPForm 
            gfForm={gfForm}
            selectedOption={response}
            onResponseChange={onResponseChange}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RSVPDialog;