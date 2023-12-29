import { z } from "zod";

export const coursesFormSchema = z.object({
    title: z.string(),
    description: z.string(),
    imgUrl: z.string(),
    category: z.string(),
    highlight: z.boolean()
})

export type coursesForm = z.infer<typeof coursesFormSchema>