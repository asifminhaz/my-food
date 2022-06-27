import React from 'react';

const Menu = () => {
          return (
                    <div id='menu' className="about">
                    <div className="container">
                      <div className="row">
                        <div className="col-6">
                          <div className="about__img">
                            <img src="https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Pizza" />
                          </div>
                        </div>
                        <div className="col-6 p-25">
                          <h3>The Pizza Menu</h3>
                          <h1>CHICAGO Pizza</h1>
                          <p>
                          the Toppings for Chicago pizza are ground beef, sausage, pepperoni, onion, mushrooms, and green peppers, placed underneath the tomato sauce.
                          </p>
                          <div className="about__btn">
                            <a href="" className="btn btn-smart">
                              VIEW MORE
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
          );
};

export default Menu;