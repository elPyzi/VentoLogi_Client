import i18next from "i18next";

export const required = () => i18next.t("common:validationMessages.required");
export const emailFormat = () => i18next.t("common:validationMessages.email.invalid");
export const number = () => i18next.t("common:validationMessages.number");
export const minLength = (count: number) =>
  i18next.t("common:validationMessages.lengthString.min", { count });
export const maxLength = (count: number) =>
  i18next.t("common:validationMessages.lengthString.max", { count });
export const cyrillic = () => i18next.t("common:validationMessages.cyrillic.basic");
export const latin = () => i18next.t("common:validationMessages.latin.basic");
export const letters = () => i18next.t("common:validationMessages.letters");
