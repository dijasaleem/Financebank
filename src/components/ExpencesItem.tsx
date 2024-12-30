import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ExpencesItem.css";

export type ExpencesItemType = {
  className?: string;
  housing?: string;
  housing1?: string;
  nameSeparator?: string;
  changeValue?: string;
  upArrow?: string;
  arrowRight?: string;
};

const ExpencesItem: FunctionComponent<ExpencesItemType> = ({
  className = "",
  housing,
  housing1,
  nameSeparator,
  changeValue,
  upArrow,
  arrowRight,
}) => {
  const navigate = useNavigate();

  const onArrowRightIconClick = useCallback(() => {
    navigate("/109-expenses");
  }, [navigate]);

  return (
    <div className={`item1 ${className}`}>
      <div className="icon13">
        <img className="housing-icon" loading="lazy" alt="" src={housing} />
      </div>
      <div className="details6">
        <div className="name-cost">
          <div className="name-cost">
            <div className="housing">{housing1}</div>
            <b className="name-separator">{nameSeparator}</b>
          </div>
          <div className="percentage">
            <div className="change-value">{changeValue}</div>
            <img className="up-arrow-icon" alt="" src={upArrow} />
          </div>
        </div>
        <img
          className="arrow-right-icon"
          loading="lazy"
          alt=""
          src={arrowRight}
          onClick={onArrowRightIconClick}
        />
      </div>
    </div>
  );
};

export default ExpencesItem;
