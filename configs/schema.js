import { boolean, integer, json, pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const usersTable=pgTable('users',{
    id:serial().primaryKey(),
    name: varchar().notNull(),
    email:varchar().notNull(),
    isMember:boolean().default(false)
})

export const StudyMaterialTable=pgTable('studyMaterial',{
    id:serial().primaryKey(),
    courseId:varchar().notNull(),
    courseType:varchar(),
    topic:varchar(),
    difficulyLevel: varchar().default('Easy'),
    courseLayout: json(),
    createdBy:varchar()

})


export const chapterNotes=pgTable('chapterNotes',{
    id:serial().primaryKey(),
    courseId: varchar(),
    chapterId:integer().notNull(),
    notes:text()
})


export const studyType=pgTable('studyType',{
    id:serial().primaryKey(),
    courseId: varchar(),
    contentType: varchar(),
    type:json(),
    status: varchar().default('generating'),
})