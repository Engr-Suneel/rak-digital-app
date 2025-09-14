import type { ValidationRule } from "@/types";

export const createValidator = (rules: Partial<ValidationRule>) => {
  return (value: string): string | null => {
    if (rules.required && (!value || value.trim() === "")) {
      return "This field is required";
    }

    if (rules.email && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        return "Please enter a valid email address";
      }
    }

    if (rules.phone && value) {
      const phoneRegex = /^[0-9\s\\+\-\\(\\)]+$/;
      if (!phoneRegex.test(value)) {
        return "Please enter a valid phone number";
      }
    }

    if (rules.date && value) {
      const today = new Date();
      const selectedDate = new Date(value);
      if (selectedDate < today) {
        return "Please select a future date";
      }
    }

    if (rules.minLength && value && value.length < rules.minLength) {
      return `Minimum length is ${rules.minLength} characters`;
    }

    if (rules.maxLength && value && value.length > rules.maxLength) {
      return `Maximum length is ${rules.maxLength} characters`;
    }

    if (rules.pattern && value && !rules.pattern.test(value)) {
      return "Please enter a valid format";
    }

    if (rules.custom && value) {
      return rules.custom(value);
    }

    return null;
  };
};

export const validators = {
  required: createValidator({ required: true }),
  email: createValidator({ required: true, email: true }),
  phone: createValidator({ required: true, phone: true }),
  date: createValidator({ required: true, date: true }),
  optionalEmail: createValidator({ email: true }),
};
