import {
  FunctionComponent,
  useMemo,
  type CSSProperties,
  useCallback,
} from "react";
import { useNavigate } from "react-router-dom";
import "./BalanceGoals.css";

export type BalanceGoalsType = {
  className?: string;

  /** Style props */
  balanceGoalsMinWidth?: CSSProperties["minWidth"];
  lastChargeAlignSelf?: CSSProperties["alignSelf"];
};

const BalanceGoals: FunctionComponent<BalanceGoalsType> = ({
  className = "",
  balanceGoalsMinWidth,
  lastChargeAlignSelf,
}) => {
  const balanceGoalsStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: balanceGoalsMinWidth,
    };
  }, [balanceGoalsMinWidth]);

  const lastChargeStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: lastChargeAlignSelf,
    };
  }, [lastChargeAlignSelf]);

  const navigate = useNavigate();

  const onViewAllContainerClick = useCallback(() => {
    navigate("/108-bills");
  }, [navigate]);

  return (
    <div className={`balance-goals ${className}`} style={balanceGoalsStyle}>
      <div className="balance-goals1">
        <a className="upcoming-bill">Upcoming Bill</a>
        <div className="view-all-container">
          <div className="view-all2" onClick={onViewAllContainerClick}>
            <a className="view-all3">View All</a>
            <img
              className="chevron-right-icon7"
              loading="lazy"
              alt=""
              src="/chevronright-2.svg"
            />
          </div>
        </div>
      </div>
      <div className="contents">
        <div className="bill-one">
          <div className="details5">
            <div className="date1">
              <div className="may">May</div>
              <div className="empty-header">15</div>
            </div>
            <div className="subscription-name">
              <img
                className="figma-icon"
                loading="lazy"
                alt=""
                src="/figma.svg"
              />
              <div className="text4">
                <b className="figma-monthly">figma - Monthly</b>
                <div className="last-charge-">Last Charge - 14 May, 2022</div>
              </div>
            </div>
          </div>
          <div className="amount2">
            <b className="b3">$150</b>
          </div>
        </div>
        <div className="bill-one1">
          <div className="date-parent">
            <div className="date2">
              <div className="jun">Jun</div>
              <div className="div5">16</div>
            </div>
            <div className="frame-wrapper">
              <div className="target-logo-container-parent">
                <div className="target-logo-container">
                  <img
                    className="logo-icon"
                    loading="lazy"
                    alt=""
                    src="/logo.svg"
                  />
                  <div className="target-name-container">
                    <img
                      className="name-icon"
                      loading="lazy"
                      alt=""
                      src="/name.svg"
                    />
                  </div>
                </div>
                <b className="figma-monthly">Adobe - Yearly</b>
                <div className="last-charge-" style={lastChargeStyle}>
                  Last Charge - 17 Jun, 2023
                </div>
              </div>
            </div>
          </div>
          <div className="amount-wrapper">
            <div className="amount3">
              <b className="b3">$559</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BalanceGoals;
