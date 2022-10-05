import React, { useState } from "react";
import { Container } from "react-bootstrap";
import LOGO from "../../Assets/logo.png";
import { AiFillCloseCircle } from "react-icons/ai";
import "./Banner.css";

const Banner = () => {
  const [openModal, setOpenModel] = useState(false)
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

        <button className="btn1" onClick={()=>{
          setOpenModel(true)
        }}>Login</button>
        <button className="btn2">Signup</button>
      </Container>
      {
      openModal &&
      <div className="popup">
        <div className="popup-header">
          <img src={LOGO} className="loginLogo" alt="" />
          <h5>Login</h5>
          <AiFillCloseCircle size={20} onClick={()=>{
            setOpenModel(false)
          }} />
        </div>
        <div className="popup-body">
          <input
            type="phone"
            className="inputPhone"
            placeholder="Mobile Number"
          />
          <input type="password" className="inputPsw" placeholder="Password" />
          <p className="forgot">Forgot Password?</p>
          <p className="login" onClick={()=>{
            setOpenModel(false)}} >Login</p>
        </div>
      </div>
      }
    </div>
  );
};


export default Banner;
