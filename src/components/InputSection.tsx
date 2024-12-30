import { FunctionComponent, useCallback } from "react";
import Input1 from "./Input1";
import { useNavigate } from "react-router-dom";
import RemindMe from "./RemindMe";
import Buttonprimary from "./Buttonprimary";
import Buttonsecondary from "./Buttonsecondary";
import "./InputSection.css";

export type InputSectionType = {
  className?: string;
};

const InputSection: FunctionComponent<InputSectionType> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onRightTextClick = useCallback(() => {
    navigate("/103-forgot-password");
  }, [navigate]);

  return (
    <form className={`input-section ${className}`}>
      <div className="login1">
        <div className="input1">
          <div className="email">
            <div className="label1">Email Address</div>
            <Input1 active type="Name-Email" />
          </div>
          <div className="password">
            <div className="header12">
              <div className="label2">Password</div>
              <div className="right-text" onClick={onRightTextClick}>
                Forgot Password?
              </div>
            </div>
            <div className="input2">
              <div className="text6">●●●●●●●●●●●●●●</div>
              <img className="iconeye" alt="" src="/iconeye.svg" />
            </div>
          </div>
        </div>
        <div className="button2">
          <RemindMe active />
          <Buttonprimary active />
        </div>
      </div>
      <div className="devider">
        <div className="devider-child" />
        <div className="sign-in-with">
          <div className="or-sign-in">or sign in with</div>
        </div>
      </div>
      <Buttonsecondary icon />
    </form>
  );
};

export default InputSection;
