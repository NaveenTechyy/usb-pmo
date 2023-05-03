import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [className, setClassName] = useState(false);

  const onClassNameChange = () => {
    setClassName(!className);
  };

  return (
    <div className="main-container">
      <div className="logo" title="USBANK PMO">
        <NavLink to="/" className="logo">
          USBANK PMO
        </NavLink>
      </div>

      <div className="lists">
        <div class="dropdown">
          <ul className={className ? "navlinks active" : "navlinks"}>
            <li className="links">
              <NavLink onClick={onClassNameChange} to="/" className="nav-links">
                Home
              </NavLink>
            </li>
          </ul>
          <div class="dropdown-content">
            <Link to="/card">Link 1</Link>
            <Link to="*">Link 2</Link>
            <Link to="*">Link 3</Link>
            <Link to="*">Link 4</Link>
            <Link to="*">Link 5</Link>
          </div>
        </div>

        <div class="dropdown">
          <ul className={className ? "navlinks active" : "navlinks"}>
            <li className="links">
              <NavLink onClick={onClassNameChange} to="/" className="nav-links">
                Rockets
              </NavLink>
            </li>
          </ul>
          <div class="dropdown-content">
            <Link to="/cardtwo">Link 6</Link>
            <Link to="*">Link 7</Link>
            <Link to="*">Link 8</Link>
            <Link to="*">Link 9</Link>
            <Link to="*">Link 10</Link>
          </div>
        </div>

        <div class="dropdown">
          <ul className={className ? "navlinks active" : "navlinks"}>
            <li className="links">
              <NavLink onClick={onClassNameChange} to="/" className="nav-links">
                Launches
              </NavLink>
            </li>
          </ul>
          <div class="dropdown-content">
            <Link to="*">Link 11</Link>
            <Link to="*">Link 12</Link>
            <Link to="*">Link 13</Link>
            <Link to="*">Link 14</Link>
            <Link to="*">Link 15</Link>
          </div>
        </div>

        <div class="dropdown">
          <ul className={className ? "navlinks active" : "navlinks"}>
            <li className="links">
              <NavLink onClick={onClassNameChange} to="/" className="nav-links">
                History
              </NavLink>
            </li>
          </ul>
          <div class="dropdown-content">
            <Link to="*">Link 16</Link>
            <Link to="*">Link 17</Link>
            <Link to="*">Link 18</Link>
            <Link to="*">Link 19</Link>
            <Link to="*">Link 20</Link>
          </div>
        </div>

        <div class="dropdown">
          <ul className={className ? "navlinks active" : "navlinks"}>
            <li className="links">
              <NavLink onClick={onClassNameChange} to="/" className="nav-links">
                Details
              </NavLink>
            </li>
          </ul>
          <div class="dropdown-content">
            <Link to="*">Link 21</Link>
            <Link to="*">Link 22</Link>
            <Link to="*">Link 23</Link>
            <Link to="*">Link 24</Link>
            <Link to="*">Link 25</Link>
          </div>
        </div>
      </div>

      <div className="user">
        <h2>Hello, Naveen Kumar</h2>
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
