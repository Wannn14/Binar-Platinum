import React, {useRef, useState} from "react";
import Header from "../components/header";
import Foot from "../components/footer";
import axios from "axios";
import {Grid} from "react-loader-spinner";
import Fillter from "./fillter";
import {queryData, currencyFormat} from "../helper";
import {Link} from "react-router-dom";
import {Col} from "react-bootstrap";
import "./pages.css";
import carbg from "../assets/image/img_car.svg";
import notfound from "../assets/image/4x4.png";

const Hasil = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [emptyData, setEmptyData] = useState(false);

  const API_URL = "https://bootcamp-rent-cars.herokuapp.com";

  const namaMobil = useRef("");
  const category = useRef("");
  const harga = useRef("");
  const statusOrder = useRef("");

  const price = () => {
    switch (harga.current.value) {
      case "small":
        return {maxPrice: 400000};
      case "medium":
        return {minPrice: 400000, maxPrice: 600000};
      case "large":
        return {minPrice: 600000};
      default:
        return "";
    }
  };

  const getData = (e) => {
    e.preventDefault();

    const params = {
      name: namaMobil.current.value,
      category: category.current.value,
      minPrice: price().minPrice,
      maxPrice: price().maxPrice,
      isRented: statusOrder.current.value,
    };
    setLoading(true);
    setEmptyData(false);
    setCars([]);

    axios
      .get(`${API_URL}/customer/v2/car?${queryData(params)}`)
      .then((response) => {
        if (response.data.cars.length > 0) {
          setCars(response.data.cars);
        } else {
          setEmptyData(true);
        }

        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  console.log();

  const filterData = {
    getData,
    namaMobil,
    category,
    harga,
    statusOrder,
  };

  return (
    <>
      <Header />
      <section className="hero-section2">
        <div className="container">
          <div className="col-lg-6">
            <div className="hero-content2">
              <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
              <p>
                Selamat datang di Binar Car Rental. Kami menyediakan mobil
                kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                kebutuhanmu untuk sewa mobil selama 24 jam.
              </p>
              <a href={`/`} className="btn btn-success btn-back">
                Kembali
              </a>
            </div>
          </div>
        </div>
        <div className="hero-thumbnail2">
          <img src={carbg} alt="" />
        </div>
      </section>

      <div className="container p-5 mt-5">
        <Fillter {...filterData} />
        <Col lg={12} className="loadgrid">
          {loading ? (
            <Grid
              height="100"
              width="100"
              color="#4fa94d"
              ariaLabel="grid-loading"
              radius="12.5"
              wrapperStyle={{}}
              wrapperClass="grid-loading"
              visible={true}
            />
          ) : (
            <div className="row">
              {cars.map((car, index) => {
                return (
                  <div className="col-lg-4" key={index}>
                    <div className="card">
                      <div className="card-thumbnail">
                        <img
                          src={
                            car.image !== null
                              ? car.image
                              : "https://placehold.jp/24/cc9999/993333/350x200.png"
                          }
                          className="card-img-top"
                          alt="..."
                          loading="lazy"
                        />
                      </div>
                      <div className="card-deskripsi">
                        <h5 className="card-title">{car.name}</h5>
                        <p className="price">
                          Rp {currencyFormat(car.price)}/hari
                        </p>
                        <p className="deskripsi">
                          "Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Necessitatibus omnis blanditiis nobis modi odio
                          alias optio eum"
                        </p>
                      </div>
                      <Link
                        className="btn btn-success d-block btn-pilih-mobil"
                        to={`/Detail/${car.id}`}
                      >
                        Pilih Mobil
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          {emptyData && (
            <>
              <div>
                <img src={notfound} alt="" loading="lazy" />
                <div className="text-center data-allert">
                  Data Tidak Ditemukan
                </div>
              </div>
            </>
          )}
        </Col>
      </div>
      <Foot />
    </>
  );
};

export default Hasil;
