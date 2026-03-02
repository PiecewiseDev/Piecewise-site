import { useState, FormEvent, ChangeEvent } from 'react';

export interface ContactFormData {
  name: string;
  email: string;
  business: string;
  website: string;
  message: string;
}

export type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

export interface UseContactFormReturn {
  formData: ContactFormData;
  submitStatus: SubmitStatus;
  isSubmitting: boolean;
  handleInputChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: FormEvent, extras?: Record<string, string>) => Promise<void>;
  resetForm: () => void;
}

const initialFormData: ContactFormData = {
  name: '',
  email: '',
  business: '',
  website: '',
  message: '',
};

export function useContactForm(): UseContactFormReturn {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent, extras?: Record<string, string>) => {
    e.preventDefault();
    setSubmitStatus('submitting');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, ...extras }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData(initialFormData);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      // Handle form submission errors gracefully without exposing details
      setSubmitStatus('error');
    }
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setSubmitStatus('idle');
  };

  return {
    formData,
    submitStatus,
    isSubmitting: submitStatus === 'submitting',
    handleInputChange,
    handleSubmit,
    resetForm,
  };
}
