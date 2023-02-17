import React from "react";

const mulaiSewa = () => {
  return (
    <>
      <section className="cta-banner">
        <div className="container">
          <div className="cta-body text-center">
            <h3>Sewa Mobil di (Lokasimu) Sekarang</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua,
            </p>
            <a href={`/cari-mobil/`} className="btn btn-success btn-cta">
              Mulai Sewa Mobil
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default mulaiSewa;
