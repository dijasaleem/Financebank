import { FunctionComponent, useMemo, type CSSProperties } from "react";
import Menu from "./Menu";
import Menu1 from "./Menu1";
import Profile from "./Profile";
import "./NavBar.css";

export type NavBarType = {
  className?: string;

  /** Style props */
  menuMargin?: CSSProperties["margin"];
};

const NavBar: FunctionComponent<NavBarType> = ({
  className = "",
  menuMargin,
}) => {
  const menuStyle: CSSProperties = useMemo(() => {
    return {
      margin: menuMargin,
    };
  }, [menuMargin]);

  return (
    <div className={`nav-bar ${className}`}>
      <div className="logo-menu">
        <a className="finebankio1">
          <span className="fine1">FINE</span>
          <span className="bank1">bank.</span>
          <span className="fine1">IO</span>
        </a>
        <nav className="menu" style={menuStyle}>
          <Menu
            status1="Active"
            type="Overview"
            menuOverview="/menuoverview1.svg"
            overview="Overview"
          />
          <Menu
            status1="Inactive"
            type="Balances"
            menuOverview="/wallet1.svg"
            overview="Balances"
          />
          <Menu
            status1="Inactive"
            type="Transactions"
            menuOverview="/transaction.svg"
            overview="Transactions"
          />
          <Menu
            status1="Inactive"
            type="Bills"
            menuOverview="/bill.svg"
            overview="Bills"
          />
          <Menu
            status1="Inactive"
            type="Expenses"
            menuOverview="/expencces.svg"
          />
          <Menu
            status1="Inactive"
            type="Goals"
            menuOverview="/goal.svg"
            overview="Goals"
          />
          <Menu
            status1="Inactive"
            type="Settings"
            menuOverview="/menusettings.svg"
            overview="Settings"
          />
        </nav>
      </div>
      <div className="footer2">
        <Menu1 />
        <Profile />
      </div>
    </div>
  );
};

export default NavBar;
