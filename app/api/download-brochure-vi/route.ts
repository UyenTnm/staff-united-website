import { readFile } from "fs/promises";
import { join } from "path";

export async function GET() {
  const filePath = join(
    process.cwd(),
    "public",
    "brochure",
    "staff-brochure-vi.pdf",
  );

  const file = await readFile(filePath);

  return new Response(file, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition":
        'attachment; filename="Staff-United-Brochure-VI.pdf"',
    },
  });
}
