-- CreateTable
CREATE TABLE "Inscription" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "email" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "prenom" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,
    "formationSouhaitee" TEXT,
    "inscriptionData" JSONB NOT NULL,
    "renseignementsData" JSONB NOT NULL,
    "consentementData" JSONB NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'NOUVELLE'
);

-- CreateIndex
CREATE INDEX "Inscription_email_idx" ON "Inscription"("email");

-- CreateIndex
CREATE INDEX "Inscription_createdAt_idx" ON "Inscription"("createdAt");

-- CreateIndex
CREATE INDEX "Inscription_status_idx" ON "Inscription"("status");
