import { ServiceDefinition } from "@/types/choose-services";

export const accountingLegal: ServiceDefinition = {
  id: "accounting-legal",

  title: "Accounting & Legal",

  subtitle: "Bookkeeping, compliance & admin",

  question: "Which support areas?",

  categories: [
    {
      id: "bookkeeping-support",
      title: "Bookkeeping Support",
      description: "Recording and organizing your day-to-day transactions",

      tasks: [
        {
          id: "transaction-categorization",
          title: "Transaction Categorization",
        },
        { id: "bank-reconciliation", title: "Bank Reconciliation" },
        {
          id: "credit-card-reconciliation",
          title: "Credit Card Reconciliation",
        },
        { id: "accounts-payable-support", title: "Accounts Payable Support" },
        {
          id: "accounts-receivable-support",
          title: "Accounts Receivable Support",
        },
        { id: "invoice-entry", title: "Invoice Entry" },
        { id: "receipt-organization", title: "Receipt Organization" },
        { id: "expense-tracking", title: "Expense Tracking" },
        { id: "vendor-records", title: "Vendor Records" },
        { id: "customer-records", title: "Customer Records" },
        {
          id: "month-end-bookkeeping-support",
          title: "Month-end Bookkeeping Support",
        },
      ],

      question: {
        title: "Transactions processed per month (approx.)",
        type: "select",
        options: ["Fewer than 50", "50-150", "150-500", "500-1,500", "1,500+"],
      },
    },
    {
      id: "billing-payment-administration",
      title: "Billing & Payment Administration",
      description: "Sending invoices and tracking who has paid",

      tasks: [
        { id: "invoice-preparation", title: "Invoice Preparation" },
        { id: "payment-tracking", title: "Payment Tracking" },
        {
          id: "past-due-invoice-follow-up",
          title: "Past-due Invoice Follow-up",
        },
        { id: "vendor-bill-organization", title: "Vendor Bill Organization" },
        { id: "payment-schedule-tracking", title: "Payment Schedule Tracking" },
        { id: "subscription-tracking", title: "Subscription Tracking" },
        {
          id: "expense-approval-workflow-support",
          title: "Expense Approval Workflow Support",
        },
      ],

      question: {
        title: "Invoices sent to clients per month",
        type: "select",
        options: ["Fewer than 10", "10-30", "30-75", "75-200", "200+"],
      },
    },
    {
      id: "financial-reporting-support",
      title: "Financial Reporting Support",
      description: "Turning your numbers into reports you can act on",

      tasks: [
        { id: "monthly-financial-report", title: "Monthly Financial Report" },
        { id: "profit-loss-report", title: "Profit & Loss Report" },
        { id: "balance-sheet", title: "Balance Sheet" },
        { id: "cash-flow-report", title: "Cash Flow Report" },
        {
          id: "budget-vs-actual-tracking",
          title: "Budget vs. Actual Tracking",
        },
        {
          id: "management-reporting-packages",
          title: "Management Reporting Packages",
        },
        { id: "kpi-reporting", title: "KPI Reporting" },
        {
          id: "financial-dashboard-support",
          title: "Financial Dashboard Support",
        },
      ],

      question: {
        title: "Who receives these reports?",
        type: "select",
        options: [
          "Just the owner/founder",
          "Leadership/management team",
          "Board of directors",
          "Investors/lenders",
          "External accountant/CPA",
        ],
      },
    },
    {
      id: "payroll-administration-support",
      title: "Payroll Administration Support",
      description: "Preparing pay, timesheets, and contractor payments",

      tasks: [
        {
          id: "payroll-data-preparation",
          title: "Pre-Payroll Data Prep (Hours, Rates, Changes)",
        },
        { id: "timesheet-collection", title: "Timesheet Collection" },
        {
          id: "contractor-payment-records",
          title: "Contractor Payment Tracking",
        },
        {
          id: "commission-tracking-support",
          title: "Commission Tracking Support",
        },
        {
          id: "payroll-report-organization",
          title: "Post-Payroll Report Filing & Organization",
        },
        {
          id: "employee-reimbursement-tracking",
          title: "Employee Reimbursement Tracking",
        },
      ],

      question: {
        title: "Employees/contractors needing payroll support",
        type: "select",
        options: ["1-5", "6-15", "16-30", "31-75", "75+"],
      },
    },
    {
      id: "tax-support",
      title: "Tax Support",
      description: "Getting your documents organized and ready for tax season",

      tasks: [
        { id: "tax-document-organization", title: "Tax Document Organization" },
        { id: "tax-ready-bookkeeping", title: "Tax-ready Bookkeeping" },
        { id: "sales-tax-data-support", title: "Sales Tax Data Support" },
        {
          id: "1099-w9-collection-support",
          title: "1099/W-9 Collection Support",
        },
        { id: "tax-workpaper-preparation", title: "Tax Workpaper Preparation" },
        {
          id: "rd-tax-credit-documentation-support",
          title: "R&D Tax Credit Documentation Support",
        },
        {
          id: "payroll-tax-support-document-prep",
          title: "Payroll Tax Support Document Prep",
        },
      ],
    },
    {
      id: "legal-document-management",
      title: "Legal Document Management",
      description:
        "Keeping contracts and legal files organized and easy to find",

      tasks: [
        {
          id: "legal-document-organization",
          title: "Legal Document Organization",
        },
        { id: "contract-file-management", title: "Contract File Management" },
        {
          id: "document-naming-and-indexing",
          title: "Document Naming and Indexing",
        },
        { id: "deadline-tracking", title: "Deadline Tracking" },
        { id: "signature-tracking", title: "Signature Tracking" },
        { id: "renewal-date-tracking", title: "Renewal Date Tracking" },
        { id: "version-control", title: "Version Control" },
      ],

      question: {
        title: "How many legal/contract documents need organizing?",
        type: "select",
        options: ["Fewer than 20", "20-75", "75-200", "200-500", "500+"],
      },
    },
    {
      id: "contract-administration-support",
      title: "Contract Administration Support",
      description:
        "Tracking key terms, renewals, and deadlines in your contracts",

      tasks: [
        { id: "contract-intake-support", title: "Contract Intake Support" },
        {
          id: "contract-summary-preparation",
          title: "Contract Summary Preparation",
        },
        { id: "key-term-extraction", title: "Key Term Extraction" },
        { id: "obligation-tracking", title: "Obligation Tracking" },
        { id: "renewal-reminder-tracking", title: "Renewal Reminder Tracking" },
        {
          id: "client-vendor-contract-organization",
          title: "Client and Vendor Contract Organization",
        },
      ],

      question: {
        title: "Active contracts managed (client and/or vendor)",
        type: "select",
        options: ["Fewer than 10", "10-30", "30-75", "75-150", "150+"],
      },
    },
    {
      id: "audit-review-preparation-support",
      title: "Audit & Review Preparation Support",
      description: "Getting your documents ready for an accountant or auditor",

      tasks: [
        { id: "audit-readiness-support", title: "Audit Readiness Support" },
        {
          id: "review-preparation-support",
          title: "Review Preparation Support",
        },
        { id: "pbc-package-organization", title: "PBC Package Organization" },
        {
          id: "supporting-document-collection",
          title: "Supporting Document Collection",
        },
        { id: "reconciliation-schedules", title: "Reconciliation Schedules" },
        { id: "variance-analysis-support", title: "Variance Analysis Support" },
        {
          id: "financial-cleanup-before-audit-review",
          title: "Financial Cleanup Before Audit/Review",
        },
        {
          id: "external-auditor-coordination-support",
          title: "External Auditor Coordination Support",
        },
      ],

      question: {
        title: "Upcoming audit, review, or examination?",
        type: "select",
        options: [
          "Yes — date confirmed",
          "Yes — likely within 6 months",
          "No — but want to be prepared",
          "Not sure",
        ],
      },
    },
    {
      id: "compliance-administration",
      title: "Compliance Administration",
      description: "Tracking licenses, permits, and regulatory requirements",

      tasks: [
        {
          id: "compliance-checklist-support",
          title: "Compliance Checklist Support",
        },
        {
          id: "license-and-permit-tracking",
          title: "License and Permit Tracking",
        },
        {
          id: "corporate-records-organization",
          title: "Corporate Records Organization",
        },
        {
          id: "policy-document-organization",
          title: "Policy Document Organization",
        },
        {
          id: "vendor-compliance-document-tracking",
          title: "Vendor Compliance Document Tracking",
        },
        {
          id: "internal-compliance-calendar-support",
          title: "Internal Compliance Calendar Support",
        },
      ],

      question: {
        title: "Regulatory frameworks that apply (e.g. HIPAA, SOC 2, GDPR)",
        type: "text",
      },
    },

    {
      id: "legal-operations-support",
      title: "Legal Operations Support",
      description: "Day-to-day support for your legal team or outside counsel",

      tasks: [
        { id: "legal-task-tracking", title: "Legal Task Tracking" },
        {
          id: "matter-file-organization",
          title: "Legal Matter/Case File Organization",
        },
        {
          id: "evidence-and-document-collection-support",
          title: "Legal Evidence & Discovery Document Collection",
        },
        { id: "legal-billing-support", title: "Legal Billing Support" },
        {
          id: "outside-counsel-coordination-support",
          title: "Outside Counsel Coordination Support",
        },
        {
          id: "board-corporate-document-preparation",
          title: "Board/Corporate Document Drafting",
        },
      ],

      question: {
        title: "Do you work with outside legal counsel?",
        type: "select",
        options: [
          "Yes — regularly",
          "Yes — occasionally",
          "No — handle internally",
          "No — but may need to",
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
};
