import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const payload = await request.json();

    const {
      name,
      phone,
      email,
      checkIn,
      checkOut,
      roomType,
      adults,
      children,
      childrenAges,
      specialRequest,
    } = payload;

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      return NextResponse.json(
        { success: false, error: "Telegram credentials are not configured on the server." },
        { status: 500 }
      );
    }

    // Helper to format YYYY-MM-DD to DD-MM-YYYY
    const formatDate = (dateStr: string) => {
      if (!dateStr) return "";
      const parts = dateStr.split("-");
      if (parts.length === 3) {
        return `${parts[2]}-${parts[1]}-${parts[0]}`;
      }
      return dateStr;
    };

    // Format date headers
    const submittedAt = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short",
    });

    const guestDetails = `${adults} Adults${children > 0 ? `, ${children} Children` : ""}`;
    const agesDetails = children > 0 ? `👶 *Children Ages:* ${childrenAges.join(", ")} years` : "";

  
    const message = [
      "✨ *CORBETT TREAT RESORT* ✨",
      "🌿 *New Reservation Inquiry* 🌿",
      "━━━━━━━━━━━━━━━━━━━━━━━━",
      "",
      "📋 *CUSTOMER DETAILS*",
      `👤 *Guest Name:* ${name}`,
      `📞 *Mobile:* ${phone}`,
      `✉️ *Email:* ${email}`,
      "",
      "🗓️ *STAY DETAILS*",
      `📅 *Check-In:* ${formatDate(checkIn)}`,
      `📅 *Check-Out:* ${formatDate(checkOut)}`,
      `🏨 *Room Type:* ${roomType}`,
      `👥 *Occupancy:* ${guestDetails}`,
      agesDetails ? agesDetails : null,
      "",
      specialRequest ? `💬 *SPECIAL REQUESTS / REMARKS*\n"${specialRequest}"` : null,
      specialRequest ? "" : null,
      "━━━━━━━━━━━━━━━━━━━━━━━━",
      `Status: 🟡 *Pending Follow-up*`,
      `Submitted at: ${submittedAt} (IST)`,
    ]
      .filter((line) => line !== null)
      .join("\n");

    const telegramUrl = `https://api.telegram.org/bot${token}/sendPhoto`;

    const response = await fetch(telegramUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        photo: "https://corbetttreatresort.com/assets/images/resort-logo.png",
        caption: message,
        parse_mode: "Markdown",
      }),
    });

    const data = await response.json();

    if (!response.ok || !data.ok) {
      console.error("Telegram API Error:", data);
      return NextResponse.json(
        { success: false, error: data.description || "Failed to send message via Telegram." },
        { status: response.status }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Booking API Exception:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Internal server error." },
      { status: 500 }
    );
  }
}
