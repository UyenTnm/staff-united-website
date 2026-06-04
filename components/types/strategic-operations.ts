export interface StrategicOperationsFormData {
  fullName: string;
  email: string;
  phone?: string;
  companyName: string;
  website?: string;

  industry: string;
  teamSize: string;
  operationsStaff: string;

  serviceAreas: string[];

  adminTasks?: string[];
  adminHours?: string;

  businessOpsTasks?: string[];

  sopStatus?: string;
  sopTasks?: string[];
  processCount?: string;

  hrTasks?: string[];
  employeeCount?: string;
  hiringStatus?: string;

  clientSupportTasks?: string[];
  activeClients?: string;

  tools?: string;
  newToolsPreference?: string;

  engagementType?: string;
  startTimeline?: string;

  outcome?: string;
  challenge?: string;
  additionalNotes?: string;
}
