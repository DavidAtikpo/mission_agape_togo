import { getAdminNotifyEmail, getSiteUrl, sendMail } from '@/lib/mail'

type InscriptionEmailData = {
  prenom: string
  nom: string
  email: string
  telephone: string
  formationSouhaitee?: string | null
  inscriptionId: string
  setupToken: string
}

function formatFormation(formation?: string | null): string {
  return formation?.trim() || 'Non précisée'
}

export async function sendInscriptionConfirmationToUser(data: InscriptionEmailData): Promise<void> {
  const siteUrl = getSiteUrl()
  const compteUrl = `${siteUrl}/inscription/compte?token=${encodeURIComponent(data.setupToken)}`
  const monCompteUrl = `${siteUrl}/connexion`

  const subject = 'Mission Agapé Togo — Inscription enregistrée'
  const text = [
    `Bonjour ${data.prenom} ${data.nom},`,
    '',
    'Votre inscription aux formations de la Mission Agapé Togo a bien été enregistrée.',
    '',
    `Formation souhaitée : ${formatFormation(data.formationSouhaitee)}`,
    '',
    'Pour suivre votre dossier en ligne, créez votre compte avec le lien ci-dessous :',
    compteUrl,
    '',
    'Une fois votre compte créé, connectez-vous ici :',
    monCompteUrl,
    '',
    'Nous examinerons votre dossier et vous contacterons si nécessaire.',
    '',
    'Mission Agapé Togo',
  ].join('\n')

  const html = `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#222;max-width:560px">
      <p>Bonjour <strong>${escapeHtml(data.prenom)} ${escapeHtml(data.nom)}</strong>,</p>
      <p>Votre inscription aux formations de la <strong>Mission Agapé Togo</strong> a bien été enregistrée.</p>
      <p><strong>Formation souhaitée :</strong> ${escapeHtml(formatFormation(data.formationSouhaitee))}</p>
      <p>Pour suivre votre dossier en ligne, créez votre compte :</p>
      <p><a href="${compteUrl}" style="display:inline-block;background:#b91c1c;color:#fff;padding:10px 16px;border-radius:6px;text-decoration:none;font-weight:bold">Créer mon compte</a></p>
      <p style="font-size:13px;color:#555">Ou copiez ce lien : <a href="${compteUrl}">${compteUrl}</a></p>
      <p>Après création du compte, connectez-vous sur <a href="${monCompteUrl}">${monCompteUrl}</a> pour consulter le statut de votre inscription.</p>
      <p style="margin-top:24px">Cordialement,<br/>Mission Agapé Togo</p>
    </div>
  `

  await sendMail({ to: data.email, subject, text, html })
}

export async function sendInscriptionNotificationToAdmin(data: InscriptionEmailData): Promise<void> {
  const siteUrl = getSiteUrl()
  const adminUrl = `${siteUrl}/admin/inscriptions/${data.inscriptionId}`

  const subject = `[Mission Agapé] Nouvelle inscription — ${data.prenom} ${data.nom}`
  const text = [
    'Une nouvelle inscription a été soumise sur le site.',
    '',
    `Nom : ${data.prenom} ${data.nom}`,
    `E-mail : ${data.email}`,
    `Téléphone : ${data.telephone}`,
    `Formation : ${formatFormation(data.formationSouhaitee)}`,
    '',
    `Voir le dossier : ${adminUrl}`,
  ].join('\n')

  const html = `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#222;max-width:560px">
      <h2 style="color:#b91c1c;margin:0 0 12px">Nouvelle inscription</h2>
      <p>Une nouvelle inscription a été soumise sur le site.</p>
      <ul>
        <li><strong>Nom :</strong> ${escapeHtml(data.prenom)} ${escapeHtml(data.nom)}</li>
        <li><strong>E-mail :</strong> <a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></li>
        <li><strong>Téléphone :</strong> ${escapeHtml(data.telephone)}</li>
        <li><strong>Formation :</strong> ${escapeHtml(formatFormation(data.formationSouhaitee))}</li>
      </ul>
      <p><a href="${adminUrl}" style="display:inline-block;background:#b91c1c;color:#fff;padding:10px 16px;border-radius:6px;text-decoration:none;font-weight:bold">Ouvrir dans l'admin</a></p>
    </div>
  `

  await sendMail({ to: getAdminNotifyEmail(), subject, text, html })
}

export async function sendAccountCreatedToUser(data: {
  prenom: string
  nom: string
  email: string
}): Promise<void> {
  const siteUrl = getSiteUrl()
  const monCompteUrl = `${siteUrl}/mon-compte`

  const subject = 'Mission Agapé Togo — Votre compte est prêt'
  const text = [
    `Bonjour ${data.prenom} ${data.nom},`,
    '',
    'Votre compte a été créé avec succès.',
    '',
    'Connectez-vous pour suivre le statut de votre inscription :',
    monCompteUrl,
    '',
    'Mission Agapé Togo',
  ].join('\n')

  const html = `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#222;max-width:560px">
      <p>Bonjour <strong>${escapeHtml(data.prenom)} ${escapeHtml(data.nom)}</strong>,</p>
      <p>Votre compte a été créé avec succès.</p>
      <p><a href="${monCompteUrl}" style="display:inline-block;background:#b91c1c;color:#fff;padding:10px 16px;border-radius:6px;text-decoration:none;font-weight:bold">Accéder à mon compte</a></p>
      <p style="margin-top:24px">Cordialement,<br/>Mission Agapé Togo</p>
    </div>
  `

  await sendMail({ to: data.email, subject, text, html })
}

export async function notifyInscriptionSubmitted(data: InscriptionEmailData): Promise<void> {
  await Promise.all([
    sendInscriptionConfirmationToUser(data),
    sendInscriptionNotificationToAdmin(data),
  ])
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}
