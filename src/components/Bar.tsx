import { FunctionComponent } from "react";
import "./Bar.css";

export type BarType = {
  className?: string;
};

const Bar: FunctionComponent<BarType> = ({ className = "" }) => {
  return (
    <div className={`bar ${className}`}>
      <div className="graph-bar-01">
        <div className="bar-container">
          <div className="bar1">
            <div className="bar-segment" />
            <div className="bar-base" />
          </div>
        </div>
        <div className="sun">17 Sun</div>
      </div>
      <div className="bar2">
        <div className="bar-container">
          <div className="bar1">
            <div className="bar-child" />
            <div className="bar-base" />
          </div>
        </div>
        <div className="sun">18 Mon</div>
      </div>
      <div className="bar4">
        <div className="bar-container">
          <div className="bar1">
            <div className="bar-inner" />
            <div className="bar-child1" />
          </div>
        </div>
        <div className="sun">19 Tue</div>
      </div>
      <div className="bar6">
        <div className="bar-container3">
          <div className="bar1">
            <div className="bar-segment" />
            <div className="bar-base" />
          </div>
        </div>
        <div className="sun">20 Wed</div>
      </div>
      <div className="bar8">
        <div className="bar-container">
          <div className="bar1">
            <div className="bar-child4" />
            <div className="bar-base" />
          </div>
        </div>
        <div className="sun">21 Thu</div>
      </div>
      <div className="bar10">
        <div className="bar-container">
          <div className="bar1">
            <div className="bar-child6" />
            <div className="bar-base" />
          </div>
        </div>
        <div className="sun">22 Fri</div>
      </div>
      <div className="bar12">
        <div className="bar-container">
          <div className="bar1">
            <div className="bar-child8" />
            <div className="bar-base" />
          </div>
        </div>
        <div className="sun">23 Sat</div>
      </div>
    </div>
  );
};

export default Bar;
