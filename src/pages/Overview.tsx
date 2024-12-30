import { FunctionComponent, useCallback } from "react";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import FrameComponent1 from "../components/FrameComponent1";
import { useNavigate } from "react-router-dom";
import BalanceGoals from "../components/BalanceGoals";
import Item from "../components/Item";
import Bar from "../components/Bar";
import ExpencesItem from "../components/ExpencesItem";
import "./Overview.css";

const Overview: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/1041-overview");
  }, [navigate]);

  const onViewAllTransactionsClick = useCallback(() => {
    navigate("/107-transactions");
  }, [navigate]);

  return (
    <div className="overview">
      <NavBar />
      <main className="header-parent">
        <Header showHelloTanzir />
        <section className="main-content">
          <div className="balance-transaction">
            <div className="balance-details">
              <div className="total-balance">
                <a className="total-balance1">Total Balance</a>
                <div className="content1">
                  <div className="details">
                    <div className="header">
                      <div className="header-labels">$240,399</div>
                      <a className="all-accounts">All Accounts</a>
                    </div>
                    <div className="account-type">
                      <div className="item-list">
                        <div className="account-type1">Account type</div>
                        <b className="credit-card">Credit Card</b>
                        <div className="card-type-spacer">
                          **** **** **** 2598
                        </div>
                      </div>
                      <div className="logo-and-amount">
                        <div className="logo">
                          <img
                            className="mastercard-icon"
                            loading="lazy"
                            alt=""
                            src="/mastercard@2x.png"
                          />
                        </div>
                        <div className="amount">
                          <b className="amount-value">$25000</b>
                          <FrameComponent1 />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slider-option">
                    <div className="previous">
                      <img
                        className="chevron-right-icon"
                        loading="lazy"
                        alt=""
                        src="/chevronright.svg"
                      />
                      <div className="card-type-spacer">Previous</div>
                    </div>
                    <div className="slider">
                      <div className="target-chart" />
                      <div className="achievement-circle" />
                      <div className="achievement-circle" />
                    </div>
                    <div className="next">
                      <div className="next1">Next</div>
                      <img
                        className="edit-icon"
                        alt=""
                        src="/chevronright-1.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="total-balance">
                <a className="total-balance1">Goals</a>
                <div className="content1">
                  <div className="header">
                    <div className="parent">
                      <div className="div">$20,000</div>
                      <div
                        className="edit-wrapper"
                        onClick={onFrameContainerClick}
                      >
                        <img
                          className="edit-icon"
                          loading="lazy"
                          alt=""
                          src="/edit.svg"
                        />
                      </div>
                    </div>
                    <div className="may-2023">May, 2023</div>
                  </div>
                  <div className="details1">
                    <div className="left-content">
                      <div className="target-achieved">
                        <img
                          className="award-icon"
                          loading="lazy"
                          alt=""
                          src="/award.svg"
                        />
                        <div className="text">
                          <div className="target-achieved1">
                            Target Achieved
                          </div>
                          <b className="empty-target">$12,500</b>
                        </div>
                      </div>
                      <div className="target-achieved">
                        <img
                          className="award-icon"
                          loading="lazy"
                          alt=""
                          src="/octicongoal16.svg"
                        />
                        <div className="text">
                          <div className="target-achieved1">
                            This month Target
                          </div>
                          <b className="empty-target">$20,000</b>
                        </div>
                      </div>
                    </div>
                    <div className="target-vs-achievement-meter">
                      <div className="graph">
                        <div className="graph1">
                          <div className="graph-circles">
                            <img
                              className="graph-circles-child"
                              alt=""
                              src="/ellipse-23.svg"
                            />
                            <img
                              className="graph-circles-item"
                              alt=""
                              src="/ellipse-24.svg"
                            />
                          </div>
                          <img
                            className="meter-icon"
                            loading="lazy"
                            alt=""
                            src="/meter.svg"
                          />
                        </div>
                        <div className="target-range">
                          <div className="div1">$0</div>
                          <div className="k">12K</div>
                          <div className="k1">$20k</div>
                        </div>
                      </div>
                      <div className="target-vs-achievement">
                        Target vs Achievement
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <BalanceGoals />
            </div>
            <div className="recent-transaction-parent">
              <div className="recent-transaction">
                <div className="headet">
                  <h3 className="recent-transaction1">Recent Transaction</h3>
                  <div
                    className="view-all-transactions"
                    onClick={onViewAllTransactionsClick}
                  >
                    <a className="view-all">View All</a>
                    <img
                      className="edit-icon"
                      alt=""
                      src="/chevronright-2.svg"
                    />
                  </div>
                </div>
                <div className="content4">
                  <div className="menu-tab">
                    <div className="all">
                      <b className="all1">All</b>
                    </div>
                    <div className="revenue">
                      <b className="all1">Revenue</b>
                    </div>
                    <div className="expenses">
                      <b className="expenses1">Expenses</b>
                    </div>
                  </div>
                  <div className="item-list">
                    <Item
                      gamepad2="/gamepad2.svg"
                      gTR5="GTR 5"
                      gadgetGear={`Gadget & Gear`}
                      priceValue="$160.00"
                    />
                    <Item
                      itemBorderBottom="1px solid #f3f3f3"
                      gamepad2="/shopping.svg"
                      gTR5="Polo Shirt"
                      gadgetGear="XL fashions"
                      priceValue="$20.00"
                    />
                    <Item
                      itemBorderBottom="1px solid #f3f3f3"
                      gamepad2="/food.svg"
                      gTR5="Biriyani"
                      gadgetGear="Hajir Biriyani"
                      priceValue="$10.00"
                    />
                    <Item
                      itemBorderBottom="1px solid #f3f3f3"
                      gamepad2="/trasnport.svg"
                      gTR5="Taxi Fare"
                      gadgetGear="Uber"
                      priceValue="$12.00"
                    />
                    <Item
                      itemBorderBottom="unset"
                      gamepad2="/shopping.svg"
                      gTR5="Keyboard"
                      gadgetGear={`Gadget & Gear`}
                      priceValue="$22.00"
                    />
                  </div>
                </div>
              </div>
              <div className="statistics-container">
                <div className="statistics-wrapper">
                  <h3 className="statistics">Statistics</h3>
                  <div className="statistics-details">
                    <div className="header2">
                      <div className="comparison-header">
                        <div className="weekly-comparison">
                          Weekly Comparison
                        </div>
                        <img
                          className="award-icon"
                          alt=""
                          src="/chevrondown.svg"
                        />
                      </div>
                      <div className="weekly-performance">
                        <div className="week-comparison">
                          <div className="slider">
                            <div className="week-values">
                              <div className="week-bar" />
                            </div>
                            <div className="this-week">This week</div>
                          </div>
                          <div className="slider">
                            <div className="week-values">
                              <div className="frame-child" />
                            </div>
                            <div className="this-week">Last week</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="weekly-statistics">
                      <div className="k2">$250k</div>
                      <div className="weekly-statistics-inner">
                        <div className="frame-item" />
                      </div>
                      <Bar />
                    </div>
                    <div className="weekly-statistics1">
                      <div className="weekday-label">$50k</div>
                      <div className="weekly-statistics-inner">
                        <div className="frame-item" />
                      </div>
                    </div>
                    <div className="weekly-statistics1">
                      <div className="weekday-label">$10k</div>
                      <div className="weekly-statistics-inner">
                        <div className="frame-item" />
                      </div>
                    </div>
                    <div className="weekly-statistics1">
                      <div className="weekday-label">$2k</div>
                      <div className="weekly-statistics-inner">
                        <div className="frame-item" />
                      </div>
                    </div>
                    <div className="weekly-statistics1">
                      <div className="weekday-label">$0</div>
                      <div className="weekly-statistics-inner">
                        <div className="frame-item" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="expenses-breakdown">
                  <div className="header3">
                    <h3 className="recent-transaction1">Expenses Breakdown</h3>
                    <div className="compare-to-last">
                      *Compare to last month
                    </div>
                  </div>
                  <div className="content5">
                    <div className="all-item">
                      <div className="top-line">
                        <ExpencesItem
                          housing="/housing.svg"
                          housing1="Housing"
                          nameSeparator="$250.00"
                          changeValue="15%*"
                          upArrow="/up-arrow.svg"
                          arrowRight="/arrowright.svg"
                        />
                        <ExpencesItem
                          housing="/food-1.svg"
                          housing1="Food"
                          nameSeparator="$350.00"
                          changeValue="08%*"
                          upArrow="/down-arrow.svg"
                          arrowRight="/arrowright-1.svg"
                        />
                        <ExpencesItem
                          housing="/trasnport-1.svg"
                          housing1="Transportation"
                          nameSeparator="$50.00"
                          changeValue="12%*"
                          upArrow="/down-arrow.svg"
                          arrowRight="/arrowright-1.svg"
                        />
                      </div>
                      <div className="top-line">
                        <ExpencesItem
                          housing="/movie.svg"
                          housing1="Entertainment"
                          nameSeparator="$80.00"
                          changeValue="15%*"
                          upArrow="/down-arrow.svg"
                          arrowRight="/arrowright-1.svg"
                        />
                        <ExpencesItem
                          housing="/shopping-2.svg"
                          housing1="Shopping"
                          nameSeparator="$420.00"
                          changeValue="25%*"
                          upArrow="/up-arrow.svg"
                          arrowRight="/arrowright-1.svg"
                        />
                        <ExpencesItem
                          housing="/others.svg"
                          housing1="Others"
                          nameSeparator="$650.00"
                          changeValue="23%*"
                          upArrow="/up-arrow.svg"
                          arrowRight="/arrowright-1.svg"
                        />
                      </div>
                      <img
                        className="split-line-icon"
                        alt=""
                        src="/split-line.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Overview;
