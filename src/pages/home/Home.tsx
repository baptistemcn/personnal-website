import { useTranslation } from "react-i18next";

import { Card } from "../../components";

import img from "../../assets/baptiste-marcon.webp";
import { ICONS } from "../../assets/db";

export const Home = () => {
  const { t } = useTranslation();

  return (
    <Card
      alt={t("presentation.alt")}
      icons={ICONS}
      img={img}
      text={t("presentation.text")}
      title={t("presentation.title")}
    />
  );
};
