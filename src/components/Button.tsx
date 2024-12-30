import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Button.css";

export type ButtonType = {
  className?: string;
};

const Button: FunctionComponent<ButtonType> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/106-account-details");
  }, [navigate]);

  return (
    <div className={`button ${className}`} onClick={onButtonContainerClick}>
      <div className="details4">Details</div>
      <img className="chevron-right-icon6" alt="" src="/chevronright.svg" />
    </div>
  );
};

export default Button;
