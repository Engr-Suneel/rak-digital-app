import React from "react";
import { Globe } from "lucide-react";
import { cn } from "@/utils/helpers";
import { useLanguage } from "@/hooks/useLanguage";

interface LanguageToggleProps {
  className?: string;
  showIcon?: boolean;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({
  className,
  showIcon = false,
}) => {
  const { t, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className={cn(
        "inline-flex items-center gap-2 text-rak-primary hover:text-rak-light-blue font-medium transition-colors",
        className
      )}
    >
      {showIcon && <Globe size={16} />}
      {t("language_toggle")}
    </button>
  );
};
