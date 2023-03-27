import { initReactI18next } from "react-i18next";
import i18n from "i18next";

i18n.use(initReactI18next).init({
  lng: "",
  fallbackLng: "en",
  resources: {
    en: {
      translation: {
        Hi: "Hi",
        Actions: "Actions"
      }
    },
    vi: {
      translation: {
        Hi: "Xin chào",
        Actions: "Hành động"
      }
    }
  },
  keySeparator: false,
  interpolation: {escapeValue: false}
}).then();

export default i18n;
