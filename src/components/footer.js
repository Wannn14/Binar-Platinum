import React from "react";
import fb from "../assets/image/icon_facebook.svg";
import ig from "../assets/image/icon_instagram.svg";
import mail from "../assets/image/icon_mail.svg";
import tweet from "../assets/image/icon_twitter.svg";
import twitch from "../assets/image/icon_twitch.svg";
import logo from "../assets/image/logo.svg";

const Foot = () => {
  return (
    <>
      <footer className="text-center text-lg-start bg-white">
        <section>
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 text-foot1">
                <p className="font-weight-bold">
                  Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000
                </p>
                <p>binarcarrental@gmail.com</p>
                <p>081-233-334-808</p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 navigation">
                <ul>
                  <li>Our services</li>
                </ul>
                <ul>
                  <li>Why Us</li>
                </ul>
                <ul>
                  <li>Testimonial</li>
                </ul>
                <ul>
                  <li>FAQ</li>
                </ul>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 text-foot2">
                <h6>Connect with us </h6>
                <div className="media-icon">
                  <img src={fb} alt="" />
                  <img src={ig} alt="" />
                  <img src={mail} alt="" />
                  <img src={tweet} alt="" />
                  <img src={twitch} alt="" />
                </div>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 text-foot2">
                <h6>Copyright Binar 2022</h6>
                <div>
                  <img src={logo} alt="" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Foot;
