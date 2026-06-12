import Careers from "@/components/Careers";
import { jobs } from "@/data/jobs";
import { getJobs } from "@/lib/sanity";

export default async function CareersPage() {
  // const jobs = await getJobs();
  return <Careers jobs={jobs} />;
}
