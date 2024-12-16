import { z } from "zod";

export const formLoginSchema = z.object({
    userid: z.string().min(1),
    username: z.string().min(1)
})
