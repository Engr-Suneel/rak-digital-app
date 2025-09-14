import React from "react";
import { Home, Star, FileText, Building2, Users, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";
import { cn } from "@/utils/helpers";
import { SIDEBAR_ITEMS } from "@/utils/constants";

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
  className?: string;
}

const iconMap = { Home, Star, FileText, Building2, Users, User };

export const Sidebar: React.FC<SidebarProps> = ({
  isOpen = true,
  onClose,
  className,
}) => {
  const { t, isRTL } = useLanguage();

  const location = useLocation();

  const handleLinkClick = () => {
    // Close mobile sidebar when link is clicked
    if (onClose) {
      onClose();
    }
  };

  // Mobile transform classes based on LTR/RTL
  const mobileTransformClass = isOpen
    ? "translate-x-0"
    : isRTL
    ? "translate-x-full" // hide right for RTL
    : "-translate-x-full"; // hide left for LTR

  const renderNavItems = () =>
    SIDEBAR_ITEMS.map((item) => {
      const Icon = iconMap[item.icon as keyof typeof iconMap];
      const isActive = location.pathname === item.path;
      return (
        <Link
          key={item.id}
          to={item.path}
          onClick={handleLinkClick}
          className={cn(
            "flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-colors",
            isActive
              ? "bg-gray-100 text-rak-primary"
              : "text-gray-600 hover:bg-gray-50 hover:text-gray-800"
          )}
        >
          <Icon size={18} />
          {t(item.labelKey)}
        </Link>
      );
    });

  return (
    <>
      {/* Mobile Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 w-64 z-50 bg-white border-r border-gray-border transform transition-transform duration-300 ease-in-out md:hidden",
          mobileTransformClass,
          isRTL ? "right-0" : "left-0",
          className
        )}
      >
        <div className="flex flex-col h-full">
          <div className="flex-1 pt-8 overflow-y-auto">
            <nav className="space-y-1 px-3">{renderNavItems()}</nav>
            {/* ✅ FIXED: Added separator line before Government Services */}
            <div className="mx-3 mt-6 pt-6 border-t border-gray-200">
              <Link
                to="/government-services"
                onClick={handleLinkClick}
                className="block w-full text-center py-2 px-4 border-2 border-rak-red text-rak-red rounded-full text-sm font-medium hover:bg-red-50 transition-colors"
              >
                {t("government_services")} →
              </Link>
            </div>
          </div>
        </div>
      </aside>

      {/* Desktop Sidebar */}
      <aside
        className={cn(
          "hidden md:flex md:flex-col md:fixed md:h-[calc(100vh-65px)] md:w-64 md:z-50 bg-white border-r border-gray-border",
          isRTL ? "md:right-0 md:left-auto" : "md:left-0 md:right-auto",
          "md:top-[65px]",
          className
        )}
      >
        <div className="flex-1 pt-8 overflow-y-auto">
          <nav className="space-y-1 px-3">{renderNavItems()}</nav>
          {/* ✅ FIXED: Added separator line before Government Services */}
          <div className="mx-3 mt-6 pt-6 border-t border-gray-200">
            <Link
              to="/government-services"
              onClick={handleLinkClick}
              className="block w-full text-center py-2 px-4 border-2 border-rak-red text-rak-red rounded-full text-sm font-medium hover:bg-red-50 transition-colors"
            >
              {t("government_services")} →
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
};
