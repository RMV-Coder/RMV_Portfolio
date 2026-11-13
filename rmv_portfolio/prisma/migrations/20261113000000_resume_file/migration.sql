-- CreateTable
CREATE TABLE "resume_file" (
    "id" TEXT NOT NULL DEFAULT 'current',
    "data" BYTEA NOT NULL,
    "size" INTEGER NOT NULL,
    "sha256" VARCHAR(64) NOT NULL,
    "fileName" VARCHAR(120) NOT NULL,
    "uploadedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "resume_file_pkey" PRIMARY KEY ("id")
);
