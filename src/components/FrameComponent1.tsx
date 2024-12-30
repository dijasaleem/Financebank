import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./FrameComponent1.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/105-balances");
  }, [navigate]);

  return (
    <div
      className={`arrow-up-right-wrapper ${className}`}
      onClick={onFrameContainerClick}
    >
      <img className="arrow-up-right-icon" alt="" src="/arrowupright.svg" />
    </div>
  );
};

export default FrameComponent1;
