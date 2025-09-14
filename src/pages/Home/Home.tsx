import React from "react";
import { Link } from "react-router-dom";
import { Calendar, FileText, Building2, Users } from "lucide-react";
import { Card } from "@/components/ui";
import { useLanguage } from "@/hooks";

export const Home: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Calendar,
      title: t("book_appointment"),
      description: "Schedule appointments with government officials",
      path: "/appointments",
      color: "bg-blue-500",
    },
    {
      icon: FileText,
      title: t("documents"),
      description: "Access and manage your documents",
      path: "/documents",
      color: "bg-green-500",
    },
    {
      icon: Building2,
      title: t("properties"),
      description: "Manage your property information",
      path: "/properties",
      color: "bg-purple-500",
    },
    {
      icon: Users,
      title: t("businesses"),
      description: "Business registration and services",
      path: "/businesses",
      color: "bg-orange-500",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-rak-primary mb-4">
          Welcome to RAK Digital
        </h1>
        <p className="text-lg text-gray-600">
          Access government services and manage your applications online
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <Link key={index} to={service.path}>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                <div className="text-center">
                  <div
                    className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center mx-auto mb-4`}
                  >
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-rak-primary mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </div>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
