import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./Item.css";

export type ItemType = {
  className?: string;
  gamepad2?: string;
  gTR5?: string;
  gadgetGear?: string;
  priceValue?: string;

  /** Style props */
  itemBorderBottom?: CSSProperties["borderBottom"];
};

const Item: FunctionComponent<ItemType> = ({
  className = "",
  itemBorderBottom,
  gamepad2,
  gTR5,
  gadgetGear,
  priceValue,
}) => {
  const itemStyle: CSSProperties = useMemo(() => {
    return {
      borderBottom: itemBorderBottom,
    };
  }, [itemBorderBottom]);

  return (
    <div className={`item ${className}`} style={itemStyle}>
      <div className="icon-details">
        <div className="icon12">
          <img
            className="gamepad-2-icon"
            loading="lazy"
            alt=""
            src={gamepad2}
          />
        </div>
        <div className="item-details">
          <div className="gtr-5">{gTR5}</div>
          <div className="gadget-gear">{gadgetGear}</div>
        </div>
      </div>
      <div className="price">
        <div className="price-value">{priceValue}</div>
        <div className="may-20232">17 May 2023</div>
      </div>
    </div>
  );
};

export default Item;
