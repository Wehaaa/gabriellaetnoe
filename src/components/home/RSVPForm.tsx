'use client';

import React, { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import type { RSVPResponse } from './RSVPDialog';
import { submitForm } from '@/app/actions/submit-form';

interface FormValues {
  [key: string]: string;
}

interface FormErrors {
  [key: string]: string;
}

type ConfirmationType = 'MESSAGE' | 'REDIRECT';

interface Confirmation {
  type: ConfirmationType;
  message?: string;
  url?: string;
}

interface SubmitFormResponse {
  success: boolean;
  error?: string;
  entry?: {
    id: string;
    databaseId: number;
  };
}

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

interface RSVPFormProps {
  gfForm: GFFormData;
  selectedOption: RSVPResponse;
  onResponseChange: (value: RSVPResponse) => void;
}

const RSVPForm: React.FC<RSVPFormProps> = ({
  gfForm,
  selectedOption,
  onResponseChange,
}) => {
  const [formValues, setFormValues] = useState<FormValues>({});
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [confirmation, setConfirmation] = useState<Confirmation | null>(null);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    gfForm.formFields.nodes.forEach((field) => {
      if (field.isRequired && (!formValues[field.databaseId] || formValues[field.databaseId].trim() === '')) {
        newErrors[field.databaseId] = 'Ce champ est obligatoire';
        isValid = false;
      }
    });

    setFormErrors(newErrors);
    return isValid;
  };

  const handleFieldChange = (fieldId: number, value: string) => {
    setFormValues(prev => ({
      ...prev,
      [fieldId]: value
    }));
    
    // Reset error when field changes
    if (formErrors[fieldId]) {
      setFormErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[fieldId];
        return newErrors;
      });
    }
    
    // Reset error message when user starts typing
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    // Prevent default form submission
    const form = document.querySelector('form');
    form?.addEventListener('submit', (e) => {
      e.preventDefault();
    });

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setError(null);
    setSuccessMessage(null);

    try {
      const result = await submitForm(formData) as SubmitFormResponse;

      console.log( result );
      
      if (result.success && result.entry) {
        setSuccessMessage("Merci d'avoir répondu ! À bientôt !");
      } else if (!result.success && result.error) {
        setError(result.error);
      }
    } catch (err) {
      setError('Une erreur est survenue lors de la soumission du formulaire');
      console.error('Error submitting form:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderField = (field: GFFormData['formFields']['nodes'][0]) => {
    const hasError = formErrors[field.databaseId];

    switch (field.type) {
      case 'SELECT':
        return (
          <div key={field.databaseId} className="space-y-2">
            <input 
              type="hidden" 
              name="formId" 
              value={gfForm.databaseId} 
            />
            <Label htmlFor={`field-${field.databaseId}`} className="flex">
              {field.label}
              {field.isRequired && <span className="text-red-500 ml-1">*</span>}
            </Label>
            <Select 
              name={`field_${field.databaseId}`}
              value={formValues[field.databaseId] || selectedOption} 
              onValueChange={(value) => {
                handleFieldChange(field.databaseId, value);
                onResponseChange(value as RSVPResponse);
              }}
            >
              <SelectTrigger id={`field-${field.databaseId}`} className={hasError ? 'border-red-500' : ''}>
                <SelectValue placeholder="Choisissez votre réponse" />
              </SelectTrigger>
              <SelectContent>
                {field.choices?.map((choice) => (
                  <SelectItem key={choice.value} value={choice.value}>
                    {choice.text}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {field.description && <p className="text-sm text-gray-500">{field.description}</p>}
            {hasError && <p className="text-sm text-red-500">{hasError}</p>}
          </div>
        );

      case 'TEXT':
        return (
          <div key={field.databaseId} className="space-y-2">
            <Label htmlFor={`field-${field.databaseId}`} className="flex">
              {field.label}
              {field.isRequired && <span className="text-red-500 ml-1">*</span>}
            </Label>
            <Input
              id={`field-${field.databaseId}`}
              name={`field_${field.databaseId}`}
              type="text"
              value={formValues[field.databaseId] || ''}
              onChange={(e) => handleFieldChange(field.databaseId, e.target.value)}
              className={hasError ? 'border-red-500' : ''}
            />
            {field.description && <p className="text-sm text-gray-500">{field.description}</p>}
            {hasError && <p className="text-sm text-red-500">{hasError}</p>}
          </div>
        );

      case 'TEXTAREA':
        return (
          <div key={field.databaseId} className="space-y-2">
            <Label htmlFor={`field-${field.databaseId}`} className="flex">
              {field.label}
              {field.isRequired && <span className="text-red-500 ml-1">*</span>}
            </Label>
            <Textarea
              id={`field-${field.databaseId}`}
              name={`field_${field.databaseId}`}
              className={`min-h-[100px] ${hasError ? 'border-red-500' : ''}`}
              value={formValues[field.databaseId] || ''}
              onChange={(e) => handleFieldChange(field.databaseId, e.target.value)}
            />
            {field.description && <p className="text-sm text-gray-500">{field.description}</p>}
            {hasError && <p className="text-sm text-red-500">{hasError}</p>}
          </div>
        );

      default:
        return null;
    }
  };

  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);

  if (successMessage) {
    return (
      <div className="rounded-lg border-2 border-green-200 bg-green-50 p-4">
        <div className="text-green-800">
          {successMessage}
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {gfForm.formFields.nodes.map((field) => renderField(field))}
      
      {error && (
        <div className="rounded-lg border-2 border-red-200 bg-red-50 p-4">
          <p className="text-red-800">{error}</p>
        </div>
      )}
      
      <Button 
        type="submit" 
        disabled={isSubmitting} 
        className={`w-full rounded-sm h-12 font-medium px-6 py-3 transition-all duration-200 text-white
          ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-gray-800 hover:bg-gray-700 active:bg-gray-900'}`}
      >
        {isSubmitting ? (
          <div className="flex items-center justify-center">
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            <span>Envoi en cours...</span>
          </div>
        ) : (
          'Confirmer ma réponse'
        )}
      </Button>
    </form>
  );
};

export default RSVPForm;