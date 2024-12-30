import { FunctionComponent, useCallback } from "react";
import InputSection from "../components/InputSection";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login: FunctionComponent = () => {
  const navigate = useNavigate();

  const onCreateAnAccountClick = useCallback(() => {
    navigate("/102-signup");
  }, [navigate]);

  return (
    <div className="login">
      <div className="frame-parent">
        <div className="frame-group">
          <div className="finebankio-wrapper">
            <h1 className="finebankio">
              <span className="fine">FINE</span>
              <span className="bank">bank.</span>
              <span className="fine">IO</span>
            </h1>
          </div>
          <InputSection />
        </div>
        <div className="create-an-account" onClick={onCreateAnAccountClick}>
          Create an account
        </div>
      </div>
    </div>
  );
};

export default Login;
