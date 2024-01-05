import { z } from "zod";

export const registerUserFormSchema = z.object({
    email: z.string().email('insira um endereço de email no formato válido.'),
    password: z.string().min(8, 'a senha deve conter pelomenos 8 digitos.')
})

export type registerUserForm = z.infer<typeof registerUserFormSchema>