import { FunctionComponent } from "react";
import Menu from "./Menu";
import "./Menu2.css";

export type Menu2Type = {
  className?: string;
};

const Menu2: FunctionComponent<Menu2Type> = ({ className = "" }) => {
  return (
    <div className={`menu1 ${className}`}>
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
      <Menu status1="Inactive" type="Expenses" menuOverview="/expencces.svg" />
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
    </div>
  );
};

export default Menu2;
