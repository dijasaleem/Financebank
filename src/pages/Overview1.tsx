import { FunctionComponent, useCallback } from "react";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import FrameComponent1 from "../components/FrameComponent1";
import { useNavigate } from "react-router-dom";
import Item from "../components/Item";
import BalanceGoals from "../components/BalanceGoals";
import Bar from "../components/Bar";
import PopupInput1 from "../components/PopupInput1";
import ExpencesItem from "../components/ExpencesItem";
import "./Overview1.css";

const Overview1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onViewAllTransactionsClick = useCallback(() => {
    navigate("/107-transactions");
  }, [navigate]);

  return (
    <div className="overview1">
      <div className="statistics1">Statistics</div>
      <NavBar menuMargin="unset" />
      <main className="page-content">
        <Header showHelloTanzir helloTanzirTextDecoration="none" />
        <section className="balance-transaction-parent">
          <div className="balance-transaction1">
            <div className="total-balance2">
              <a className="total-balance3">Total Balance</a>
              <div className="content6">
                <div className="details2">
                  <div className="header4">
                    <div className="account-type-label">$240,399</div>
                    <a className="all-accounts1">All Accounts</a>
                  </div>
                  <div className="account-type2">
                    <div className="content7">
                      <div className="account-type3">Account type</div>
                      <b className="credit-card1">Credit Card</b>
                      <div className="div2">**** **** **** 2598</div>
                    </div>
                    <div className="logo-and-amount1">
                      <div className="logo1">
                        <img
                          className="mastercard-icon1"
                          loading="lazy"
                          alt=""
                          src="/mastercard@2x.png"
                        />
                      </div>
                      <div className="amount1">
                        <b className="amount-label">$25000</b>
                        <FrameComponent1 />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-option1">
                  <div className="previous2">
                    <img
                      className="chevron-right-icon3"
                      alt=""
                      src="/chevronright.svg"
                    />
                    <div className="div2">Previous</div>
                  </div>
                  <div className="slider1">
                    <div className="slider-child" />
                    <div className="slider-item" />
                    <div className="slider-item" />
                  </div>
                  <div className="next2">
                    <div className="next3">Next</div>
                    <img
                      className="chevron-right-icon4"
                      alt=""
                      src="/chevronright-1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="total-balance2">
              <div className="headet1">
                <h3 className="recent-transaction3">Recent Transaction</h3>
                <div
                  className="view-all-transactions1"
                  onClick={onViewAllTransactionsClick}
                >
                  <a className="view-all1">View All</a>
                  <img
                    className="chevron-right-icon4"
                    alt=""
                    src="/chevronright-2.svg"
                  />
                </div>
              </div>
              <div className="content8">
                <div className="menu-tab1">
                  <div className="all2">
                    <b className="all3">All</b>
                  </div>
                  <div className="revenue2">
                    <b className="all3">Revenue</b>
                  </div>
                  <div className="expenses3">
                    <b className="expenses4">Expenses</b>
                  </div>
                </div>
                <div className="item-list1">
                  <Item
                    itemBorderBottom="1px solid #f3f3f3"
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
          </div>
          <div className="goals-statistics">
            <div className="goals-parent">
              <div className="goals2">
                <a className="total-balance3">Goals</a>
                <div className="content6">
                  <div className="header4">
                    <div className="bill-date-edit">
                      <div className="bill-month-year">$20,000</div>
                      <div className="bill-name-edit">
                        <img
                          className="chevron-right-icon4"
                          loading="lazy"
                          alt=""
                          src="/edit.svg"
                        />
                      </div>
                    </div>
                    <div className="may-20231">May, 2023</div>
                  </div>
                  <div className="details3">
                    <div className="left-content1">
                      <div className="target-achieved2">
                        <img
                          className="award-icon1"
                          loading="lazy"
                          alt=""
                          src="/award.svg"
                        />
                        <div className="text2">
                          <div className="target-achieved3">
                            Target Achieved
                          </div>
                          <b className="b1">$12,500</b>
                        </div>
                      </div>
                      <div className="target-achieved2">
                        <img
                          className="award-icon1"
                          loading="lazy"
                          alt=""
                          src="/octicongoal16.svg"
                        />
                        <div className="text2">
                          <div className="target-achieved3">
                            This month Target
                          </div>
                          <b className="b1">$20,000</b>
                        </div>
                      </div>
                    </div>
                    <div className="target-vs-achievement-meter1">
                      <div className="graph2">
                        <div className="graph3">
                          <div className="graph-points">
                            <img
                              className="graph-points-child"
                              alt=""
                              src="/ellipse-23.svg"
                            />
                            <img
                              className="graph-points-item"
                              alt=""
                              src="/ellipse-24.svg"
                            />
                          </div>
                          <img
                            className="meter-icon1"
                            loading="lazy"
                            alt=""
                            src="/meter.svg"
                          />
                        </div>
                        <div className="target-range1">
                          <div className="empty-graph-range">$0</div>
                          <div className="k6">12K</div>
                          <div className="k7">$20k</div>
                        </div>
                      </div>
                      <div className="target-vs-achievement1">
                        Target vs Achievement
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <BalanceGoals
                balanceGoalsMinWidth="229px"
                lastChargeAlignSelf="stretch"
              />
            </div>
            <div className="statistics2">
              <div className="statistics-details1">
                <div className="header6">
                  <div className="week-values1">
                    <div className="weekly-comparison1">Weekly Comparison</div>
                    <img
                      className="award-icon1"
                      loading="lazy"
                      alt=""
                      src="/chevrondown.svg"
                    />
                  </div>
                  <div className="week-comparison1">
                    <div className="comparison-visual">
                      <div className="slider1">
                        <div className="value-boxes-wrapper">
                          <div className="value-boxes" />
                        </div>
                        <div className="this-week1">This week</div>
                      </div>
                      <div className="slider1">
                        <div className="value-boxes-wrapper">
                          <div className="week-comparison-child" />
                        </div>
                        <div className="this-week1">Last week</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="max-value">
                  <div className="k8">$250k</div>
                  <div className="max-value-inner">
                    <div className="frame-inner" />
                  </div>
                  <Bar />
                </div>
                <div className="graph-bars">
                  <div className="label-values">$50k</div>
                  <div className="max-value-inner">
                    <div className="frame-inner" />
                  </div>
                </div>
                <div className="graph-bars">
                  <div className="label-values">$10k</div>
                  <div className="max-value-inner">
                    <div className="frame-inner" />
                  </div>
                </div>
                <div className="graph-bars">
                  <div className="label-values">$2k</div>
                  <div className="max-value-inner">
                    <div className="frame-inner" />
                  </div>
                </div>
                <div className="graph-bars">
                  <div className="label-values">$0</div>
                  <div className="max-value-inner">
                    <div className="frame-inner" />
                  </div>
                </div>
                <PopupInput1 />
              </div>
              <div className="expenses-breakdown2">
                <div className="header7">
                  <h3 className="recent-transaction3">Expenses Breakdown</h3>
                  <div className="compare-to-last1">*Compare to last month</div>
                </div>
                <div className="content10">
                  <div className="all-item1">
                    <div className="top-line1">
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
                    <div className="top-line1">
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
                      className="split-line-icon1"
                      alt=""
                      src="/split-line.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rectangle-div" />
        </section>
      </main>
    </div>
  );
};

export default Overview1;
