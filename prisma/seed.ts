import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  // Clear existing data
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();

  // 1. Kaffee (Coffee)
  const coffee = await prisma.category.create({
    data: {
      name: "Kaffee",
      products: {
        create: [
          {
            name: "Bellaria Classic Blend",
            description: "Unsere Hausmischung. Vollmundig mit Noten von Zartbitterschokolade und Nuss. 500g ganze Bohnen.",
            price: 18.5,
            image: "/images/coffee-beans-classic.png",
          },
          {
            name: "Decaf Evening Blend",
            description: "Schonend entkoffeiniert, ohne Kompromisse beim Geschmack. Perfekt für den späten Abend. 500g ganze Bohnen.",
            price: 19.5,
            image: "/images/coffee-beans-decaf.png",
          },
          {
            name: "Single Origin Ethiopia",
            description: "Helle Röstung mit floralen Noten und einer feinen Fruchtsäure. 250g ganze Bohnen.",
            price: 22.0,
            image: "/images/coffee-beans-ethiopia.png",
          },
        ],
      },
    },
  });

  // 2. Merchandise
  const merch = await prisma.category.create({
    data: {
      name: "Merchandise",
      products: {
        create: [
          {
            name: "Signature Bellaria Cup",
            description: "Klassische Porzellantasse mit unserem Logo. Spülmaschinenfest und langlebig.",
            price: 14.5,
            image: "/images/bellaria-cup.png",
          },
          {
            name: "Outdoor Enamel Cup",
            description: "Robuste Emaille-Tasse für unterwegs oder das Frühstück im Freien.",
            price: 12.5,
            image: "/images/bellaria-enamel-cup.png",
          },
          {
            name: "Cotton Tote Bag",
            description: "Nachhaltige Baumwolltasche mit exklusivem Bellaria-Print.",
            price: 8.0,
            image: "/images/bellaria-tote.png",
          },
        ],
      },
    },
  });

  // 3. Bäckerei (Bakery)
  const bakery = await prisma.category.create({
    data: {
      name: "Bäckerei",
      products: {
        create: [
          {
            name: "Cinnamon Rolls (4 Stk.)",
            description: "Hausgemacht, fluffig und mit viel Zimt. Frisch aus unserer Backstube.",
            price: 16.0,
            image: "/images/cinnamon-rolls.png",
          },
          {
            name: "Ganze Sachertorte",
            description: "Die klassische Wiener Sachertorte nach unserem Hausrezept. (Ø 24cm)",
            price: 45.0,
            image: "/images/sachertorte-whole.png",
          },
          {
            name: "Apfelstrudel Kit",
            description: "Alles was Sie brauchen für den perfekten Bellaria Apfelstrudel zu Hause.",
            price: 24.0,
            image: "/images/strudel-kit.png",
          },
        ],
      },
    },
  });

  console.log("Webshop items seeded successfully.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
