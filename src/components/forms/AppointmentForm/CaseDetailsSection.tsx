import React from "react";
import { FormField, Select, Textarea } from "@/components/forms/FormElements";
import { REQUEST_CLARIFICATIONS } from "@/utils/constants";
import type { AppointmentFormData, FormErrors } from "@/types";
import { useLanguage } from "@/hooks/useLanguage";

interface CaseDetailsSectionProps {
  values: AppointmentFormData;
  errors: FormErrors;
  onChange: (name: keyof AppointmentFormData, value: string) => void;
  onBlur: (name: keyof AppointmentFormData) => void;
}

export const CaseDetailsSection: React.FC<CaseDetailsSectionProps> = ({
  values,
  errors,
  onChange,
  onBlur,
}) => {
  const { t } = useLanguage();

  return (
    <div className="border-t border-gray-200 pt-8 mb-8">
      <h2 className="text-lg font-semibold text-rak-primary mb-6">
        {t("case_details")}
      </h2>

      <div className="space-y-6">
        <FormField
          id="requestClarification"
          label={t("request_clarification")}
          required
          error={errors.requestClarification}
        >
          <Select
            id="requestClarification"
            name="requestClarification"
            options={REQUEST_CLARIFICATIONS}
            value={values.requestClarification}
            onChange={(value) => onChange("requestClarification", value)}
            onBlur={() => onBlur("requestClarification")}
            error={errors.requestClarification}
            required
          />
        </FormField>

        <FormField id="comments" label={t("comments")} error={errors.comments}>
          <Textarea
            id="comments"
            name="comments"
            value={values.comments}
            onChange={(value) => onChange("comments", value)}
            onBlur={() => onBlur("comments")}
            placeholder={t("comments_placeholder")}
            rows={4}
            error={errors.comments}
          />
        </FormField>
      </div>
    </div>
  );
};
