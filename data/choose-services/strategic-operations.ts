import { ServiceDefinition } from "@/types/choose-services";

export const strategicOperations: ServiceDefinition = {
  id: "strategic-operations",

  title: "Strategic Operations",

  subtitle: "Admin, HR & day-to-day processes",
  question: "Which areas do you need?",
  categories: [
    {
      id: "administrative-support",
      title: "Administrative Support",
      description: "Day-to-day help like scheduling, email, and files",

      tasks: [
        {
          id: "executive-assistant-support",
          title: "Executive Assistant Support",
        },
        {
          id: "virtual-assistant-support",
          title: "Virtual Assistant Support",
        },
        {
          id: "calendar-management",
          title: "Calendar Management",
        },
        {
          id: "email-inbox-management",
          title: "Email Inbox Management",
        },
        {
          id: "meeting-scheduling",
          title: "Meeting Scheduling",
        },
        {
          id: "travel-coordination",
          title: "Travel Coordination",
        },
        {
          id: "data-entry",
          title: "Data Entry",
        },
        {
          id: "file-organization",
          title: "File Organization",
        },
        {
          id: "document-formatting",
          title: "Document Formatting",
        },
        {
          id: "internal-communication-support",
          title: "Internal Communication Support",
        },
      ],

      question: {
        title: "Hours per week needed",

        options: [
          "Please select",
          "1-5 hrs/week",
          "5-10 hrs/week",
          "10-20 hrs/week",
          "20+ hrs/week (near full-time)",
        ],
      },
    },

    {
      id: "business-operations-support",
      title: "Business Operations Support",
      description: "Keeping daily operations organized and on track",

      tasks: [
        {
          id: "daily-operations-coordination",
          title: "Daily Operations Coordination",
        },
        {
          id: "workflow-tracking",
          title: "Workflow Tracking",
        },
        {
          id: "task-management-support",
          title: "Task Management Support",
        },
        {
          id: "internal-reporting-support",
          title: "Internal Reporting Support",
        },
        {
          id: "department-coordination",
          title: "Department Coordination",
        },
        {
          id: "vendor-follow-up",
          title: "Vendor Follow-up",
        },
        {
          id: "client-follow-up-operational",
          title: "Client Follow-up (Operational)",
        },
        {
          id: "internal-project-tracking",
          title: "Internal Project Tracking",
        },
        {
          id: "process-documentation",
          title: "Process Documentation",
        },
      ],
      question: {
        title: "How many departments or operational areas need support?",
        type: "select",
        options: [
          "Please select",
          "1 Department",
          "2–5 Departments",
          "6–10 Departments",
          "Company-wide",
        ],
      },
    },

    {
      id: "sop-process-support",
      title: "SOP & Process Support",
      description:
        "Turning how you work into clear, written step-by-step guides",

      tasks: [
        {
          id: "sop-drafting",
          title: "SOP Drafting",
        },
        {
          id: "sop-formatting",
          title: "SOP Formatting",
        },
        {
          id: "process-mapping",
          title: "Process Mapping",
        },
        {
          id: "workflow-documentation",
          title: "Workflow Documentation",
        },
        {
          id: "checklist-creation",
          title: "Checklist Creation",
        },
        {
          id: "internal-procedure-organization",
          title: "Internal Procedure Organization",
        },
        {
          id: "operations-manual-support",
          title: "Operations Manual Support",
        },
        {
          id: "template-creation",
          title: "Template Creation",
        },
      ],

      question: {
        title: "How many processes/departments need documenting?",
        type: "select",
        options: [
          "Please select",
          "1-3 processes",
          "4-10 processes",
          "10-20 processes",
          "20+ / company-wide",
        ],
      },
    },

    {
      id: "hr-administration-support",
      title: "HR Administration Support",
      description: "Hiring, onboarding, and employee record-keeping",

      tasks: [
        {
          id: "recruitment-coordination",
          title: "Recruitment Coordination",
        },
        {
          id: "job-posting-support",
          title: "Job Posting Support",
        },
        {
          id: "candidate-screening-coordination",
          title: "Candidate Screening Coordination",
        },
        {
          id: "interview-scheduling",
          title: "Interview Scheduling",
        },
        {
          id: "employee-onboarding-administration",
          title: "Employee Onboarding Administration",
        },
        {
          id: "employee-records-organization",
          title: "Employee Records Organization",
        },
        {
          id: "attendance-leave-tracking",
          title: "Attendance & Leave Tracking",
        },
        {
          id: "training-coordination",
          title: "Training Coordination",
        },
        {
          id: "performance-review-admin-support",
          title: "Performance Review Admin Support",
        },
      ],

      question: {
        title: "How many employees/hires will this cover?",
        type: "select",
        options: [
          "Please select",
          "1-5 people",
          "6-20 people",
          "21-50 people",
          "50+ people",
        ],
      },
    },

    {
      id: "client-support-administration",
      title: "Client Support Administration",
      description: "Organizing customer requests, tickets, and onboarding",

      tasks: [
        {
          id: "helpdesk-ticket-organization",
          title: "Helpdesk Ticket Organization",
        },
        {
          id: "customer-inquiry-routing",
          title: "Customer Inquiry Routing",
        },
        {
          id: "client-onboarding-coordination",
          title: "Client Onboarding Coordination",
        },
        {
          id: "client-records-management",
          title: "Client Records Management",
        },
        {
          id: "service-request-tracking",
          title: "Service Request Tracking",
        },
        {
          id: "status-update-coordination",
          title: "Status Update Coordination",
        },
      ],

      question: {
        title: "How many active clients/customers?",
        type: "select",
        options: [
          "Please select",
          "Fewer than 20",
          "20-100",
          "100-500",
          "500+",
        ],
      },
    },

    {
      id: "not-sure-yet",
      title: "Not Sure Yet",

      description:
        "Not sure which service fits? Tell us about your business goals and challenges, and we'll recommend the best solution.",

      isNotSure: true,

      placeholder:
        "Describe your business, current challenges, or the type of support you're looking for...",

      allowVoice: true,

      allowFileUpload: false,

      allowAiSuggestion: true,
    },
  ],
  // secondQuestion: {
  //   title: "Do you have dedicated ops/admin staff?",
  //   options: [
  //     {
  //       id: "dedicated",
  //       title: "Yes, we have a dedicated team",
  //     },
  //     {
  //       id: "part-time",
  //       title: "Yes, part-time",
  //     },
  //     {
  //       id: "partial",
  //       title: "Partially",
  //     },
  //     {
  //       id: "adhoc",
  //       title: "No, we handle ad hoc",
  //     },
  //     {
  //       id: "none",
  //       title: "No staff at all",
  //     },
  //   ],
  // },
};
