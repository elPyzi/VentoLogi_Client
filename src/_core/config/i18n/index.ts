/** biome-ignore-all lint/style/noExportedImports: <specific config> */
"use client";

import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";
import {initReactI18next} from "react-i18next";

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en-EN",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: "/locales/{{ns}}/{{lng}}.json",
    },
    ns: ["common"],
    defaultNS: "common",
    react: {
      useSuspense: false,
    },
  });

export default i18n;
