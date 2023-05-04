import React from "react";
import "./PageNotFound.css";
import { useTranslation } from "react-i18next";

const PageNotFound = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="errorpage-container">{t("pageNotFound")}</div>
    </>
  );
};

export default PageNotFound;
