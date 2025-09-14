import { useState, useCallback } from "react";
import type { FormErrors, FormTouched, ValidationRule } from "@/types";

interface UseFormReturn<T> {
  values: T;
  errors: FormErrors;
  touched: FormTouched;
  isValid: boolean;
  isDirty: boolean;
  handleChange: (name: keyof T, value: string) => void;
  handleBlur: (name: keyof T) => void;
  validate: () => boolean;
  reset: () => void;
  setFieldValue: (name: keyof T, value: string) => void;
  setFieldError: (name: keyof T, error: string | null) => void;
}

// interface ValidationRules<T> {
//   [K in keyof T]?: ValidationRule;
// }

// ✅ FIXED: More flexible validation rules type
type ValidationRules<T> = Partial<Record<keyof T, ValidationRule>>;

export const useForm = <T extends Record<string, any>>(
  initialValues: T,
  validationRules: ValidationRules<T> = {}
): UseFormReturn<T> => {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<FormTouched>({});

  const validateField = useCallback(
    (name: keyof T, value: string): string | null => {
      const rules = validationRules[name];
      if (!rules) return null;

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
    },
    [validationRules]
  );

  const handleChange = useCallback(
    (name: keyof T, value: string): void => {
      setValues((prev) => ({
        ...prev,
        [name]: value,
      }));

      // Clear error when user starts typing
      if (errors[name as string]) {
        setErrors((prev) => ({
          ...prev,
          [name as string]: null,
        }));
      }
    },
    [errors]
  );

  const handleBlur = useCallback(
    (name: keyof T): void => {
      setTouched((prev) => ({
        ...prev,
        [name as string]: true,
      }));

      // Validate on blur
      const error = validateField(name, values[name]);
      setErrors((prev) => ({
        ...prev,
        [name as string]: error,
      }));
    },
    [values, validateField]
  );

  const validate = useCallback((): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    Object.keys(validationRules).forEach((key) => {
      const error = validateField(key as keyof T, values[key as keyof T]);
      if (error) {
        newErrors[key] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  }, [values, validationRules, validateField]);

  const reset = useCallback((): void => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
  }, [initialValues]);

  const setFieldValue = useCallback((name: keyof T, value: string): void => {
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const setFieldError = useCallback(
    (name: keyof T, error: string | null): void => {
      setErrors((prev) => ({
        ...prev,
        [name as string]: error,
      }));
    },
    []
  );

  const isValid = Object.values(errors).every((error) => !error);
  const isDirty = JSON.stringify(values) !== JSON.stringify(initialValues);

  return {
    values,
    errors,
    touched,
    isValid,
    isDirty,
    handleChange,
    handleBlur,
    validate,
    reset,
    setFieldValue,
    setFieldError,
  };
};
