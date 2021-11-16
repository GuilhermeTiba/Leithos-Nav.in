-- CreateEnum
CREATE TYPE "user_type" AS ENUM ('ADMIN', 'USER');

-- CreateEnum
CREATE TYPE "beds_type" AS ENUM ('CLEANING_NEEDED', 'ISOLATED', 'MAINTANENCE_NEEDED', 'MAINTANENCE', 'CLEANING', 'AVAILABLE', 'OCUPIED');

-- CreateTable
CREATE TABLE "users" (
    "id_user" TEXT NOT NULL,
    "email_user" TEXT NOT NULL,
    "password_user" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "type" "user_type" NOT NULL DEFAULT E'USER',

    CONSTRAINT "users_pkey" PRIMARY KEY ("id_user")
);

-- CreateTable
CREATE TABLE "patients" (
    "id_patient" TEXT NOT NULL,
    "name_patient" TEXT NOT NULL,
    "ssn_patient" TEXT NOT NULL,
    "description_patient" TEXT NOT NULL,
    "exit_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "entry_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "patients_pkey" PRIMARY KEY ("id_patient")
);

-- CreateTable
CREATE TABLE "beds" (
    "id_beds" TEXT NOT NULL,
    "sector" INTEGER NOT NULL,
    "status" INTEGER NOT NULL,
    "status_changed_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "type" "beds_type" NOT NULL,

    CONSTRAINT "beds_pkey" PRIMARY KEY ("id_beds")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_user_key" ON "users"("email_user");
