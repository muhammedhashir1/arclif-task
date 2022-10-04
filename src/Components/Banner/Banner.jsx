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
        <div className='btn'>
        <button className='btn1'>Login</button>
        <button className='btn2'>Signup</button>
        </div>
        
      </Container>
    </div>
  );
};

export default Banner;
