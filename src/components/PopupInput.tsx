import { FunctionComponent } from "react";
import "./PopupInput.css";

export type PopupInputType = {
  className?: string;
  targetAmounts?: string;
  emptyTarget?: string;
};

const PopupInput: FunctionComponent<PopupInputType> = ({
  className = "",
  targetAmounts,
  emptyTarget,
}) => {
  return (
    <div className={`popup-input ${className}`}>
      <div className="target-amounts">{targetAmounts}</div>
      <div className="empty-popup">
        <div className="empty-target1">{emptyTarget}</div>
      </div>
    </div>
  );
};

export default PopupInput;
