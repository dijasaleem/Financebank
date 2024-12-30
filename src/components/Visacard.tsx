import { FunctionComponent } from "react";
import "./Visacard.css";

export type VisacardType = {
  className?: string;
};

const Visacard: FunctionComponent<VisacardType> = ({ className = "" }) => {
  return (
    <div className={`visacard ${className}`}>
      <img
        className="visa-logo-1-icon"
        loading="lazy"
        alt=""
        src="/visa-logo-1@2x.png"
      />
    </div>
  );
};

export default Visacard;
