import { strategicOperations } from "./strategic-operations";

import { ServiceDefinition } from "@/types/choose-services";

export const SERVICE_MAP: Record<string, ServiceDefinition> = {
  "strategic-operations": strategicOperations,
};
