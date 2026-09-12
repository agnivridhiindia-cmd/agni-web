import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { contactFormSchema } from "@/lib/validations/contact-form";
import { getAllServices } from "@/data/services";
import { siteConfig } from "@/lib/site-config";

/**
 * POST /api/contact
 *
 * Receives inbound advisory inquiries from the public contact form and
 * delivers them directly as an email to the company's inbox (info@agnivridhiindia.com).
 *
 * Supported delivery channels:
 * 1. SMTP (via Nodemailer) — Works with Gmail, Google Workspace, Hostinger, Zoho, cPanel, etc.
 *    Requires: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS in .env.local
 * 2. Resend API — Works with Resend HTTP API
 *    Requires: RESEND_API_KEY, CONTACT_FROM_EMAIL in .env.local
 * 3. Fallback Simulation — Logs the full lead details to server console if credentials
 *    are not yet configured, preventing loss of lead data.
 */

// --- Lightweight in-memory rate limiting (per server instance) ---
const submissionLog = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const RATE_LIMIT_MAX_REQUESTS = 6;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (submissionLog.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );
  timestamps.push(now);
  submissionLog.set(ip, timestamps);
  return timestamps.length > RATE_LIMIT_MAX_REQUESTS;
}

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function formatISTDate(): string {
  return new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "full",
    timeStyle: "medium",
  }).format(new Date());
}

function buildEmailHtml(params: {
  name: string;
  email: string;
  phone: string;
  company?: string;
  serviceName: string;
  message: string;
  referenceCode: string;
  submittedAt: string;
}): string {
  const cleanPhone = params.phone.replace(/[^0-9+]/g, "");
  const companyDisplay = params.company?.trim() || "Not specified";

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Advisory Lead - ${escapeHtml(params.referenceCode)}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #0F172A; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1E293B;">
  <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #0F172A; padding: 30px 15px;">
    <tr>
      <td align="center">
        <!-- Main Container -->
        <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 620px; background-color: #FFFFFF; border-radius: 18px; overflow: hidden; box-shadow: 0 20px 45px rgba(0,0,0,0.35); border: 1px solid #CBD5E1;">
          
          <!-- Header Banner -->
          <tr>
            <td style="background: linear-gradient(135deg, #10162A 0%, #1A243F 50%, #0E1424 100%); padding: 32px 36px 28px 36px; border-bottom: 3px solid #F59E0B;">
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td>
                    <div style="font-family: monospace; font-size: 11px; font-weight: 700; color: #F59E0B; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 8px;">
                      ✦ INBOUND ADVISORY MANDATE ✦
                    </div>
                    <h1 style="margin: 0; color: #FFFFFF; font-size: 24px; font-weight: 700; letter-spacing: -0.5px; line-height: 1.3;">
                      Agnivridhi India • New Client Lead
                    </h1>
                    <p style="margin: 6px 0 0 0; color: #94A3B8; font-size: 13px;">
                      Received on ${escapeHtml(params.submittedAt)}
                    </p>
                  </td>
                  <td align="right" valign="top">
                    <div style="background-color: rgba(245, 158, 11, 0.15); border: 1px solid rgba(245, 158, 11, 0.4); border-radius: 8px; padding: 6px 12px; font-family: monospace; font-size: 12px; font-weight: 700; color: #FBBF24;">
                      ${escapeHtml(params.referenceCode)}
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Summary Highlights -->
          <tr>
            <td style="padding: 28px 36px 12px 36px;">
              <div style="background-color: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 12px; padding: 18px 22px; margin-bottom: 24px;">
                <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                    <td width="50%" valign="top" style="padding-bottom: 12px;">
                      <div style="font-size: 11px; font-family: monospace; text-transform: uppercase; color: #64748B; font-weight: 600; letter-spacing: 0.5px;">Client Name</div>
                      <div style="font-size: 16px; font-weight: 700; color: #0F172A; margin-top: 2px;">${escapeHtml(params.name)}</div>
                    </td>
                    <td width="50%" valign="top" style="padding-bottom: 12px;">
                      <div style="font-size: 11px; font-family: monospace; text-transform: uppercase; color: #64748B; font-weight: 600; letter-spacing: 0.5px;">Advisory Desk</div>
                      <div style="font-size: 14px; font-weight: 700; color: #B45309; margin-top: 2px;">${escapeHtml(params.serviceName)}</div>
                    </td>
                  </tr>
                  <tr>
                    <td width="50%" valign="top">
                      <div style="font-size: 11px; font-family: monospace; text-transform: uppercase; color: #64748B; font-weight: 600; letter-spacing: 0.5px;">Mobile Phone</div>
                      <div style="font-size: 14px; font-weight: 600; color: #0284C7; margin-top: 2px;">
                        <a href="tel:${cleanPhone}" style="color: #0284C7; text-decoration: none;">${escapeHtml(params.phone)}</a>
                      </div>
                    </td>
                    <td width="50%" valign="top">
                      <div style="font-size: 11px; font-family: monospace; text-transform: uppercase; color: #64748B; font-weight: 600; letter-spacing: 0.5px;">Corporate Email</div>
                      <div style="font-size: 14px; font-weight: 600; color: #0284C7; margin-top: 2px;">
                        <a href="mailto:${escapeHtml(params.email)}" style="color: #0284C7; text-decoration: none;">${escapeHtml(params.email)}</a>
                      </div>
                    </td>
                  </tr>
                </table>
              </div>

              <!-- Full Parameter Table -->
              <h3 style="margin: 0 0 12px 0; font-size: 14px; font-family: monospace; text-transform: uppercase; letter-spacing: 1px; color: #0F172A;">
                Mandate Specifications
              </h3>
              
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="border: 1px solid #E2E8F0; border-radius: 10px; overflow: hidden; margin-bottom: 24px;">
                <tr style="background-color: #FFFFFF;">
                  <td width="35%" style="padding: 12px 16px; font-size: 12px; font-weight: 600; color: #64748B; border-bottom: 1px solid #F1F5F9;">Enterprise / Legal Entity</td>
                  <td width="65%" style="padding: 12px 16px; font-size: 13px; font-weight: 600; color: #0F172A; border-bottom: 1px solid #F1F5F9;">${escapeHtml(companyDisplay)}</td>
                </tr>
                <tr style="background-color: #F8FAFC;">
                  <td width="35%" style="padding: 12px 16px; font-size: 12px; font-weight: 600; color: #64748B; border-bottom: 1px solid #F1F5F9;">Primary Desk Selected</td>
                  <td width="65%" style="padding: 12px 16px; font-size: 13px; font-weight: 600; color: #0F172A; border-bottom: 1px solid #F1F5F9;">${escapeHtml(params.serviceName)}</td>
                </tr>
                <tr style="background-color: #FFFFFF;">
                  <td width="35%" style="padding: 12px 16px; font-size: 12px; font-weight: 600; color: #64748B; border-bottom: 1px solid #F1F5F9;">Tracking Reference</td>
                  <td width="65%" style="padding: 12px 16px; font-size: 12px; font-family: monospace; font-weight: 700; color: #B45309; border-bottom: 1px solid #F1F5F9;">${escapeHtml(params.referenceCode)}</td>
                </tr>
                <tr style="background-color: #F8FAFC;">
                  <td width="35%" style="padding: 12px 16px; font-size: 12px; font-weight: 600; color: #64748B;">Portal Origin</td>
                  <td width="65%" style="padding: 12px 16px; font-size: 12px; color: #0F172A;">Official Website Consultation Form</td>
                </tr>
              </table>

              <!-- Message / Scope Section -->
              <h3 style="margin: 0 0 10px 0; font-size: 14px; font-family: monospace; text-transform: uppercase; letter-spacing: 1px; color: #0F172A;">
                Capex Objective / Scope Summary
              </h3>
              <div style="background-color: #FFFBEB; border-left: 4px solid #F59E0B; border-radius: 0 8px 8px 0; padding: 16px 20px; font-size: 14px; line-height: 1.6; color: #78350F; margin-bottom: 28px;">
                ${escapeHtml(params.message).replace(/\n/g, "<br/>")}
              </div>

              <!-- Quick Action Response Buttons -->
              <table role="presentation" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 24px;">
                <tr>
                  <td style="border-radius: 8px; background: #F59E0B; text-align: center;">
                    <a href="mailto:${escapeHtml(params.email)}?subject=Re:%20Agnivridhi%20Inquiry%20%5B${escapeHtml(params.referenceCode)}%5D" 
                       style="background: #F59E0B; border: 1px solid #D97706; font-family: sans-serif; font-size: 13px; font-weight: 700; color: #1E293B; text-decoration: none; padding: 12px 22px; border-radius: 8px; display: inline-block;">
                      ✉ Reply Directly to ${escapeHtml(params.name.split(" ")[0] || "Client")}
                    </a>
                  </td>
                  <td width="12"></td>
                  <td style="border-radius: 8px; background: #F1F5F9; text-align: center;">
                    <a href="tel:${cleanPhone}" 
                       style="background: #F1F5F9; border: 1px solid #CBD5E1; font-family: sans-serif; font-size: 13px; font-weight: 600; color: #0F172A; text-decoration: none; padding: 12px 20px; border-radius: 8px; display: inline-block;">
                      ✆ Call ${escapeHtml(cleanPhone)}
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #F8FAFC; border-top: 1px solid #E2E8F0; padding: 22px 36px; text-align: center;">
              <p style="margin: 0; font-size: 12px; font-weight: 600; color: #475569;">
                Agnivridhi India • Institutional Advisory Desk
              </p>
              <p style="margin: 4px 0 0 0; font-size: 11px; color: #94A3B8;">
                B-750, Tower-B, IThum, Sector 62, Noida, Uttar Pradesh 201301 | <a href="https://agnivridhiindia.com" style="color: #0284C7; text-decoration: none;">agnivridhiindia.com</a>
              </p>
              <p style="margin: 8px 0 0 0; font-size: 10px; font-family: monospace; color: #94A3B8;">
                Automated confidential lead notification • Bilateral NDA standard
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

function buildEmailText(params: {
  name: string;
  email: string;
  phone: string;
  company?: string;
  serviceName: string;
  message: string;
  referenceCode: string;
  submittedAt: string;
}): string {
  return `
============================================================
AGNIVRIDHI INDIA • NEW INBOUND ADVISORY LEAD
============================================================
Reference Code: ${params.referenceCode}
Received At:    ${params.submittedAt}

CLIENT DETAILS:
- Full Name:           ${params.name}
- Corporate Email:     ${params.email}
- Mobile Phone:        ${params.phone}
- Enterprise Entity:   ${params.company || "Not specified"}
- Advisory Desk:       ${params.serviceName}

CAPEX OBJECTIVE / SCOPE SUMMARY:
${params.message}

============================================================
To reply to this lead, reply directly to this email (${params.email})
or call ${params.phone}.
============================================================
`.trim();
}

async function deliverInquiryEmail(params: {
  name: string;
  email: string;
  phone: string;
  company?: string;
  serviceName: string;
  message: string;
  referenceCode: string;
  submittedAt: string;
}): Promise<{ delivered: boolean; provider: "smtp" | "resend" | "simulated"; error?: string }> {
  const toEmail = process.env.CONTACT_TO_EMAIL || siteConfig.contact.email || "info@agnivridhiindia.com";
  const subject = `[New Advisory Lead - ${params.referenceCode}] ${params.name} • ${params.serviceName}`;
  const htmlContent = buildEmailHtml(params);
  const textContent = buildEmailText(params);

  // -------------------------------------------------------------
  // Provider 1: Standard SMTP via Nodemailer (Gmail, Zoho, cPanel, etc.)
  // -------------------------------------------------------------
  if (process.env.SMTP_USER && process.env.SMTP_PASS) {
    try {
      const isGmail =
        !process.env.SMTP_HOST ||
        process.env.SMTP_HOST.toLowerCase().includes("gmail");
      const cleanPass = process.env.SMTP_PASS.replace(/\s+/g, "");

      const transporter = isGmail
        ? nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: process.env.SMTP_USER,
              pass: cleanPass,
            },
          })
        : nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT || 465),
            secure:
              process.env.SMTP_SECURE === "true" ||
              Number(process.env.SMTP_PORT || 465) === 465,
            auth: {
              user: process.env.SMTP_USER,
              pass: cleanPass,
            },
          });

      const fromAddress =
        process.env.CONTACT_FROM_EMAIL ||
        `"Agnivridhi Advisory Portal" <${process.env.SMTP_USER}>`;

      await transporter.sendMail({
        from: fromAddress,
        to: toEmail,
        replyTo: `"${params.name}" <${params.email}>`,
        subject,
        text: textContent,
        html: htmlContent,
      });

      console.log(`[contact-api] Email delivered successfully to ${toEmail} via SMTP.`);
      return { delivered: true, provider: "smtp" };
    } catch (smtpErr) {
      console.error("[contact-api] SMTP dispatch failed:", smtpErr);
    }
  }

  // -------------------------------------------------------------
  // Provider 2: Resend API (HTTP-based delivery)
  // -------------------------------------------------------------
  if (process.env.RESEND_API_KEY) {
    try {
      const fromEmail = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: fromEmail,
          to: toEmail,
          reply_to: params.email,
          subject,
          text: textContent,
          html: htmlContent,
        }),
      });

      if (!res.ok) {
        const errorBody = await res.text().catch(() => "");
        throw new Error(`Resend API error (${res.status}): ${errorBody}`);
      }

      console.log(`[contact-api] Email delivered successfully to ${toEmail} via Resend.`);
      return { delivered: true, provider: "resend" };
    } catch (resendErr) {
      console.error("[contact-api] Resend API dispatch failed:", resendErr);
    }
  }

  // -------------------------------------------------------------
  // Provider 3: Safe Fallback & Console Logging (Local / Unconfigured)
  // -------------------------------------------------------------
  console.log("\n=======================================================");
  console.log("📨 NEW INBOUND INQUIRY RECEIVED (SIMULATED EMAIL DISPATCH)");
  console.log(`Target Recipient (Company Mail): ${toEmail}`);
  console.log(`Reference Code:                  ${params.referenceCode}`);
  console.log(`Submitted At:                    ${params.submittedAt}`);
  console.log(`Full Name:                       ${params.name}`);
  console.log(`Corporate Email:                 ${params.email}`);
  console.log(`Mobile Phone:                    ${params.phone}`);
  console.log(`Company Legal Entity:            ${params.company || "Not specified"}`);
  console.log(`Advisory Practice Desk:          ${params.serviceName}`);
  console.log(`Scope Summary:\n${params.message}`);
  console.log("-------------------------------------------------------");
  console.log("ℹ️  To receive real emails in your inbox, set your SMTP or Resend credentials in .env.local.");
  console.log("   Example for Gmail / Google Workspace in .env.local:");
  console.log("   SMTP_HOST=smtp.gmail.com");
  console.log("   SMTP_PORT=465");
  console.log("   SMTP_USER=info@agnivridhiindia.com");
  console.log("   SMTP_PASS=your_16_digit_app_password");
  console.log("=======================================================\n");

  return { delivered: false, provider: "simulated" };
}

export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      req.headers.get("x-real-ip") ??
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again in a few minutes." },
        { status: 429 }
      );
    }

    const body = await req.json().catch(() => null);
    if (!body) {
      return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
    }

    // Honeypot field: real users never fill this (it's visually hidden in
    // the form). Bots that auto-fill every field will trip it.
    if (typeof body.website === "string" && body.website.trim() !== "") {
      return NextResponse.json({ success: true, referenceCode: makeReferenceCode() });
    }

    const parsed = contactFormSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validation failed.", issues: parsed.error.flatten().fieldErrors },
        { status: 422 }
      );
    }

    const data = parsed.data;
    const service = getAllServices().find((s) => s.slug === data.service);
    const serviceName = service?.name ?? data.service;
    const referenceCode = makeReferenceCode();
    const submittedAt = formatISTDate();

    const deliveryResult = await deliverInquiryEmail({
      name: data.name,
      email: data.email,
      phone: data.phone,
      company: data.company,
      serviceName,
      message: data.message,
      referenceCode,
      submittedAt,
    });

    return NextResponse.json({
      success: true,
      referenceCode,
      delivered: deliveryResult.delivered,
      provider: deliveryResult.provider,
    });
  } catch (error) {
    console.error("[contact-api] Failed to process submission:", error);
    return NextResponse.json(
      { error: "Something went wrong while submitting your inquiry. Please try again." },
      { status: 500 }
    );
  }
}

function makeReferenceCode(): string {
  return `AGNI-${Math.floor(100000 + Math.random() * 900000)}`;
}