import carbg from "../assets/image/img_car.svg";

const Banner = () => {
  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div className="col-lg-6">
            <div className="hero-content">
              <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
              <p>
                Selamat datang di Binar Car Rental. Kami menyediakan mobil
                kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                kebutuhanmu untuk sewa mobil selama 24 jam.
              </p>
              <a href={`/cari-mobil`} className="btn btn-success">
                Mulai Sewa Mobil
              </a>
            </div>
          </div>
        </div>
        <div className="hero-thumbnail">
          <img src={carbg} alt="" loading="lazy" />
        </div>
      </section>
    </>
  );
};

export default Banner;
