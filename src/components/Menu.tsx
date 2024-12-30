import { FunctionComponent } from "react";
import "./Menu.css";

export type MenuType = {
  className?: string;
  menuOverview?: string;
  overview?: string;

  /** Variant props */
  status1?: "Active" | "Inactive";
  type?:
    | "Overview"
    | "Balances"
    | "Transactions"
    | "Bills"
    | "Expenses"
    | "Goals"
    | "Settings";
};

const Menu: FunctionComponent<MenuType> = ({
  className = "",
  status1 = "Active",
  type = "Overview",
  menuOverview,
  overview,
}) => {
  return (
    <div className={`root ${className}`} data-status={status1} data-type={type}>
      <img
        className="menuoverview-icon"
        loading="lazy"
        alt=""
        src={menuOverview}
      />
      <a className="overview2">{overview}</a>
    </div>
  );
};

export default Menu;
