import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Clear existing data
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();

  // 1. Frühstück (Breakfast)
  await prisma.category.create({
    data: {
      name: "Frühstück",
      products: {
        create: [
          { name: "Eggs Benedict mit Speck", description: "Bio-Sauerteigbrot | 2 Bio-Eier | Babyspinat | Sauce Hollandaise", price: 14.5, image: "/images/eggs-benedict-speck.png" },
          { name: "Eggs Benedict mit Räucherlachs", description: "Bio-Sauerteigbrot | 2 Bio-Eier | Babyspinat | Sauce Hollandaise", price: 15.5, image: "/images/eggs-benedict-lachs.png" },
          { name: "Großes Wiener Frühstück", description: "Handsemmel | Beinschinken | Gouda | weiches Ei | Butter | Marmelade", price: 14.0, image: "/images/fruehstueck-gross.png" },
          { name: "Bellaria Omelette", description: "3 Bio Eier | Avocado | Tomaten | Babyblattspinat | Feta", price: 11.0, image: "/images/omelette.png" },
          { name: "Breakfast Burger", description: "Brioche Bun | 2 Spiegeleier | Tomaten | Nachos | Avocadocreme | Cheddar", price: 13.5, image: "/images/breakfast-burger.png" },
          { name: "Veganes Frühstück", description: "Hummus | Oliven | Falafel | Avocado | Datteln | Pita-Brot | Joghurt", price: 14.0, image: "/images/fruehstueck-vegan.png" },
          { name: "Avocado Toast", description: "Bio-Sauerteigbrot | Rote-Beete-Hummus | Tomatensalsa | Teriyaki Sauce", price: 13.0, image: "/images/avocado-toast.png" },
          { name: "Buttermilk Pancakes", description: "Hausgemachte Nougatcreme | Banane", price: 12.0, image: "/images/pancakes.png" },
        ]
      }
    }
  });

  // 2. Mittagsmenü (Lunch Menu - Weekly)
  await prisma.category.create({
    data: {
      name: "Mittagsmenü",
      products: {
        create: [
          { name: "Tagesteller vegetarisch", description: "Wöchentlich wechselndes Hauptgericht ohne Fleisch", price: 12.5, image: "/images/mittag-veggie.png" },
          { name: "Tagesteller Fisch/Fleisch", description: "Wöchentlich wechselndes Hauptgericht mit Fisch oder Fleisch", price: 13.5, image: "/images/mittag-meat.png" },
          { name: "2 Gänge Menü vegetarisch", description: "Suppe oder Salat + vegetarischer Tagesteller", price: 14.5, image: "/images/mittag-2-gaenge-veggie.png" },
          { name: "2 Gänge Menü Fisch/Fleisch", description: "Suppe oder Salat + Fleisch/Fisch Tagesteller", price: 15.5, image: "/images/mittag-2-gaenge-meat.png" },
          { name: "Schweinsbraten vom Schopf", description: "Mit Kraut und Erdäpfelknödel (Wochenhighlight)", price: 13.5, image: "/images/schweinsbraten.png" },
          { name: "Seelachs in Cornflakes-Panade", description: "Mit Petersilerdäpfeln", price: 13.5, image: "/images/seelachs.png" },
          { name: "Falafel-Teller", description: "Auf Curry-Hummus mit Pitabrot und Rotkrautsalat", price: 12.5, image: "/images/falafel-teller.png" },
        ]
      }
    }
  });

  // 3. Speisekarte: Suppe, Salat & Tapas
  await prisma.category.create({
    data: {
      name: "Suppe, Salat & Tapas",
      products: {
        create: [
          { name: "Rindsuppe", description: "Mit Fritatten oder Grießnockerl", price: 6.5, image: "/images/rindsuppe.png" },
          { name: "Beef Tatar", description: "Bio-Sauerteigbrot | Notre-Butter | Wachtelei | Schalotten", price: 15.5, image: "/images/beef-tatar.png" },
          { name: "Steirischer Backhendlsalat", description: "Erdäpfel-Vogerlsalat | Kürbiskernöl", price: 15.0, image: "/images/backhendlsalat.png" },
          { name: "Caesar Salad", description: "Römersalat | Caesar-Dressing | Parmesan | Croutons", price: 15.0, image: "/images/caesar-salad.png" },
          { name: "Hausgemachter Hummus", description: "Mit Bio-Sauerteigbrot vom Öfferl", price: 8.5, image: "/images/hummus.png" },
        ]
      }
    }
  });

  // 4. Hauptspeisen
  await prisma.category.create({
    data: {
      name: "Hauptspeisen",
      products: {
        create: [
          { name: "Wiener Schnitzel vom Kalb", description: "Erdäpfel-Vogerlsalat | Preiselbeeren | Zitrone", price: 25.5, image: "/images/schnitzel-kalb.png" },
          { name: "Rindgulasch", description: "Butternockerl | Senfgurke | Bio-Handsemmel", price: 19.5, image: "/images/gulasch.png" },
          { name: "Bellaria Double Smash Burger", description: "Beef | Cheddar | Speck | Zwiebel | Brioche Bun", price: 19.5, image: "/images/smash-burger.png" },
          { name: "Vegan Burger", description: "Beyond Meat | Avocado | Rotkraut | Trüffelmayo", price: 18.0, image: "/images/vegan-burger.png" },
        ]
      }
    }
  });

  // 5. Desserts & Mehlspeisen
  await prisma.category.create({
    data: {
      name: "Desserts & Mehlspeisen",
      products: {
        create: [
          { name: "Kaiserschmarrn", description: "Karamellisiert | Marillenröster", price: 11.0, image: "/images/kaiserschmarrn.png" },
          { name: "Hausgemachter Apfelstrudel", description: "Wiener Klassiker", price: 6.8, image: "/images/apfelstrudel.png" },
          { name: "Sachertorte", description: "Original Wiener Schokoladentorte", price: 6.8, image: "/images/sachertorte.png" },
        ]
      }
    }
  });

  // 6. Getränke (Kaffee, Limos, Wein)
  await prisma.category.create({
    data: {
      name: "Getränke",
      products: {
        create: [
          { name: "Melange / Cappuccino", description: "Wiener Kaffeeklassiker", price: 4.8, image: "/images/melange.png" },
          { name: "Hausgemachte Limonade", description: "Ingwer-Zitrone / Maracuja / Grapefruit", price: 5.8, image: "/images/limonade.png" },
          { name: "Grüner Veltliner Federspiel", description: "Domäne Wachau, 1/8l", price: 5.5, image: "/images/wein-weiss.png" },
          { name: "Ottakringer Lager", description: "Frisch vom Fass, 0,3l", price: 4.2, image: "/images/bier.png" },
        ]
      }
    }
  });

  console.log("All menus (Frühstück, Mittag, Speisekarte) seeded successfully.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
