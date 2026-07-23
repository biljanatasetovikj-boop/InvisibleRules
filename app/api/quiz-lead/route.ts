export async function POST(request: Request) {
  try {
    const { email, score, band, topFrictions } = await request.json();

    // Only the email is required. Score/band/frictions ride along for context
    // but a lead is still a lead if they're somehow missing.
    if (!email || typeof email !== "string" || !email.includes("@")) {
      return new Response(
        JSON.stringify({ error: "A valid email is required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const upstream = await fetch(
      "https://formsubmit.co/ajax/biljanatasetovikj@gmail.com",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email,
          quiz_score: score ?? "",
          band: band ?? "",
          top_frictions: topFrictions ?? "",
          _subject: "New quiz lead - Invisible Rules",
          _template: "table",
          _captcha: "false",
        }),
      }
    );

    if (!upstream.ok) {
      return new Response(
        JSON.stringify({ error: "Upstream service failed" }),
        { status: 502, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch {
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
