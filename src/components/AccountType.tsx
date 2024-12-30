import { FunctionComponent } from "react";
import Button from "./Button";
import "./AccountType.css";

export type AccountTypeType = {
  className?: string;
  creditCard?: string;
  masterCard?: string;
  showIcon?: boolean;
  accountMask?: string;
};

const AccountType: FunctionComponent<AccountTypeType> = ({
  className = "",
  creditCard,
  masterCard,
  showIcon,
  accountMask,
}) => {
  return (
    <div className={`account-type4 ${className}`}>
      <div className="header8">
        <b className="credit-card2">{creditCard}</b>
        <div className="type">
          <div className="master-card-wrapper">
            <div className="master-card">{masterCard}</div>
          </div>
          {showIcon && (
            <div className="icon8">
              <img
                className="mastercard-icon2"
                loading="lazy"
                alt=""
                src="/mastercard@2x.png"
              />
            </div>
          )}
        </div>
      </div>
      <div className="content11">
        <div className="account-details1">
          <div className="account-number">
            <div className="account-mask">{accountMask}</div>
            <div className="account-number1">Account Number</div>
          </div>
          <div className="account-number">
            <div className="balance-mask">$25000</div>
            <div className="total-amount1">Total amount</div>
          </div>
        </div>
        <div className="footer">
          <div className="remove">Remove</div>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default AccountType;
