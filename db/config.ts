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
    status: column.boolean({ default: true }),
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
    actionList:  column.text(),
    objectives: column.text(),
    disasterTypeId: column.number({ references: () => DisasterType.columns.id }),
    riskLevel: column.number(),
    icon: column.text({ optional: true }),
    address: column.text({ optional: true }),
    safetyLevel: column.number({ optional: true }),
    imageUrl: column.text({ optional: true }),

    createdAt: column.date({ default: new Date() }),
    updatedAt: column.date({ default: new Date() }),
    status: column.boolean({ default: true }),
  },
})

const DisasterType = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    description: column.text(),
    icon: column.text({ optional: true }),
    imageUrl: column.text({ optional: true }),

    createdAt: column.date({ default: new Date() }),
    updatedAt: column.date({ default: new Date() }),
    status: column.boolean({ default: true }),
  },
})

const OurIcons = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
  }
})

export default defineDb({
  tables: {
    MitigationAction,
    DisasterType,
    User,
    Role,
    OurIcons,
  },
});
