import { useTranslation } from "react-i18next";

const langs = [
  { code: "es", label: "ES" },
  { code: "en", label: "EN" },
  { code: "pt", label: "PT" },
];

function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { i18n } = useTranslation();
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {langs.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => i18n.changeLanguage(code)}
          className={`font-textos text-[11px] px-2 py-1 rounded transition-all ${
            i18n.language === code
              ? "bg-turquesa text-azul font-bold"
              : "text-tiza/70 hover:text-tiza hover:bg-white/10"
          }`}
          aria-label={`Cambiar a ${label}`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export default LanguageSwitcher;
