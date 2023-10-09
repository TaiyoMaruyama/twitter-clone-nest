import { z } from 'zod';

export const userScheme = z
  .object({
    name: z.string(),
    email: z.string(),
    password: z.string(),
  })
  .required();

export type UserScheme = z.infer<typeof userScheme>;
