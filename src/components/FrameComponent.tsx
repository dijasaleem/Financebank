import { FunctionComponent } from "react";
import "./FrameComponent.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <div className={`icon10 ${className}`}>
      <img className="logout-icon" alt="" src="/logout.svg" />
    </div>
  );
};

export default FrameComponent;
