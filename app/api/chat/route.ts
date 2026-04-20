export async function POST(req: Request) {
  try {
    const body = await req.json();
    const message = body.message;

    // 🧠 1. Nếu không có message → gọi greeting
    if (!message || message.trim() === "") {
      const res = await fetch("https://YOUR-NGROK/webhook/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      });

      const data = await res.json();

      return Response.json({
        reply: data.reply,
      });
    }

    // 💬 2. Có message → gọi chat bình thường
    const res = await fetch(
      "https://unstylized-noninflammatory-jerrod.ngrok-free.dev/webhook/chat",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
        }),
      },
    );

    const data = await res.json();

    return Response.json({
      reply: data.reply,
    });
  } catch (error: any) {
    console.error("API ERROR:", error);

    return Response.json(
      {
        reply: "Something went wrong 😅",
      },
      { status: 500 },
    );
  }
}
