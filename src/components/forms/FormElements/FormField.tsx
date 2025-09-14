import React, { type ReactNode } from "react";
import { Info } from "lucide-react";
import { cn } from "@/utils/helpers";

interface FormFieldProps {
  label: string;
  required?: boolean;
  error?: string | null;
  info?: string;
  children: ReactNode;
  className?: string;
  id?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  required = false,
  error,
  info,
  children,
  className,
  id,
}) => {
  return (
    <div className={cn("space-y-2", className)}>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-rak-primary"
      >
        {label}
        {required && <span className="text-rak-red ml-1">*</span>}
      </label>

      {children}

      {info && (
        <div className="flex items-start gap-2 text-xs text-gray-600">
          <Info
            size={14}
            className="mt-0.5 text-rak-light-blue flex-shrink-0"
          />
          <span>{info}</span>
        </div>
      )}

      {error && <p className="text-rak-red text-xs animate-fade-in">{error}</p>}
    </div>
  );
};
