import React from "react";
import { cn } from "@/utils/helpers";

interface TextareaProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  error?: string | null;
  required?: boolean;
  disabled?: boolean;
  rows?: number;
  className?: string;
  id?: string;
  name?: string;
}

export const Textarea: React.FC<TextareaProps> = ({
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  required = false,
  disabled = false,
  rows = 4,
  className,
  id,
  name,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="relative">
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={onBlur}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        rows={rows}
        className={cn(
          "w-full px-3 py-2 border border-gray-300 rounded-md resize-none",
          "focus:outline-none focus:ring-2 focus:ring-rak-light-blue focus:border-transparent",
          "disabled:bg-gray-100 disabled:cursor-not-allowed",
          "placeholder:text-gray-400",
          error && "border-red-500 focus:ring-red-500",
          className
        )}
      />

      {error && (
        <p className="text-red-600 text-xs mt-1 animate-fade-in">{error}</p>
      )}
    </div>
  );
};
