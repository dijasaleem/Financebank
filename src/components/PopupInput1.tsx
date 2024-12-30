import { FunctionComponent } from "react";
import PopupInput from "./PopupInput";
import ButtonBig from "./ButtonBig";
import "./PopupInput1.css";

export type PopupInput1Type = {
  className?: string;
};

const PopupInput1: FunctionComponent<PopupInput1Type> = ({
  className = "",
}) => {
  return (
    <div className={`popup-input1 ${className}`}>
      <div className="input3">
        <PopupInput targetAmounts="Target Amounts" emptyTarget="$500000" />
        <PopupInput
          targetAmounts="Present Amounts"
          emptyTarget="Write presents amounts here"
        />
      </div>
      <ButtonBig addAccounts="Save" />
      <img className="x-icon" loading="lazy" alt="" src="/x.svg" />
    </div>
  );
};

export default PopupInput1;
