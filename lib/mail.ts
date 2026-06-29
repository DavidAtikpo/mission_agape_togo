import nodemailer from 'nodemailer'
import type { Transporter } from 'nodemailer'

type SendMailOptions = {
  to: string
  subject: string
  text: string
  html: string
}

let transporter: Transporter | null = null

function getSmtpConfig() {
  const host = process.env.SMTP_HOST?.trim()
  const user = process.env.SMTP_USER?.trim()
  const pass = process.env.SMTP_PASS?.trim()
  const port = Number(process.env.SMTP_PORT ?? '587')
  const secure = process.env.SMTP_SECURE === 'true' || port === 465

  if (!host || !user || !pass) return null

  return { host, port, secure, user, pass }
}

function getTransporter(): Transporter | null {
  if (transporter) return transporter
  const config = getSmtpConfig()
  if (!config) return null

  transporter = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    auth: {
      user: config.user,
      pass: config.pass,
    },
  })
  return transporter
}

export function isMailConfigured(): boolean {
  return getSmtpConfig() !== null
}

export function getMailFromAddress(): string {
  return process.env.SMTP_FROM?.trim() || process.env.SMTP_USER?.trim() || 'noreply@missionagape-tg.com'
}

export function getAdminNotifyEmail(): string {
  return (
    process.env.ADMIN_NOTIFY_EMAIL?.trim() ||
    process.env.SMTP_USER?.trim() ||
    'agapemission2014@mail.com'
  )
}

export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim()
  if (explicit) return explicit.replace(/\/$/, '')
  const vercel = process.env.VERCEL_URL?.trim()
  if (vercel) return `https://${vercel.replace(/^https?:\/\//, '')}`
  return 'http://localhost:3000'
}

export async function sendMail(options: SendMailOptions): Promise<void> {
  const transport = getTransporter()
  if (!transport) {
    throw new Error('SMTP non configuré (SMTP_HOST, SMTP_USER, SMTP_PASS).')
  }

  await transport.sendMail({
    from: `"Mission Agapé Togo" <${getMailFromAddress()}>`,
    to: options.to,
    subject: options.subject,
    text: options.text,
    html: options.html,
  })
}
