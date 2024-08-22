export const fallbackLng = "en";
export const languages = [fallbackLng, "uz", "ru"];
export const defaultNS = "common";
export const cookieName = "i18next";

export function getOptions(
  lng = fallbackLng,
  ns: string | string[] = defaultNS
) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}

export const languageOptions: Record<(typeof languages)[number], string> = {
  en: "🇬🇧 English",
  ru: "🇷🇺 Русский",
  uz: "🇺🇿 O'zbekcha",
};
