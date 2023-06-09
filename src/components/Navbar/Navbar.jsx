import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Navbar.css";
import USBLogo from "../../assets/USBLogo.png";

const Navbar = () => {
  const { t } = useTranslation();
  const [className, setClassName] = useState(false);

  const onClassNameChange = () => {
    setClassName(!className);
  };

  return (
    <div className="main-container">
      <div className="title">
        <a href="/">
          <img src={USBLogo} alt="USBank Logo" />
        </a>
      </div>

      <div className="lists">
        <div className="dropdown">
          <ul className={className ? "navlinks active" : "navlinks"}>
            <li className="links">
              <a onClick={onClassNameChange} href="/" className="nav-links">
                {t("dashboard")}
              </a>
            </li>
          </ul>
          <div className="dropdown-content">
            <a href="/card">Link 1</a>
            <a href="*">Link 2</a>
            <a href="*">Link 3</a>
            <a href="*">Link 4</a>
            <a href="*">Link 5</a>
          </div>
        </div>

        <div className="dropdown">
          <ul className={className ? "navlinks active" : "navlinks"}>
            <li className="links">
              <a
                onClick={onClassNameChange}
                href="/easMasterList"
                className="nav-links"
              >
                {t("easMasterList")}
              </a>
            </li>
          </ul>
          <div className="dropdown-content">
            <a href="/cardtwo">Link 6</a>
            <a href="*">Link 7</a>
            <a href="*">Link 8</a>
            <a href="*">Link 9</a>
            <a href="*">Link 10</a>
          </div>
        </div>

        <div className="dropdown">
          <ul className={className ? "navlinks active" : "navlinks"}>
            <li className="links">
              <a
                onClick={onClassNameChange}
                href="/projectTeam"
                className="nav-links"
              >
                {t("projectTeam")}
              </a>
            </li>
          </ul>
          <div className="dropdown-content">
            <a href="*">Link 11</a>
            <a href="*">Link 12</a>
            <a href="*">Link 13</a>
            <a href="*">Link 14</a>
            <a href="*">Link 15</a>
          </div>
        </div>

        <div className="dropdown">
          <ul className={className ? "navlinks active" : "navlinks"}>
            <li className="links">
              <a
                onClick={onClassNameChange}
                href="/myTasks"
                className="nav-links"
              >
                {t("myTasks")}
              </a>
            </li>
          </ul>
          <div className="dropdown-content">
            <a href="*">Link 16</a>
            <a href="*">Link 17</a>
            <a href="*">Link 18</a>
            <a href="*">Link 19</a>
            <a href="*">Link 20</a>
          </div>
        </div>

        <div className="dropdown">
          <ul className={className ? "navlinks active" : "navlinks"}>
            <li className="links">
              <a
                onClick={onClassNameChange}
                href="/reports"
                className="nav-links"
              >
                {t("reports")}
              </a>
            </li>
          </ul>
          <div className="dropdown-content">
            <a href="*">Link 21</a>
            <a href="*">Link 22</a>
            <a href="*">Link 23</a>
            <a href="*">Link 24</a>
            <a href="*">Link 25</a>
          </div>
        </div>
      </div>

      <div className="user">
        <p>Hello, User</p>
      </div>

      <div onClick={onClassNameChange} className="hamburger-toggle">
        <svg
          style={{ backgroundColor: "#fff" }}
          viewBox="0 0 100 80"
          width="30"
          height="30"
        >
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg>
      </div>
    </div>
  );
};

export default Navbar;
