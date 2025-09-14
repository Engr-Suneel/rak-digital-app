import React from "react";
import { Mail, Phone } from "lucide-react";
import { FormField, Input } from "@/components/forms/FormElements";
import type { AppointmentFormData, FormErrors } from "@/types";
import { useLanguage } from "@/hooks/useLanguage";

interface ContactDetailsSectionProps {
  values: AppointmentFormData;
  errors: FormErrors;
  onChange: (name: keyof AppointmentFormData, value: string) => void;
  onBlur: (name: keyof AppointmentFormData) => void;
}

export const ContactDetailsSection: React.FC<ContactDetailsSectionProps> = ({
  values,
  errors,
  onChange,
  onBlur,
}) => {
  const { t } = useLanguage();

  return (
    <div className="border-t border-gray-200 pt-8">
      <h2 className="text-lg font-semibold text-rak-primary mb-2">
        {t("contact_details")}
      </h2>
      <p className="text-sm text-gray-600 mb-6">{t("meeting_info_text")}</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <FormField id="email" label={t("email")} required error={errors.email}>
          <Input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={(value) => onChange("email", value)}
            onBlur={() => onBlur("email")}
            error={errors.email}
            required
            icon={Mail}
            iconPosition="left"
          />
        </FormField>

        <FormField
          id="mobile"
          label={t("mobile")}
          required
          error={errors.mobile}
        >
          <Input
            id="mobile"
            name="mobile"
            type="tel"
            value={values.mobile}
            onChange={(value) => onChange("mobile", value)}
            onBlur={() => onBlur("mobile")}
            error={errors.mobile}
            required
            icon={Phone}
            iconPosition="left"
          />
        </FormField>
      </div>
    </div>
  );
};
