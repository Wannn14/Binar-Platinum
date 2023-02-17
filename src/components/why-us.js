import React from "react";
import icon24 from "../assets/image/icon_24hrs.svg";
import iconComplete from "../assets/image/icon_complete.svg";
import iconPrice from "../assets/image/icon_price.svg";
import iconProf from "../assets/image/icon_professional.svg";

const Why = () => {
  return (
    <>
      <section className="Why" id="Why">
        <div className="container">
          <div className="Why-title">
            <h3>Why Us</h3>
            <p>Mengapa harus pilih Binar Car Rental?</p>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="card Why-border">
                <div className="card-body Why-box">
                  <img src={iconComplete} alt="" loading="lazy" />
                  <h4>Mobil Lengkap</h4>
                  <p>
                    Tersedia banyak pilihan mobil,
                    <br /> kondisi masih baru, bersih dan terawat
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card Why-border">
                <div className="card-body Why-box">
                  <img src={iconPrice} alt="" loading="lazy" />
                  <h4>Harga Murah</h4>
                  <p>
                    Harga murah dan bersaing, bisa bandingkan harga kami dengan
                    rental mobil lain
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card Why-border">
                <div className="card-body Why-box">
                  <img src={icon24} alt="" loading="lazy" />
                  <h4>Layanan 24 Jam</h4>
                  <p>
                    Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami
                    juga tersedia di akhir minggu
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card Why-border">
                <div className="card-body Why-box">
                  <img src={iconProf} alt="" loading="lazy" />
                  <h4>Sopir Profesional</h4>
                  <p>
                    Sopir yang profesional, berpengalaman, jujur, ramah dan
                    selalu tepat waktu
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Why;
