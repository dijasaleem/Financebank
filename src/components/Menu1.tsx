import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent from "./FrameComponent";
import "./Menu1.css";

export type Menu1Type = {
  className?: string;
};

const Menu1: FunctionComponent<Menu1Type> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onLogoutButtonContainerClick = useCallback(() => {
    navigate("/101-login");
  }, [navigate]);

  return (
    <div
      className={`logout-button ${className}`}
      onClick={onLogoutButtonContainerClick}
    >
      <FrameComponent />
      <div className="logout">Logout</div>
    </div>
  );
};

export default Menu1;
