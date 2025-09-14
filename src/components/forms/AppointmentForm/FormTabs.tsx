import React from "react";
import { cn } from "@/utils/helpers";
import { useLanguage } from "@/hooks/useLanguage";

interface FormTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  className?: string;
}

export const FormTabs: React.FC<FormTabsProps> = ({
  activeTab,
  onTabChange,
  className,
}) => {
  const { t } = useLanguage();

  const tabs = [
    { id: "mycase", labelKey: "my_case" },
    { id: "general", labelKey: "general_enquiries" },
  ];

  return (
    <div className={cn("border-b border-gray-200 mb-8", className)}>
      <nav className="flex gap-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={cn(
              "py-3 text-sm font-medium border-b-2 transition-colors",
              activeTab === tab.id
                ? "text-rak-primary border-rak-red"
                : "text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300"
            )}
          >
            {t(tab.labelKey)}
          </button>
        ))}
      </nav>
    </div>
  );
};
