import { column, defineDb, defineTable } from 'astro:db'

const User = defineTable({
  columns: {
    id: column.text({
      primaryKey: true,
      unique: true,
    }),

    name: column.text(),
    lastName: column.text(),
    email: column.text({ unique: true }),
    password: column.text(),

    createdAt: column.date({ default: new Date() }),
    updatedAt: column.date({ default: new Date() }),
    role: column.text({ references: () => Role.columns.id }),
  },
})

const Role = defineTable({
  columns: {
    id: column.text({ primaryKey: true, unique: true }),
    name: column.text(),
  },
})

const MitigationAction = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    description: column.text(),
    actions:  column.json(),
    objectives: column.text(),
    disasterType: column.number({ references: () => DisasterType.columns.id }),
    riskLevel: column.number(),
    icon: column.text({ optional: true }),
  },
})

const DisasterType = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    description: column.text(),
    icon: column.text({ optional: true }),
  },
})

export default defineDb({
  tables: {
    MitigationAction,
    DisasterType,
    User,
    Role,
  },
});
