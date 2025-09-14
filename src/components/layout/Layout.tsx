import React, { useEffect, useRef, useState } from "react";
import { ChevronDown, LogOut, Menu, Settings, User } from "lucide-react";
import { Header } from "@/components/common/Header";
import { Sidebar } from "@/components/common/Sidebar";
import { useLanguage } from "@/hooks/useLanguage";
import { Link, Outlet } from "react-router-dom";
import { cn } from "@/utils";

const MobileHeader: React.FC<{ onMenuClick: () => void }> = ({
  onMenuClick,
}) => {
  const { t, toggleLanguage, isRTL } = useLanguage();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        closeDropdown();
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <header className="md:hidden bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 py-3">
        <button
          onClick={onMenuClick}
          className="p-2 text-gray-600 hover:text-gray-800 transition-colors z-50"
        >
          <Menu size={20} />
        </button>
        <div className="text-sm text-gray-600">{t("website_url")}</div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleLanguage}
            className="text-rak-primary text-sm hover:text-rak-light-blue transition-colors"
          >
            {t("language_toggle")}
          </button>

          {/* ✅ FIXED: Mobile user dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className="flex items-center gap-2 text-rak-primary"
            >
              <div className="w-8 h-8 bg-rak-red rounded-full flex items-center justify-center text-white text-xs">
                AA
              </div>
              <ChevronDown
                size={14}
                className={cn(
                  "transition-transform",
                  isDropdownOpen && "rotate-180"
                )}
              />
            </button>

            {/* Mobile Dropdown Menu */}
            {isDropdownOpen && (
              <div
                className={cn(
                  "absolute mt-2 w-44 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50",
                  isRTL ? "left-0" : "right-0"
                )}
              >
                <Link
                  to="/profile"
                  onClick={closeDropdown}
                  className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <User size={16} />
                  Profile
                </Link>
                <Link
                  to="/settings"
                  onClick={closeDropdown}
                  className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <Settings size={16} />
                  Settings
                </Link>
                <hr className="my-1 border-gray-200" />
                <button
                  onClick={() => {
                    closeDropdown();
                    // Add logout logic here
                  }}
                  className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left"
                >
                  <LogOut size={16} />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export const Layout: React.FC = () => {
  const { isRTL } = useLanguage();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />
      <MobileHeader onMenuClick={toggleSidebar} />

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

      {/* Mobile overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden bg-black bg-opacity-50"
          onClick={closeSidebar}
        />
      )}

      {/* Main content */}
      <main
        className={`flex-1 min-h-screen overflow-y-auto ${
          isRTL ? "md:mr-64" : "md:ml-64"
        }`}
      >
        <div className="p-4">
          <Outlet /> {/* ✅ renders the route content */}
        </div>
      </main>
    </div>
  );
};
