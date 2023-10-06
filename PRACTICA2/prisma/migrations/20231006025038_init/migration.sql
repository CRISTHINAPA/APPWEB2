-- CreateTable
CREATE TABLE "alergia" (
    "id" SERIAL NOT NULL,
    "descripcion" TEXT,

    CONSTRAINT "alergia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "controlAlergia" (
    "id" SERIAL NOT NULL,
    "idAlergia" TEXT NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "hora" TEXT NOT NULL,
    "descripcion" TEXT,
    "lugar" TEXT,
    "resultado" TEXT,
    "observaciones" TEXT,

    CONSTRAINT "controlAlergia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Paciente" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "fechaNacimiento" INTEGER NOT NULL,
    "direccion" TEXT,
    "email" TEXT,

    CONSTRAINT "Paciente_pkey" PRIMARY KEY ("id")
);
