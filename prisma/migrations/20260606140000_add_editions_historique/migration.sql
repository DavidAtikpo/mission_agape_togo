-- CreateTable
CREATE TABLE "missionagape"."Edition" (
    "id" TEXT NOT NULL,
    "numero" INTEGER NOT NULL,
    "titre" TEXT NOT NULL,
    "description" TEXT,
    "estCourante" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Edition_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "missionagape"."EditionPhoto" (
    "id" TEXT NOT NULL,
    "editionId" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "legende" TEXT,
    "ordre" INTEGER NOT NULL DEFAULT 0,
    "publiee" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "EditionPhoto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "missionagape"."RapportEcole" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "titre" TEXT NOT NULL,
    "contenu" TEXT NOT NULL,
    "imageUrl" TEXT,
    "dateEvenement" TIMESTAMP(3) NOT NULL,
    "editionId" TEXT,
    "publiee" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "RapportEcole_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Edition_numero_key" ON "missionagape"."Edition"("numero");

-- CreateIndex
CREATE INDEX "Edition_estCourante_idx" ON "missionagape"."Edition"("estCourante");

-- CreateIndex
CREATE INDEX "EditionPhoto_editionId_idx" ON "missionagape"."EditionPhoto"("editionId");

-- CreateIndex
CREATE INDEX "EditionPhoto_publiee_idx" ON "missionagape"."EditionPhoto"("publiee");

-- CreateIndex
CREATE INDEX "RapportEcole_publiee_idx" ON "missionagape"."RapportEcole"("publiee");

-- CreateIndex
CREATE INDEX "RapportEcole_dateEvenement_idx" ON "missionagape"."RapportEcole"("dateEvenement");

-- CreateIndex
CREATE INDEX "RapportEcole_editionId_idx" ON "missionagape"."RapportEcole"("editionId");

-- AddForeignKey
ALTER TABLE "missionagape"."EditionPhoto" ADD CONSTRAINT "EditionPhoto_editionId_fkey" FOREIGN KEY ("editionId") REFERENCES "missionagape"."Edition"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "missionagape"."RapportEcole" ADD CONSTRAINT "RapportEcole_editionId_fkey" FOREIGN KEY ("editionId") REFERENCES "missionagape"."Edition"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- Seed Édition 14
INSERT INTO "missionagape"."Edition" ("id", "numero", "titre", "description", "estCourante", "createdAt", "updatedAt")
VALUES (
    'seed-edition-14',
    14,
    'Édition 2025-2026',
    'Dernière édition — formation en cours à l''École de Discipolat.',
    true,
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP
)
ON CONFLICT ("numero") DO NOTHING;
