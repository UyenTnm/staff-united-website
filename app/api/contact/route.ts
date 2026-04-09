export async function POST(req: Request) {
  const formData = await req.formData();
  const data = Object.fromEntries(formData.entries());

  console.log("📩 New Contact:", data);

  return Response.json({ success: true });
}
