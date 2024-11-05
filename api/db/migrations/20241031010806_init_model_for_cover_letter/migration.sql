-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expired" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Completion" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "resume" TEXT NOT NULL,
    "aboutCompany" TEXT NOT NULL,
    "aboutJob" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Choice" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "completionId" INTEGER,
    "deltaId" INTEGER,
    CONSTRAINT "Choice_completionId_fkey" FOREIGN KEY ("completionId") REFERENCES "Completion" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Choice_deltaId_fkey" FOREIGN KEY ("deltaId") REFERENCES "Delta" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Delta" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "content" TEXT NOT NULL,
    "role" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
