import Careers from "@/components/Careers";
import { jobs } from "@/data/jobs";

export default async function CareersPage() {
  return <Careers jobs={jobs} />;
}
