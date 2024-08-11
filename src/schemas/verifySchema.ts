import {z} from "zod"

export const verifySchema = z.object({
    code:z.string().length(8 , {message:"Code must be 6 digit"})
})