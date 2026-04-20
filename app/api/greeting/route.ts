export async function GET() {
  try {
    const res = await fetch("http://localhost:5678/webhook/greeting");

    const data = await res.json();

    return Response.json({
      reply: data.reply,
    });
  } catch (err) {
    return Response.json({
      reply: "Hi 👋 How can we help you today?",
    });
  }
}
