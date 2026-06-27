import { cookies } from 'next/headers'
import {
  PARTICIPANT_SESSION_COOKIE,
  verifyParticipantSessionToken,
} from '@/lib/participant-session'

export async function getParticipantId(): Promise<string | null> {
  const token = (await cookies()).get(PARTICIPANT_SESSION_COOKIE)?.value
  return verifyParticipantSessionToken(token)
}

export async function getParticipantSessionValid(): Promise<boolean> {
  return (await getParticipantId()) !== null
}
