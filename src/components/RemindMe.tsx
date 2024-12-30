import { FunctionComponent } from "react";
import Tick from "./Tick";
import "./RemindMe.css";

export type RemindMeType = {
  className?: string;

  /** Variant props */
  active?: boolean;
};

const RemindMe: FunctionComponent<RemindMeType> = ({
  className = "",
  active = true,
}) => {
  return (
    <div className={`remind-me ${className}`} data-active={active}>
      <Tick active />
      <div className="keep-me-signed">Keep me signed in</div>
    </div>
  );
};

export default RemindMe;
