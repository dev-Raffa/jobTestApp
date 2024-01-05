import { z } from "zod";

export const lessonFormSchema = z.object({
    title: z.string(),
    description: z.string(),
    type: z.string(),
    url: z.string(),
    professor: z.string(),
    course: z.number().min(1),
})

export type lessonForm = z.infer<typeof lessonFormSchema>