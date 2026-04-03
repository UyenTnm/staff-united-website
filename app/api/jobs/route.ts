import { jobs } from "@/data/jobs";

export async function GET() {
  return Response.json(jobs);
}
