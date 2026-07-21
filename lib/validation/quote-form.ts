// lib/validation/quote-form.ts

export type ValidationErrors = Record<string, string>;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const isEmpty = (value: string | undefined | null) =>
  !value || value.trim() === "";

export interface ContactInformationData {
  firstName: string;
  lastName: string;
  companyName: string;
  workEmail: string;
  phone: string;
}

export interface BusinessProfileData {
  industry: string;
  otherIndustry: string;
  teamSize: string;
}

export interface EngagementData {
  engagementType: string;
  startTimeline: string;
}

export interface ProjectGoalsData {
  primaryGoal: string;
  additionalInformation: string;
}

export interface QuoteFormData {
  contactInformation: ContactInformationData;
  businessProfile: BusinessProfileData;
  selectedServices: string[];
  engagement: EngagementData;
  projectGoals: ProjectGoalsData;
  acceptedPrivacy?: boolean;
}

export interface ValidationResult {
  valid: boolean;
  errors: ValidationErrors;
}

/* ----------------------------------------------------------
   Contact Information
---------------------------------------------------------- */

export function validateContactInformation(
  data: ContactInformationData,
): ValidationErrors {
  const errors: ValidationErrors = {};

  if (isEmpty(data.firstName)) {
    errors.firstName = "First name is required.";
  }

  if (isEmpty(data.lastName)) {
    errors.lastName = "Last name is required.";
  }

  if (isEmpty(data.companyName)) {
    errors.companyName = "Company name is required.";
  }

  if (isEmpty(data.workEmail)) {
    errors.workEmail = "Work email is required.";
  } else if (!EMAIL_REGEX.test(data.workEmail)) {
    errors.workEmail = "Please enter a valid email address.";
  }

  if (isEmpty(data.phone)) {
    errors.phone = "Phone number is required.";
  }

  return errors;
}

/* ----------------------------------------------------------
   Business Profile
---------------------------------------------------------- */

export function validateBusinessProfile(
  data: BusinessProfileData,
): ValidationErrors {
  const errors: ValidationErrors = {};

  if (isEmpty(data.industry)) {
    errors.industry = "Please select an industry.";
  }

  if (data.industry === "Other" && isEmpty(data.otherIndustry)) {
    errors.otherIndustry = "Please specify your industry.";
  }

  if (isEmpty(data.teamSize)) {
    errors.teamSize = "Please select your team size.";
  }

  return errors;
}

/* ----------------------------------------------------------
   Services
---------------------------------------------------------- */

export function validateServices(services: string[]): ValidationErrors {
  const errors: ValidationErrors = {};

  if (!services.length) {
    errors.selectedServices = "Please select at least one service.";
  }

  return errors;
}

/* ----------------------------------------------------------
   Engagement
---------------------------------------------------------- */

export function validateEngagement(data: EngagementData): ValidationErrors {
  const errors: ValidationErrors = {};

  if (isEmpty(data.engagementType)) {
    errors.engagementType = "Please select an engagement type.";
  }

  if (isEmpty(data.startTimeline)) {
    errors.startTimeline = "Please select a preferred start timeline.";
  }

  return errors;
}

/* ----------------------------------------------------------
   Project Goals
---------------------------------------------------------- */

export function validateProjectGoals(data: ProjectGoalsData): ValidationErrors {
  const errors: ValidationErrors = {};

  if (isEmpty(data.primaryGoal)) {
    errors.primaryGoal = "Please describe your primary goal.";
  }

  return errors;
}

/* ----------------------------------------------------------
   Privacy
---------------------------------------------------------- */

export function validatePrivacy(acceptedPrivacy: boolean): ValidationErrors {
  const errors: ValidationErrors = {};

  if (!acceptedPrivacy) {
    errors.acceptedPrivacy =
      "You must accept the Privacy Policy before submitting.";
  }

  return errors;
}

/* ----------------------------------------------------------
   Quote Form
---------------------------------------------------------- */

export function validateQuoteForm(form: QuoteFormData): ValidationResult {
  const errors: ValidationErrors = {
    ...validateContactInformation(form.contactInformation),
    ...validateBusinessProfile(form.businessProfile),
    ...validateServices(form.selectedServices),
    ...validateEngagement(form.engagement),
    ...validateProjectGoals(form.projectGoals),
    // ...validatePrivacy(form.acceptedPrivacy),
  };

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
