import React, { type ReactNode } from "react";
import { type LucideIcon, Loader2 } from "lucide-react";
import { cn } from "@/utils/helpers";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  loading = false,
  onClick,
  type = "button",
  className,
  icon: Icon,
  iconPosition = "left",
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-rak-red to-red-800 hover:from-red-700 hover:to-red-900 text-white focus:ring-rak-red transform hover:scale-105 active:scale-95",
    secondary:
      "bg-rak-primary hover:bg-blue-800 text-white focus:ring-rak-primary",
    outline:
      "border-2 border-rak-red text-rak-red hover:bg-rak-red hover:text-white focus:ring-rak-red",
    ghost: "text-rak-primary hover:bg-gray-100 focus:ring-gray-300",
  };

  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm gap-1.5",
    md: "px-4 py-2 text-base gap-2",
    lg: "px-6 py-3 text-lg gap-2.5",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        (disabled || loading) &&
          "opacity-50 cursor-not-allowed transform-none hover:scale-100",
        className
      )}
    >
      {loading && <Loader2 size={16} className="animate-spin" />}
      {!loading && Icon && iconPosition === "left" && <Icon size={16} />}
      <span>{children}</span>
      {!loading && Icon && iconPosition === "right" && <Icon size={16} />}
    </button>
  );
};
