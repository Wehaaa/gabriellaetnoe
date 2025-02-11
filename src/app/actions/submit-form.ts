'use server';

import { fetchGraphQL } from '@/utils/fetchGraphQL';

const SUBMIT_FORM_MUTATION = `
  mutation SubmitRSVPForm($id: ID!, $fieldValues: [FormFieldValuesInput!]!) {
    submitGfForm(
      input: {
        id: $id
        fieldValues: $fieldValues
      }
    ) {
      confirmation {
        type    
        message
        url
      }
      errors {
        id
        message
      }
      entry {
        id
        ... on GfSubmittedEntry {
          databaseId
        }
      }
    }
  }
`;

export async function submitForm(formData: FormData) {
  try {
    const formId = formData.get('formId');
    if (!formId) {
      throw new Error('Form ID is required');
    }

    // On ne prend que les champs qui commencent par "field_"
    const fieldValues = Array.from(formData.entries())
      .filter(([key]) => key.startsWith('field_'))
      .map(([key, value]) => ({
        // On enlève le préfixe "field_" pour avoir juste l'ID
        id: parseInt(key.replace('field_', '')),
        value: value.toString()
      }))
      // On filtre les champs vides
      .filter(field => field.value !== '');

    console.log('Sending to GraphQL:', {
      id: formId,
      fieldValues
    });

    const response = await fetchGraphQL(
      SUBMIT_FORM_MUTATION,
      {
        id: formId,
        fieldValues
      }
    );

    console.log('GraphQL Response:', response);

    if (response?.submitGfForm?.errors?.length > 0) {
      return {
        success: false,
        error: response.submitGfForm.errors[0].message
      };
    }

    return {
      success: true,
      entry: response?.submitGfForm?.entry
    };

  } catch (error) {
    console.error('Error submitting form:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Une erreur est survenue'
    };
  }
}