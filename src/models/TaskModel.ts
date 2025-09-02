import z from 'zod';

export const schemaTask = z.object({
  username: z.string().min(3, 'El nombre es obligatorio'),
});

export type TaskFormValues = z.infer<typeof schemaTask>;