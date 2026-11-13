-- CreateTable
CREATE TABLE "resume_requests" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(80) NOT NULL,
    "email" VARCHAR(254) NOT NULL,
    "company" VARCHAR(120),
    "purpose" VARCHAR(20) NOT NULL,
    "message" TEXT NOT NULL,
    "status" VARCHAR(20) NOT NULL DEFAULT 'pending',
    "adminNote" TEXT,
    "decidedAt" TIMESTAMP(3),
    "tokenHash" VARCHAR(64),
    "tokenExpiresAt" TIMESTAMP(3),
    "downloadCount" INTEGER NOT NULL DEFAULT 0,
    "maxDownloads" INTEGER NOT NULL DEFAULT 5,
    "lastDownloadAt" TIMESTAMP(3),
    "ipAddress" VARCHAR(45),
    "userAgent" TEXT,
    "country" VARCHAR(100),
    "city" VARCHAR(100),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "resume_requests_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "resume_requests_tokenHash_key" ON "resume_requests"("tokenHash");

-- CreateIndex
CREATE INDEX "resume_requests_status_createdAt_idx" ON "resume_requests"("status", "createdAt" DESC);

-- CreateIndex
CREATE INDEX "resume_requests_email_idx" ON "resume_requests"("email");
