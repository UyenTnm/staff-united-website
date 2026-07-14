export async function POST(req: Request) {
  try {
    const body = await req.json();

    const res = await fetch(process.env.NEXT_PUBLIC_APPSCRIPT_URL!, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error("API ERROR:", err);
    return Response.json({ success: false }, { status: 500 });
  }
}
