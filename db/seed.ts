import { db, Project, TeamMember } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(TeamMember).values([
    {
      id: 1,
      name: "Hugo Boyano",
      jobTitle: "Full Stack Developer",
      imgSrc: "hugo_boyano.webp",
      porfolioSite: "https://hgo.one"
    },
    {
      id: 2,
      name: "Andrés Jiménez",
      jobTitle: "Frontend Developer",
      imgSrc: "andres.jpg",
      description: "Soy un estudiante de Desarrollo de Aplicaciones Web, apasionado por la tecnología y el mundo digital. Mi interés por la programación comenzó desde joven, cuando empecé a explorar el desarrollo web y descubrí lo emocionante que es crear aplicaciones interactivas y funcionales. Actualmente, me encuentro aprendiendo sobre lenguajes como HTML, CSS, JavaScript, así como herramientas y frameworks modernos como React y Node.js. Me encanta la idea de construir experiencias digitales que sean accesibles y útiles para los usuarios."
    },
    {
      id: 3,
      name: "Jhonatan Endo",
      jobTitle: "Full Stack Developer",
      imgSrc: "jhonatan.jpg",
      porfolioSite: "https://jjendo.com/"
    },
    {
      id: 4,
      name: "Andy Uzal",
      jobTitle: "Full Stack Developer",
      imgSrc: "andy.jpg",
      porfolioSite: "https://andyuzal.tech/"
    }
  ]);

  await db.insert(Project).values([
    {
      id: 1,
      name: "MercApp",
      githubLink: "https://github.com/MerquitApp/mercapp",
      description: "Vende fácil, compra inteligente"
    }
  ]);
}
