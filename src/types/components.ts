import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import type { SelectOption } from ".";

export interface BaseComponentProps {
  className?: string;
  children?: ReactNode;
}

export interface ButtonProps extends BaseComponentProps {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export interface InputProps extends BaseComponentProps {
  type?: "text" | "email" | "tel" | "password" | "date" | "number";
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  error?: string | null;
  required?: boolean;
  disabled?: boolean;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
}

export interface SelectProps extends BaseComponentProps {
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  placeholder?: string;
  error?: string | null;
  required?: boolean;
  disabled?: boolean;
}

export interface TextareaProps extends BaseComponentProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  error?: string | null;
  required?: boolean;
  disabled?: boolean;
  rows?: number;
}

export interface ModalProps extends BaseComponentProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export interface TabsProps extends BaseComponentProps {
  tabs: TabItem[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export interface TabItem {
  id: string;
  label: string;
  content?: ReactNode;
}
