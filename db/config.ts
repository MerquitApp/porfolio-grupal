import { defineDb, defineTable, column } from "astro:db";

export const TeamMember = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    jobTitle: column.text(),
    imgSrc: column.text(),
    porfolioSite: column.text({
      optional: true
    }),
    description: column.text({
      optional: true
    })
  }
});

export const Project = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    description: column.text(),
    githubLink: column.text()
  }
});

// https://astro.build/db/config
export default defineDb({
  tables: {
    TeamMember,
    Project
  }
});
