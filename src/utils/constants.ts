import type { SidebarItem, SelectOption, TimeSlot } from "@/types";

export const SIDEBAR_ITEMS: SidebarItem[] = [
  {
    id: "home",
    icon: "Home",
    labelKey: "home",
    path: "/",
    active: true,
  },
  {
    id: "service-requests",
    icon: "Star",
    labelKey: "service_requests",
    path: "/service-requests",
    active: false,
  },
  {
    id: "documents",
    icon: "FileText",
    labelKey: "documents",
    path: "/documents",
    active: false,
  },
  {
    id: "properties",
    icon: "Building2",
    labelKey: "properties",
    path: "/properties",
    active: false,
  },
  {
    id: "businesses",
    icon: "Users",
    labelKey: "businesses",
    path: "/businesses",
    active: false,
  },
  {
    id: "personal-info",
    icon: "User",
    labelKey: "personal_information",
    path: "/personal-information",
    active: false,
  },
];

export const TIME_SLOTS: TimeSlot[] = [
  { value: "09:00-09:30", label: "09:00 AM - 09:30 AM" },
  { value: "09:30-10:00", label: "09:30 AM - 10:00 AM" },
  { value: "10:00-10:30", label: "10:00 AM - 10:30 AM" },
  { value: "10:30-11:00", label: "10:30 AM - 11:00 AM" },
  { value: "11:00-11:30", label: "11:00 AM - 11:30 AM" },
  { value: "11:30-12:00", label: "11:30 AM - 12:00 PM" },
];

export const DISCIPLINES: SelectOption[] = [
  {
    value: "architectural",
    labelKey: "architectural",
    label: "",
  },
  { value: "structural", label: "Structural" },
  { value: "mechanical", label: "Mechanical" },
  { value: "electrical", label: "Electrical" },
];

export const ENGINEERS: SelectOption[] = [
  { value: "ahmed-mohammed", label: "Ahmed Mohammed" },
  { value: "sara-hassan", label: "Sara Hassan" },
  { value: "omar-khalil", label: "Omar Khalil" },
];

export const CASE_IDS: SelectOption[] = [
  { value: "1234567", label: "1234567" },
  { value: "1234568", label: "1234568" },
  { value: "1234569", label: "1234569" },
];

export const REQUEST_CLARIFICATIONS: SelectOption[] = [
  {
    value: "building-regulations",
    labelKey: "building_regulations",
    label: "",
  },
  {
    value: "zoning-requirements",
    label: "Zoning Requirements",
  },
  {
    value: "permit-process",
    label: "Permit Process",
  },
];
