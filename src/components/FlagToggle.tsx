import { useLanguage } from "@/providers/language";
import classNames from "classnames";

export function FlagToggle() {
  const language = useLanguage();
  return (
    <button
      className={classNames(
        "text-3xl md:text-4xl",
        "hover:scale-125 transform transition-transform",
        "hover:-rotate-12"
      )}
      onClick={language.toggleLanguage}
    >
      {language.language.flag}
    </button>
  );
}
