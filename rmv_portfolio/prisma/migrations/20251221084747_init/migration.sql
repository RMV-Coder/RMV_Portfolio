-- CreateTable
CREATE TABLE "portfolio_ratings" (
    "id" TEXT NOT NULL,
    "uiux" SMALLINT NOT NULL DEFAULT 0,
    "performance" SMALLINT NOT NULL DEFAULT 0,
    "content" SMALLINT NOT NULL DEFAULT 0,
    "overall" SMALLINT NOT NULL,
    "feedback" TEXT,
    "ipAddress" VARCHAR(45),
    "userAgent" TEXT,
    "location" VARCHAR(255),
    "country" VARCHAR(100),
    "city" VARCHAR(100),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "portfolio_ratings_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "portfolio_ratings_createdAt_idx" ON "portfolio_ratings"("createdAt" DESC);

-- CreateIndex
CREATE INDEX "portfolio_ratings_overall_idx" ON "portfolio_ratings"("overall");
