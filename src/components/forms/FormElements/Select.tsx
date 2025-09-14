import React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/utils/helpers";
import type { SelectOption } from "@/types";
import { useLanguage } from "@/hooks/useLanguage";

interface SelectProps {
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  placeholder?: string;
  error?: string | null;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  id?: string;
  name?: string;
}

export const Select: React.FC<SelectProps> = ({
  options,
  value,
  onChange,
  onBlur,
  placeholder,
  error,
  required = false,
  disabled = false,
  className,
  id,
  name,
}) => {
  const { t, isRTL } = useLanguage();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="relative">
      <select
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={onBlur}
        required={required}
        disabled={disabled}
        className={cn(
          "w-full px-3 py-2 border border-gray-300 rounded-md appearance-none bg-white",
          "focus:outline-none focus:ring-2 focus:ring-rak-light-blue focus:border-transparent",
          "disabled:bg-gray-100 disabled:cursor-not-allowed",
          isRTL ? "pl-10 pr-3" : "pr-10 pl-3",
          error && "border-red-500 focus:ring-red-500",
          className
        )}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.labelKey ? t(option.labelKey) : option.label}
          </option>
        ))}
      </select>

      <ChevronDown
        size={16}
        className={cn(
          "absolute top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none",
          isRTL ? "left-3" : "right-3"
        )}
      />

      {error && (
        <p className="text-red-600 text-xs mt-1 animate-fade-in">{error}</p>
      )}
    </div>
  );
};
