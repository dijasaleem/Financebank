import { FunctionComponent } from "react";
import "./ButtonBig.css";

export type ButtonBigType = {
  className?: string;
  addAccounts?: string;
};

const ButtonBig: FunctionComponent<ButtonBigType> = ({
  className = "",
  addAccounts,
}) => {
  return (
    <div className={`button-big ${className}`}>
      <b className="add-accounts">{addAccounts}</b>
    </div>
  );
};

export default ButtonBig;
