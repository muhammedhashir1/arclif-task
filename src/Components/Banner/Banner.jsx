import React from "react";
import { Container } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <Container>
        <h5 className="para1Main">
          First impressions
          <span className="para1">
            First impressions matter,especially when
          </span>
        </h5>
        <h3 className="para2Main">
          First impressions matter,
          <span className="para2">
            especially when
            <br />
            you're trying to land clients.
          </span>
        </h3>

        <button className="btn1">Login</button>
        <button className="btn2">Signup</button>
      </Container>

      {/* <div className="icons">   
          <div>
            <img src={ICON1} className='icon1' alt="icon1.png" />
            <h4>First impression matter</h4>
            <small>especially when you're trying to land clients.</small>
          </div>
          <div>
            <img src={ICON2} className='icon2' alt="icon2.png" />
            <h4>First impression matter</h4>
            <small>especially when you're trying to land clients.</small>
          </div>
          <div>
            <img src={PERSON} className='icon3' alt="" />
          </div>
      </div> */}
      
    </div>
  );
};

export default Banner;
