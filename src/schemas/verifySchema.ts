import {z} from 'zod'

export const verifySchmea = z.object({
    code: z.string().length(6, 'verification code must be of 6 digits ')
    
})