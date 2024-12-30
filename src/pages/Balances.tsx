import { FunctionComponent } from "react";
import NavBar from "../components/NavBar";
import ContentArea from "../components/ContentArea";
import "./Balances.css";

const Balances: FunctionComponent = () => {
  return (
    <div className="balances">
      <NavBar menuMargin="0" />
      <ContentArea />
    </div>
  );
};

export default Balances;
