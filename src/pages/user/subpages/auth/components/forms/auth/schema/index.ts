import { z } from "zod";

export const authUserFormSchema = z.object({
    email: z.string().email(),
    password: z.string()
})

export type authUserForm = z.infer<typeof authUserFormSchema>