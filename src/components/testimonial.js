import React from "react";
import Slide from "./slide";

const Testi = () => {
  return (
    <>
      <section id="Testi">
        <div className="container">
          <h2 className="text-center testi-text1">Testimonial</h2>
          <p className="text-center testi-text2">
            Berbagai review positif dari para pelanggan kami
          </p>
        </div>
        <Slide />
      </section>
    </>
  );
};

export default Testi;
