import React from "react";
import { Star } from "lucide-react";
import { Card } from "@/components/ui";
import { useLanguage } from "@/hooks";

export const ServiceRequests: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-6 h-6 bg-rak-primary rounded flex items-center justify-center">
          <Star size={14} className="text-white" />
        </div>
        <h1 className="text-2xl font-semibold text-rak-primary">
          {t("service_requests")}
        </h1>
      </div>

      <Card>
        <div className="text-center py-12">
          <Star size={48} className="mx-auto text-gray-400 mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Service Requests
          </h2>
          <p className="text-gray-600">
            Manage your service requests and track their status
          </p>
        </div>
      </Card>
    </div>
  );
};
