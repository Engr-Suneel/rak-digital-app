import React from "react";
import { Calendar } from "lucide-react";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { useLanguage } from "@/hooks/useLanguage";

export const BookAppointment: React.FC = () => {
  const { t } = useLanguage();

  const breadcrumbItems = [
    { label: t("government_entities"), href: "#" },
    { label: t("rak_municipality"), href: "#" },
    { label: t("appointments"), href: "#" },
    { label: t("book_appointment"), isActive: true },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} />

      {/* Page Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-6 h-6 bg-rak-primary rounded flex items-center justify-center">
          <Calendar size={14} className="text-white" />
        </div>
        <h1 className="text-2xl font-semibold text-rak-primary">
          {t("book_appointment")}
        </h1>
      </div>

      {/* Appointment Form */}
      <AppointmentForm />
    </div>
  );
};
