import React from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/utils/helpers";
import { useLanguage } from "@/hooks";

interface InputProps {
  type?: "text" | "email" | "tel" | "password" | "date" | "number";
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  error?: string | null;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  id?: string;
  name?: string;
}

export const Input: React.FC<InputProps> = ({
  type = "text",
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  required = false,
  disabled = false,
  className,
  icon: Icon,
  iconPosition = "left",
  id,
  name,
}) => {
  const { isRTL } = useLanguage();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="space-y-1">
      {/* Input container with consistent height */}
      <div className="relative">
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={handleChange}
          onBlur={onBlur}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          className={cn(
            "w-full px-3 py-2 border border-gray-300 rounded-md",
            "focus:outline-none focus:ring-2 focus:ring-rak-light-blue focus:border-transparent",
            "disabled:bg-gray-100 disabled:cursor-not-allowed",
            "placeholder:text-gray-400",
            Icon && iconPosition === "left" && !isRTL && "pl-10",
            Icon && iconPosition === "right" && !isRTL && "pr-10",
            Icon && iconPosition === "left" && isRTL && "pr-10",
            Icon && iconPosition === "right" && isRTL && "pl-10",
            error && "border-red-500 focus:ring-red-500",
            className
          )}
        />

        {/* ✅ FIXED: Icon position stays consistent regardless of error */}
        {Icon && (
          <div
            className={cn(
              "absolute top-1/2 transform -translate-y-1/2 pointer-events-none",
              iconPosition === "left" && !isRTL && "left-3",
              iconPosition === "right" && !isRTL && "right-3",
              iconPosition === "left" && isRTL && "right-3",
              iconPosition === "right" && isRTL && "left-3"
            )}
          >
            <Icon size={16} className="text-gray-400" />
          </div>
        )}
      </div>

      {/* ✅ FIXED: Error message in separate container to not affect icon position */}
      {error && <p className="text-red-600 text-xs animate-fade-in">{error}</p>}
    </div>
  );
};
