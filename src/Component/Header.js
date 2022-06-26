import React from 'react';
import Navber from './Navber';

const Header = () => {
          return (
                    <div className="banner">
                    <Navber></Navber>
                    <div className="banner__content">
                      <div className="container">
                        <div className="banner__text">
                          <h3>Food Delivery</h3>
                          <h1>The Veg Tickle</h1>
                          <p>
                            Checkout our all foods and order quickly we are always ready to supply our clients orders
                          </p>
                          <div className="banner__btn">
                            <a href="" className="btn btn-smart">
                              DEVLERY NOW
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
          );
};

export default Header;