import React from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/utils/helpers";
import { useLanguage } from "@/hooks/useLanguage";

interface BreadcrumbItem {
  label: string;
  href?: string;
  isActive?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className }) => {
  const { isRTL } = useLanguage();

  return (
    <nav
      className={cn(
        "hidden md:flex items-center gap-2 text-sm text-rak-light-blue mb-8",
        className
      )}
    >
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && (
            <ChevronRight
              size={16}
              className={cn("text-gray-400", isRTL && "rotate-180")}
            />
          )}
          {item.href && !item.isActive ? (
            <a
              href={item.href}
              className="hover:text-blue-800 transition-colors"
            >
              {item.label}
            </a>
          ) : (
            <span
              className={
                item.isActive ? "text-gray-600" : "text-rak-light-blue"
              }
            >
              {item.label}
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};
