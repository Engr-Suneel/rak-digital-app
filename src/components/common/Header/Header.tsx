import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, User, Settings, LogOut } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { cn } from "@/utils/helpers";
import logo from "@/assets/logo.png"; // ✅ import the image
import rakDigital from "@/assets/rak-digital.png"; // ✅ import the image

interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className }) => {
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
    <header
      className={cn(
        "hidden md:block bg-white border-b border-gray-200 sticky top-0 z-50",
        className
      )}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <Link to="/">
              <img
                src={logo}
                alt="RAK Logo"
                className="rounded cursor-pointer"
              />
            </Link>
          </div>

          {/* Right Section */}
          <div className="flex items-center">
            {/* Language Toggle */}
            <div className="px-4 border-r border-gray-300">
              <button
                onClick={toggleLanguage}
                className="text-rak-primary hover:text-rak-light-blue font-medium transition-colors"
              >
                {t("language_toggle")}
              </button>
            </div>

            {/* User Section */}
            <div className="px-4 border-r border-gray-300" ref={dropdownRef}>
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="flex items-center gap-3 text-rak-primary hover:text-rak-light-blue transition-colors"
                >
                  <span className="text-sm">{t("abdullah_al_aziz")}</span>
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

                {/* ✅ FIXED: Dropdown Menu with better positioning */}
                {isDropdownOpen && (
                  <div
                    className={cn(
                      "absolute mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50",
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

            <div className="flex items-center pl-4">
              <img
                src={rakDigital}
                alt="RAK Digital"
                className="w-12 rounded cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
