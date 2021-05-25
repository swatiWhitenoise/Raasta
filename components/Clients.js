import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import "../../node_modules/react-multi-carousel/lib/styles.css";

class Clients extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
     <div className="client-logo">
      <Carousel
        additionalTransfrom={0}
        arrows={false}
        autoPlay
        autoPlaySpeed={2000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        partialVisible={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 5,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
          },
        }}
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        <div className="item">
                <img src="images/ISB.png" alt="ISB" />
              </div>
              <div className="item">
                <img src="images/uber.png" alt="Uber" />
              </div>
              <div className="item">
                <img src="images/Google.png" alt="Google" />
              </div>
              <div className="item">
                <img src="images/facebook.png" alt="Facebook" />
              </div>
              <div className="item">
                <img src="images/Microsoft.png" alt="Microsoft" />
              </div>
              <div className="item">
                <img src="images/Swiggy.png" alt="Swiggy" />
              </div>
              <div className="item">
                <img
                  src="images/Hindustan_Unilever.png"
                  alt="Hindustan_Unilever"
                />
              </div>
              <div className="item">
                <img src="images/Dr._Reddy's.png" alt="Dr. Reddy" />
              </div>
              <div className="item">
                <img src="images/HSBC.png" alt="HSBC" />
              </div>
              <div className="item">
                <img src="images/tcs-logo.png" alt="TCS" />
              </div>
      </Carousel>
     </div>
    );
  }
}
export default Clients;
