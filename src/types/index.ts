export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface AppointmentFormData extends Record<string, string> {
  caseId: string;
  discipline: string;
  engineer: string;
  date: string;
  timeSlot: string;
  requestClarification: string;
  comments: string;
  email: string;
  mobile: string;
}

export interface SidebarItem {
  id: string;
  icon: string;
  labelKey: string;
  path: string;
  active: boolean;
}

export interface SelectOption {
  value: string;
  label: string;
  labelKey?: string;
}

export interface TimeSlot {
  value: string;
  label: string;
}

export interface ValidationRule {
  required?: boolean;
  email?: boolean;
  phone?: boolean;
  date?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: string) => string | null;
}

export interface FormErrors {
  [key: string]: string | null;
}

export interface FormTouched {
  [key: string]: boolean;
}

export type Language = "en" | "ar";

export type Theme = "light" | "dark";
