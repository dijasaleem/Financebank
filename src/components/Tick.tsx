import { FunctionComponent } from "react";
import "./Tick.css";

export type TickType = {
  className?: string;

  /** Variant props */
  active?: boolean;
};

const Tick: FunctionComponent<TickType> = ({
  className = "",
  active = true,
}) => {
  return (
    <div className={`tick ${className}`} data-active={active}>
      <div className="fill" />
      <img
        className="iconsoutlinecheckmark"
        alt=""
        src="/iconsoutlinecheckmark.svg"
      />
    </div>
  );
};

export default Tick;
