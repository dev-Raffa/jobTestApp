import { z } from "zod";

export const professorFormSchema = z.object({
    name: z.string(),
    age: z.string().regex(/^-?\d+$/, 'insira a idade do professor.'),
    phoneNumber: z.string().regex(/^\(?\d{2}\)?\s?\d{4,5}\s?-\s?\d{4}$/, 'insira um numero de telefone no formato válido: 00 00000-0000'),
    email: z.string().email('insira um eamil no formato válido: email@email.com'),
    subjects: z.string()
})

export type professorForm = z.infer<typeof professorFormSchema>