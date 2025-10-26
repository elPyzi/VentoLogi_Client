import * as z from "zod";
import { letters, REGEX, required } from "@/constants";

export const optionStringSchema = z.string().trim().nullable().optional();
export const requiredStringSchema = z
  .string()
  .refine((val) => val.trim().length > 0, { message: required() })
  .trim();

export const optionalNumberScheme = z.number().nullable().optional();
export const requiredNumberSchema = z.number().refine((val) => val !== undefined && val !== null, {
  message: required(),
});

export const onlyLettersScheme = z
  .string()
  .trim()
  .regex(REGEX.LETTERS, { message: letters() })
  .nullable()
  .optional();

export const phoneScheme = z
  .string()
  .trim()
  .regex(REGEX.PHONE, { message: letters() })
  .nullable()
  .optional();
