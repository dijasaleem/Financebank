import { FunctionComponent } from "react";
import "./CoverPage1.css";

const CoverPage1: FunctionComponent = () => {
  return (
    <div className="cover-page-01">
      <div className="main">
        <div className="content">
          <img className="figma-logo-icon" loading="lazy" alt="" />
          <div className="title">
            <div className="subtitle">
              <div className="description">
                <div className="full-free-to">{`FULL FREE TO DOWNLOAD `}</div>
                <div className="dashboard">
                  <b className="financial-management-dashboard-container">
                    <p className="financial">Financial</p>
                    <p className="financial">Management</p>
                    <p className="financial">Dashboard</p>
                  </b>
                  <div className="earning-expenses-goal-container">
                    <p className="financial">Earning, Expenses, Goal,</p>
                    <p className="financial">Transaction UI Kits</p>
                  </div>
                </div>
              </div>
              <div className="components">
                <div className="structure">
                  <b className="separator">{`15 `}</b>
                  <div className="screen">Screen</div>
                </div>
                <div className="structure">
                  <b className="b">100+</b>
                  <div className="components1">Components</div>
                </div>
              </div>
            </div>
            <div className="profile-link">
              <img className="avatar-icon" alt="" />
              <a
                className="mahmud-saeef"
                href="mailto:saeefalmahmud@gmail.com"
                target="_blank"
              >
                mahmud Saeef
              </a>
            </div>
          </div>
        </div>
      </div>
      <img className="background-icon" alt="" />
    </div>
  );
};

export default CoverPage1;
