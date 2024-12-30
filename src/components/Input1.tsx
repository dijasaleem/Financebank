import { FunctionComponent } from "react";
import "./Input1.css";

export type Input1Type = {
  className?: string;

  /** Variant props */
  active?: boolean;
  type?: string;
};

const Input1: FunctionComponent<Input1Type> = ({
  className = "",
  active = false,
  type = "Name-Email",
}) => {
  return (
    <div className={`input ${className}`} data-active={active} data-type={type}>
      <div className="text5">johndoe@email.com</div>
    </div>
  );
};

export default Input1;
