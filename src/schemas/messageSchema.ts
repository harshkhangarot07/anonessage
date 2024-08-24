import {z} from 'zod'

export const messageSchema = z.object({
    content : z.string()
    .min(10 , {message : "more than 10 chars are required"})
    .max(300 , {message :"less than 300 words "})
    
})