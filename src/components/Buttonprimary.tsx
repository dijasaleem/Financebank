import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Buttonprimary.css";

export type ButtonprimaryType = {
  className?: string;

  /** Variant props */
  active?: boolean;
};

const Buttonprimary: FunctionComponent<ButtonprimaryType> = ({
  className = "",
  active = true,
}) => {
  const navigate = useNavigate();

  const onButtonprimaryContainerClick = useCallback(() => {
    navigate("/104-overview");
  }, [navigate]);

  return (
    <div
      className={`buttonprimary ${className}`}
      onClick={onButtonprimaryContainerClick}
      data-active={active}
    >
      <a className="label">Login</a>
    </div>
  );
};

export default Buttonprimary;
