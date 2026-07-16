import { LucideIcon } from "lucide-react";

export interface ServiceCard {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  isChooseAll?: boolean;
}

export interface ServiceTask {
  id: string;
  label: string;
}

export interface FollowUpQuestion {
  label: string;
  type: "select" | "text";
  options?: string[];
  placeholder?: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  description?: string;

  tasks: ServiceTask[];

  followUp?: FollowUpQuestion;
}

export interface ExtraProfileField {
  label: string;
  options: string[];
}

export interface ServiceDefinition {
  id: string;

  title: string;

  subtitle: string;

  extraProfile?: ExtraProfileField;

  categories: ServiceCategory[];
}

export interface CategoryResponse {
  selected: boolean;

  selectedTasks: string[];

  followUpAnswer?: string;
}

export interface ServiceResponse {
  categories: Record<string, CategoryResponse>;
}

export interface ChooseServiceForm {
  selectedServices: string[];

  services: Record<string, ServiceResponse>;
}
