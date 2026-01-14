
export async function sendChat(message: string) {
  const res = await fetch("https://n8n.shahbaz.online/webhook/motor-khan-chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message })
  });

  if (!res.ok) throw new Error("Chat failed");
  const text = await res.text();
  // The webhook might return a string directly instead of JSON
  try {
    return JSON.parse(text);
  } catch (e) {
    // If it's not JSON, it might be a plain text reply.
    return { reply: text };
  }
}
