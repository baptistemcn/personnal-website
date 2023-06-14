import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Flag } from "./Flag";

import "./header.css";
import { FRENCH_FLAG, US_FLAG } from "../assets/db";

interface HeaderProps {
  headers: Array<LinksProps>;
}

interface LinksProps {
  name: string;
  url: string;
}

export const Header = ({ headers }: HeaderProps) => {
  const [activeNavItem, setActiveNavItem] = useState("");
  const { t, i18n } = useTranslation();

  const language = i18n.language;

  const handleNavItemClick = (item: string) => {
    setActiveNavItem(item);
  };

  const changeLanguage = (lng: string | undefined) => {
    i18n.changeLanguage(lng);
  };

  const handleChangeLanguage = () => {
    const lang = {
      en: "fr",
      fr: "en",
    }[language];
    changeLanguage(lang);
  };

  const flags: { [key: string]: string } = {
    fr: FRENCH_FLAG,
    en: US_FLAG,
  };

  const handleFlag = flags[language] || US_FLAG;

  return (
    <header>
      <nav>
        <button
          onClick={handleChangeLanguage}
          data-testid="lang-switch"
          role="button"
          aria-label={t("button.lang.label") || ""}
        >
          {language && (
            <Flag nation={handleFlag} description={t("img.flag.label")} />
          )}
        </button>

        <ul>
          {headers.map((item, index) => (
            <li
              key={index}
              onClick={() => handleNavItemClick(item.name)}
              className={activeNavItem === item.name ? "active" : ""}
            >
              <Link to={item.url}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
