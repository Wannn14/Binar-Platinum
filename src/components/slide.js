import React, {Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../assets/image/img_photo.svg";
import img2 from "../assets/image/img_photo (1).svg";
import rate from "../assets/image/Rate.svg";
import left from "../assets/image/Left button.svg";
import right from "../assets/image/Right button.svg";
import {Card, Row, Col} from "react-bootstrap";

export default class PreviousNextMethods extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {
    const settings = {
      className: "center",
      centerMode: true,
      centerPadding: "60px",
      infinite: true,
      autoplay: true,
      pauseOnHover: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 1,
    };

    return (
      <>
        <div className="container">
          <Slider ref={(c) => (this.slider = c)} {...settings}>
            <Row>
              <Col lg={12}>
                <Card>
                  <Card.Body className="body-testi">
                    <div className="card_kiri">
                      <img src={img2} alt="" loading="lazy" />
                    </div>
                    <div className="card_kanan">
                      <div className="faq-icon">
                        <img src={rate} alt="" loading="lazy" />
                      </div>
                      <p>
                        “Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod lorem ipsum
                        dolor sit amet"
                      </p>
                      <p>John, Bromo</p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col lg={12}>
                <Card>
                  <Card.Body className="body-testi">
                    <div className="card_kiri">
                      <img src={img2} alt="" loading="lazy" />
                    </div>
                    <div className="card_kanan">
                      <div className="faq-icon">
                        <img src={rate} alt="" loading="lazy" />
                      </div>
                      <p>
                        “Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod lorem ipsum
                        dolor sit amet"
                      </p>
                      <p>John, Bromo</p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col lg={12}>
                <Card>
                  <Card.Body className="body-testi">
                    <div className="card_kiri">
                      <img src={img1} alt="" loading="lazy" />
                    </div>
                    <div className="card_kanan">
                      <div className="faq-icon">
                        <img src={rate} alt="" loading="lazy" />
                      </div>
                      <p>
                        “Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod lorem ipsum
                        dolor sit amet"
                      </p>
                      <p>John, Bromo</p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col lg={12}>
                <Card>
                  <Card.Body className="body-testi">
                    <div className="card_kiri">
                      <img src={img1} alt="" loading="lazy" />
                    </div>
                    <div className="card_kanan">
                      <div className="faq-icon">
                        <img src={rate} alt="" loading="lazy" />
                      </div>
                      <p>
                        “Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod lorem ipsum
                        dolor sit amet"
                      </p>
                      <p>John, Bromo</p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Slider>
          <div className="btnprevnext">
            <button className="btnprev">
              <img src={left} alt="" onClick={this.previous} loading="lazy" />
            </button>
            <button className="btnnext">
              <img src={right} alt="" onClick={this.next} loading="lazy" />
            </button>
          </div>
        </div>
      </>
    );
  }
}
