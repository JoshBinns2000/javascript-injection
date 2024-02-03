import { z } from 'zod';

const appModes = z.union([z.literal('DEV'), z.literal('PROD')]);

const envSchema = z.object({
  APP_MODE: appModes,
  PORT: z.coerce.number(),
});

export const validateDotEnv = (processEnv: NodeJS.ProcessEnv) => {
  envSchema.parse(processEnv);
};
