-- CreateTable
CREATE TABLE "missionagape"."Participant" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Participant_pkey" PRIMARY KEY ("id")
);

-- AlterTable
ALTER TABLE "missionagape"."Inscription" ADD COLUMN "participantId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Participant_email_key" ON "missionagape"."Participant"("email");

-- CreateIndex
CREATE INDEX "Inscription_participantId_idx" ON "missionagape"."Inscription"("participantId");

-- AddForeignKey
ALTER TABLE "missionagape"."Inscription" ADD CONSTRAINT "Inscription_participantId_fkey" FOREIGN KEY ("participantId") REFERENCES "missionagape"."Participant"("id") ON DELETE SET NULL ON UPDATE CASCADE;
