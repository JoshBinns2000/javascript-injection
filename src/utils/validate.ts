import { z } from 'zod';

function mapZodErrors(zodError: z.ZodError<any>) {
  const { issues } = zodError;
  return issues.map((issue) => {
    const { path, message } = issue;
    return `${path.join('.')}: ${message}`;
  });
}

export function validate<TSchema extends z.ZodTypeAny>(
  value: unknown,
  schema: TSchema
): asserts value is z.infer<TSchema> {
  const validationResult = schema.parse(value);
  // if (validationResult.success) {
  //   return;
  // }
}
