import { z } from "zod";

export const formLoginSchema = z.object({
    email: z.string().email().min(10),
    password: z.string().min(1)
})

export const formSignupSchema = z.object({
    email: z.string().email().min(10),
    username: z.string().min(1),
    password: z.string().min(1)
})