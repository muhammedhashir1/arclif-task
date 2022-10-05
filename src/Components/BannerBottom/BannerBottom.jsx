import React from "react";
import { Container } from "react-bootstrap";
import ICON1 from "../../Assets/icon1.png";
import ICON2 from "../../Assets/icon2.png";
import PERSON from "../../Assets/person.png";
import "./BannerBottom.css";

const BannerBottom = () => {
  return (
    <div className="bannerBottomMain">
      <Container>
        <div className="bannerBottomFlex">
          <div className="bannerBottomOne">
            <div>
              <img src={ICON1} className="icon1" alt="" />
            </div>
            <div>
              <h4>First impression matter</h4>
              <small>especially when you're trying to land clients.</small>
            </div>
          </div>
          <div className="bannerBottomOne">
            <div>
              <img src={ICON2} className="icon1" alt="" />
            </div>
            <div>
              <h4>First impression matter</h4>
              <small>especially when you're trying to land clients.</small>
            </div>
          </div>
          <div className="banBotPerson">
            <img src={PERSON} className="icon3 img-fluid" alt="" />
          </div>
        </div>
      </Container>
    </div>

    // <div className="bannerbottom">
    //   <div className="ban-btm-main-flex">
    //     <div className="ban-btm-one">
    //       <div className="ban-btm-set">
    //         <div>
    //           <img src={ICON1} className="icon1" alt="" />
    //         </div>
    //         <div>
    //           <h4>First impression matter</h4>
    //           <small>especially when you're trying to land clients.</small>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="ban-btm-one">
    //       <div className="ban-btm-set">
    //         <div>
    //           <img src={ICON2} className="icon2" alt="" />
    //         </div>
    //         <div>
    //           <h4>First impression matter</h4>
    //           <small>especially when you're trying to land clients.</small>
    //         </div>
    //       </div>
    //     </div>
    //     <div>
    //       <img src={PERSON} className="icon3" alt="" />
    //     </div>
    //   </div>
    // </div>
    // <div className="bannerbottom">
    //   <Container>
    //     <div className="ban-btm-flex">
    //       <div className="one">
    //         <div className="ban-btm-one">
    //           <div>
    //             <img src={ICON1} className="icon1" alt="icon1.png" />
    //           </div>
    //           <div className="ban-btm-text1">
    //             <h4>First impression matter</h4>
    //             <small>especially when you're trying to land clients.</small>
    //           </div>
    //         </div>
    //         <div className="ban-btm-one">
    //           <div>
    //             <img src={ICON2} className="icon2" alt="icon2.png" />
    //           </div>
    //           <div className="ban-btm-text1">
    //             <h4>First impression matter</h4>
    //             <small>especially when you're trying to land clients.</small>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="ban-btm-pic">
    //         <div>
    //           <img src={PERSON} className="icon3" alt="" />
    //         </div>
    //       </div>
    //     </div>
    //   </Container>
    // </div>
  );
};

export default BannerBottom;
