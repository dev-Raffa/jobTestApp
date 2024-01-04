import{z}from "zod"

export const authAdminFormSchema = z.object({
  user: z.string({required_error: 'campo obrigatório'}),
  password: z.string({required_error: 'campo obrigatório'})
}) 

export type authAdminForm = z.infer<typeof authAdminFormSchema>