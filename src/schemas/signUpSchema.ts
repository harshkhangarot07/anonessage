import {z} from 'zod'

export const usernameValidation = z
 .string()
 .min(2, "Username must be atleast of 2 characters")
 .max(20 , "Username must be atmost of 20 chars")
 .regex(/^[a-zA-Z0-9_]+$/,"username must not contain special character")



 export const signUpSchema = z.object({
    username : usernameValidation,
    email: z.string().email({message:"invalid email address"}),
    password : z.string().min(6 , {message: "password must be of atleast 6 characters"})
 })