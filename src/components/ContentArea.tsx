import { FunctionComponent } from "react";
import Header from "./Header";
import AccountType from "./AccountType";
import Visacard from "./Visacard";
import Button from "./Button";
import ButtonBig from "./ButtonBig";
import "./ContentArea.css";

export type ContentAreaType = {
  className?: string;
};

const ContentArea: FunctionComponent<ContentAreaType> = ({
  className = "",
}) => {
  return (
    <main className={`content-area ${className}`}>
      <Header showHelloTanzir={false} helloTanzirTextDecoration="unset" />
      <section className="balances-wrapper">
        <div className="balances1">
          <a className="balances2">Balances</a>
          <div className="account-type5">
            <AccountType
              creditCard="Credit Card"
              masterCard="Master Card"
              showIcon
              accountMask="3388 4556  8860 8***"
            />
            <div className="account-type6">
              <div className="header9">
                <b className="credit-card3">Checking</b>
                <div className="type1">
                  <div className="master-card-container">
                    <div className="master-card1">AB Bank Ltd</div>
                  </div>
                  <div className="icon9">
                    <Visacard />
                  </div>
                </div>
              </div>
              <div className="content12">
                <div className="account-details2">
                  <div className="account-number2">
                    <div className="div3">693 456 69 9****</div>
                    <div className="account-number3">Account Number</div>
                  </div>
                  <div className="account-number2">
                    <div className="div4">$25000</div>
                    <div className="total-amount3">Total amount</div>
                  </div>
                </div>
                <div className="footer1">
                  <div className="remove1">Remove</div>
                  <Button />
                </div>
              </div>
            </div>
            <AccountType
              creditCard="savings"
              masterCard="Brac Bank Ltd."
              showIcon={false}
              accountMask="133 456  886 8****"
            />
            <AccountType
              creditCard="Investment"
              masterCard="AB Bank Ltd"
              showIcon={false}
              accountMask="698 456  866 2****"
            />
            <AccountType
              creditCard="Loan"
              masterCard="City Bank Ltd."
              showIcon={false}
              accountMask="363 456  896 6****"
            />
            <div className="add-account">
              <div className="button1">
                <ButtonBig addAccounts="Add accounts" />
                <div className="account-buttons">
                  <div className="edit-accounts">Edit Accounts</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContentArea;
