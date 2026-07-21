import { ServiceDefinition } from "@/types/choose-services";
import { strategicOperations } from "./strategic-operations";
import { targetedSales } from "./targeted-sales";
import { accountingLegal } from "./accounting-legal";
import { focusedMarketing } from "./focused-marketing";
import { futureExpansion } from "./future-expansion";

export const SERVICE_MAP: Record<string, ServiceDefinition> = {
  "strategic-operations": strategicOperations,
  "targeted-sales": targetedSales,
  "accounting-legal": accountingLegal,

  "focused-marketing": focusedMarketing,

  "future-expansion": futureExpansion,
};
