import { FunctionComponent } from "react";
import "./Buttonsecondary.css";

export type ButtonsecondaryType = {
  className?: string;

  /** Variant props */
  icon?: boolean;
};

const Buttonsecondary: FunctionComponent<ButtonsecondaryType> = ({
  className = "",
  icon = true,
}) => {
  return (
    <div className={`buttonsecondary ${className}`} data-icon={icon}>
      <img className="google-icon" alt="" src="/google@2x.png" />
      <div className="continue-with-google">Continue with Google</div>
    </div>
  );
};

export default Buttonsecondary;
