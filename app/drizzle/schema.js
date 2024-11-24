import { integer, pgTable, uuid, varchar, boolean } from "drizzle-orm/pg-core";

export const TeacherTable = pgTable("teachers", {
    id: uuid("id").primaryKey().defaultRandom(),
    name: varchar("name").notNull(),
    academic_year: varchar("year").notNull(),
    semester: integer("semester").notNull(),
    internal_marks: integer("internal_marks").notNull(),
    external_marks: integer("external_marks").notNull(),
    class: varchar("class").notNull(),
    division: varchar("division").notNull(),
    is_admin: boolean("is_admin").notNull().default(false), 
});
