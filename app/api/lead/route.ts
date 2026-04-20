// type Lead = {
//   id: string;
//   email?: string;
//   service?: string;
//   timeline?: string;
//   status?: "partial" | "complete";
//   createdAt: number;
// };

// export async function POST(req: Request) {
//   const body = await req.json();

//   const lead: Lead = {
//     id: body.id || crypto.randomUUID(),
//     email: body.email || "",
//     service: body.service || "",
//     timeline: body.timeline || "",
//     status: body.email ? "complete" : "partial",
//     createdAt: Date.now(),
//   };

//   const summary = `Need: ${lead.service} | Timeline: ${lead.timeline}`;

//   const GOOGLE_SCRIPT_URL =
//     "https://script.google.com/macros/s/AKfycbyQvx7VerY6uK7FOUiCZtPOCC5E0HJBtiYRhIFOCjyOHjusSh7ZeuFEgn0siraX4l_w/exec";

//   await fetch(GOOGLE_SCRIPT_URL, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       email: lead.email,
//       service: lead.service,
//       timeline: lead.timeline,
//       status: lead.status,
//       summary,
//     }),
//   });

//   return Response.json({ ok: true });
// }

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
