-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "avatar" TEXT,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "company-settings" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "openingTime" TIMESTAMP(3) NOT NULL,
    "closingTime" TIMESTAMP(3) NOT NULL,
    "companyLocationId" INTEGER NOT NULL,

    CONSTRAINT "company-settings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "company-location" (
    "id" SERIAL NOT NULL,
    "city" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "number" INTEGER NOT NULL,

    CONSTRAINT "company-location_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "company-settings" ADD CONSTRAINT "company-settings_companyLocationId_fkey" FOREIGN KEY ("companyLocationId") REFERENCES "company-location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
