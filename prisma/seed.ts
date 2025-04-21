import { PrismaClient } from "@/app/generated/prisma";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Insertion des invités...");

  for (let i = 0; i < 20; i++) {
    await prisma.attendee.create({
      data: {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        company: faker.company.name(),
        telephone: faker.phone.number(),
      },
    });
  }

  console.log("✅ Insertion terminée !");
}

main()
  .catch((e) => {
    console.error("❌ Erreur :", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
