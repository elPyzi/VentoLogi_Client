import "i18next";

import type common from "../../../public/locales/common/ru-RU.json";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "common";
    resources: {
      common: typeof common;
    };
  }
}
