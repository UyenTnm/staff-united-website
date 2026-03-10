import { z } from "zod";

export const joinSchema = z.object({
  first_name: z.string().min(1, "First name is required"),

  last_name: z.string().min(1, "Last name is required"),

  gender: z.string().min(1, "Please select your gender"),

  email: z.string().email("Invalid email address"),

  location: z.string().min(1, "Please select your location"),

  expected_role: z.string().min(1, "Please select a role"),

  career_summary: z.string().min(30, "Please write at least 30 characters"),

  work_status: z.string().min(1, "Select work status"),

  portfolio: z.string().url("Invalid URL").optional().or(z.literal("")),

  current_salary: z.coerce.number().min(1, "Invalid salary").optional(),

  expected_salary: z.coerce.number().min(1, "Please enter salary"),

  cv_upload: z.string().url("Please paste a valid Google Drive link"),

  profile_photo: z
    .string()
    .url("Please enter a valid image link")
    .optional()
    .or(z.literal("")),

  industry: z.array(z.string()).optional(),

  // skills: z.string().optional(),

  tools: z.array(z.string()).optional(),

  english_level: z.string().min(1, "Please select your English level"),

  english_cert: z.string().optional(),

  university: z.string().optional(),

  major: z.string().optional(),

  gpa: z.string().optional(),

  employment_type: z.string().optional(),

  night_shift: z.enum(["Yes", "No"], {
    errorMap: () => ({ message: "Please select an option" }),
  }),

  voice_intro: z
    .string()
    .url("Please enter a valid link")
    .optional()
    .or(z.literal("")),

  privacy_agreement: z.literal(true, {
    errorMap: () => ({ message: "You must agree to the Privacy Notice" }),
  }),

  recruitment_consent: z.literal(true, {
    errorMap: () => ({
      message: "Consent is required to submit the application",
    }),
  }),

  professional_headline: z
    .string()
    .min(5, "Please enter a professional headline"),
});
