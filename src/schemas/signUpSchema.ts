//read zod documentation
import {z} from "zod"

export const userNameValidation = z.
string()
.min(2,"must have more than atleast 2 characters")
.max(20 , "userName must  be  no more than 20")
.regex(/^[a-zA-Z0-9_]+$/,"Username must not contain special character")


export const signUpChema = z.object({
   userName:userNameValidation,
   email:z.string().email({message:"invalid email address"}),
   password:z.string().min(6 , {message:"password must  be at least 6 characters"})
})