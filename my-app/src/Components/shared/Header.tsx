import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/a-logo.svg";
import { ReactComponent as Cart } from "../../assets/empty-cart.svg";
import { store } from "../../redux/store";
import { APP_ROUTES } from "../../utils/Constants";
import { CurCont, CurrencySelector } from "../currencySelector";
import "./Header.css";

export class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <nav className="header_nav">
          <li>
            <NavLink
              to={APP_ROUTES.woman}
              className={({ isActive }) =>
                `navLink${isActive ? " active" : ""}`
              }
            >
              woman
            </NavLink>
          </li>
          <li>
            <NavLink
              to={APP_ROUTES.MAN}
              className={({ isActive }) =>
                `navLink${isActive ? " active" : ""}`
              }
            >
              Man
            </NavLink>
          </li>
          <li>
            <NavLink
              to={APP_ROUTES.KIDS}
              className={({ isActive }) =>
                `navLink${isActive ? " active" : ""}`
              }
            >
              Kids
            </NavLink>
          </li>
        </nav>
        <Logo />
        <div className="basket">
          <CurCont currencySymbol={null} currencyLabel={null} />
          <Cart />
        </div>
      </header>
    );
  }
}
