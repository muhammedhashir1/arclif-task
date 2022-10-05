import React from 'react'
import GP from "../../Assets/gp.png";
import AS from "../../Assets/as.png";
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="sectionLeft">
          <div className="sectionOne">
            <div>
              <h3>Business Consulting</h3>
              <p className="para">
              Our eminent clientele is spread across the world. Business Consulting is your perfect partner to handle your key operations with a passion to deliver prolific results without compromising on quality at any stage.
              </p>
            </div>
            <div className="available">
              <img src={GP}  alt="Google Playstore" />
              <img src={AS}  alt="Apple Store" />
            </div>
          </div>
        </div>
        <hr />
        <div className="copyright">
          <div className="copyrightLeft">
            <p>© BusinessConsulting 2022 . All Rights Reserved</p>
          </div>
          <div className="copyrightRight ">
            <p className='me-5' >About</p>
            <p className='me-5'>Contact Us</p>
            <p className='me-5'>Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer