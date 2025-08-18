// app/api/contact/route.js
import nodemailer from "nodemailer";

export const runtime = "nodejs";        // Edge değil, Node runtime
export const dynamic = "force-dynamic"; // (SSR cache olmasın)

function escapeHtml(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(req) {
  try {
    const { name = "", email = "", phone = "", message = "" } = await req.json();

    if (!name.trim() || !email.trim() || !message.trim()) {
      return Response.json({ ok: false, error: "Zorunlu alanlar eksik." }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const from = process.env.SMTP_FROM || process.env.SMTP_USER;
    const to   = process.env.SMTP_TO   || process.env.SMTP_USER;

    const subject = `Yeni iletişim formu: ${name}`;
    const html = `
      <div style="font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto;">
        <h2 style="margin:0 0 12px">İletişim Formu</h2>
        <p><b>Ad:</b> ${escapeHtml(name)}</p>
        <p><b>E-posta:</b> ${escapeHtml(email)}</p>
        <p><b>Telefon:</b> ${escapeHtml(phone)}</p>
        <p><b>Mesaj:</b><br/>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
      </div>
    `;

    await transporter.sendMail({
      from: `Biri Teknoloji Form <${from}>`,
      to,
      replyTo: email,     // “Yanıtla” deyince gönderene gitsin
      subject,
      html,
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error("MAIL ERROR:", err);
    return Response.json({ ok: false, error: "Mail gönderilemedi." }, { status: 500 });
  }
}