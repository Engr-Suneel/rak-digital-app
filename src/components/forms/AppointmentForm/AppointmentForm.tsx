import React, { useState } from "react";
import { useForm } from "@/hooks/useForm";
import { FormField, Select, Input } from "@/components/forms/FormElements";
import { FormTabs } from "./FormTabs";
import { CaseDetailsSection } from "./CaseDetailsSection";
import { ContactDetailsSection } from "./ContactDetailsSection";
import {
  CASE_IDS,
  DISCIPLINES,
  ENGINEERS,
  TIME_SLOTS,
} from "@/utils/constants";
import type { AppointmentFormData } from "@/types";
import { useLanguage } from "@/hooks";

const initialFormData: AppointmentFormData = {
  caseId: "1234567",
  discipline: "architectural",
  engineer: "ahmed-mohammed",
  date: "",
  timeSlot: "",
  requestClarification: "building-regulations",
  comments: "",
  email: "user@gmail.com",
  mobile: "971 55 9004444",
};

const validationRules = {
  caseId: { required: true },
  discipline: { required: true },
  engineer: { required: true },
  date: { required: true, date: true },
  timeSlot: { required: true },
  requestClarification: { required: true },
  email: { required: true, email: true },
  mobile: { required: true, phone: true },
};

export const AppointmentForm: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("mycase");

  const { values, errors, handleChange, handleBlur, validate } = useForm(
    initialFormData,
    validationRules
  );

  const handleSubmit = () => {
    if (validate()) {
      alert(t("confirm_appointment") + " - Success!");
      console.log("Form submitted:", values);
    }
  };

  return (
    // ✅ FIXED: Removed Card wrapper - now just white background with padding
    <div className="">
      <FormTabs activeTab={activeTab} onTabChange={setActiveTab} />

      {/* ✅ FIXED: Conditional content based on active tab */}
      {activeTab === "mycase" && (
        <div>
          {/* First Row - Case Information */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <FormField
              id="caseId"
              label={t("case_id")}
              required
              error={errors.caseId}
              info={t("case_info_text")}
            >
              <Select
                id="caseId"
                name="caseId"
                options={CASE_IDS}
                value={values.caseId}
                onChange={(value) => handleChange("caseId", value)}
                onBlur={() => handleBlur("caseId")}
                error={errors.caseId}
                required
              />
            </FormField>

            <FormField
              id="discipline"
              label={t("discipline")}
              required
              error={errors.discipline}
            >
              <Select
                id="discipline"
                name="discipline"
                options={DISCIPLINES}
                value={values.discipline}
                onChange={(value) => handleChange("discipline", value)}
                onBlur={() => handleBlur("discipline")}
                error={errors.discipline}
                required
              />
            </FormField>

            <FormField
              id="engineer"
              label={t("engineer")}
              required
              error={errors.engineer}
              info={t("engineer_info_text")}
            >
              <Select
                id="engineer"
                name="engineer"
                options={ENGINEERS}
                value={values.engineer}
                onChange={(value) => handleChange("engineer", value)}
                onBlur={() => handleBlur("engineer")}
                error={errors.engineer}
                required
              />
            </FormField>
          </div>

          {/* Second Row - Date and Time */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <FormField
              id="date"
              label={t("pick_date")}
              required
              error={errors.date}
            >
              <Input
                id="date"
                name="date"
                type="date"
                value={values.date}
                onChange={(value) => handleChange("date", value)}
                onBlur={() => handleBlur("date")}
                error={errors.date}
                required
              />
            </FormField>

            <FormField
              id="timeSlot"
              label={t("time_slot")}
              required
              error={errors.timeSlot}
            >
              <Select
                id="timeSlot"
                name="timeSlot"
                options={TIME_SLOTS}
                value={values.timeSlot}
                onChange={(value) => handleChange("timeSlot", value)}
                onBlur={() => handleBlur("timeSlot")}
                placeholder={t("select_time_slot")}
                error={errors.timeSlot}
                required
              />
            </FormField>
          </div>

          {/* Case Details Section */}
          <CaseDetailsSection
            values={values}
            errors={errors}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {/* Contact Details Section */}
          <ContactDetailsSection
            values={values}
            errors={errors}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {/* ✅ FIXED: More rounded button with proper styling */}
          <div className="mt-8 flex justify-end">
            <button
              type="submit"
              onClick={handleSubmit}
              className="bg-gradient-to-r from-rak-red to-red-800 hover:from-red-700 hover:to-red-900 text-white font-medium px-8 py-3 rounded-full transition-all duration-200 transform hover:scale-105 active:scale-95 text-sm"
            >
              {t("confirm_appointment")} →
            </button>
          </div>
        </div>
      )}
      {/* ✅ FIXED: General Enquiries Tab Content */}
      {activeTab === "general" && (
        <div>
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-rak-primary mb-2">
              {t("general_enquiries")}
            </h3>
            <p className="text-gray-600 max-w-md mx-auto">
              General enquiries form will be available soon. Please use "My
              Case" tab for appointment booking.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
