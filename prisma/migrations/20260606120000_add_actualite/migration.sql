-- CreateTable
CREATE TABLE "missionagape"."Actualite" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "titre" TEXT NOT NULL,
    "contenu" TEXT NOT NULL,
    "imageUrl" TEXT,
    "lienLabel" TEXT,
    "lienUrl" TEXT,
    "publiee" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Actualite_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Actualite_publiee_idx" ON "missionagape"."Actualite"("publiee");

-- CreateIndex
CREATE INDEX "Actualite_updatedAt_idx" ON "missionagape"."Actualite"("updatedAt");
