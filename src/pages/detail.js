import React, {useRef, useEffect, useState} from "react";
import Header from "../components/header";
import Foot from "../components/footer";
import {Container, Row, Col, Card} from "react-bootstrap";
import {useParams} from "react-router-dom";
import Axios from "axios";
import User from "../assets/image/fi_users.svg";

const Detail = () => {
  const [detail, setDetail] = useState({});

  let {id} = useParams();
  const baseUrl = "https://bootcamp-rent-cars.herokuapp.com/customer";

  const fetch = useRef(true);

  const getDetail = (id) => {
    Axios.get(`${baseUrl}/car/${id}`)
      .then((response) => {
        setDetail(response.data);
      })
      .catch((error) =>
        // handle error
        console.log(error)
      );
  };

  useEffect(() => {
    if (fetch.current) {
      fetch.current = false;
      getDetail(id);
    }
  }, [id]);

  return (
    <>
      <Header />
      <section className="hero-section">
        <div className="container">
          <div className="col-lg-12">
            <div className="hero-content">
              <h1 className="text-center">Detail Pencarian</h1>
            </div>
          </div>
        </div>
      </section>

      <Container className="boxMobil">
        <Row>
          <Col lg={7} md={12}>
            <Card>
              <h3>Tentang Paket</h3>
              <h3>Include</h3>
              <ul>
                <li>
                  Apa saja yang termasuk dalam paket misal durasi max 12 jam
                </li>
                <li>Sudah termasuk bensin selama 12 jam</li>
                <li>Sudah termasuk Tiket Wisata</li>
                <li>Sudah termasuk pajak</li>
              </ul>
              <h3>Exclude</h3>
              <ul>
                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                <li>
                  Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                  20.000/jam
                </li>
                <li>Tidak termasuk akomodasi penginapan</li>
              </ul>
              <h3>Refund, Reschedule, Overtime</h3>
              <ul>
                <li>Tidak termasuk biaya makan sopir Rp 75.0000/hari</li>
                <li>
                  Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                  20.000/jam
                </li>
                <li>Tidak termasuk akomodasi penginapan</li>
                <li>Tidak termasuk biaya makan sopir Rp 75.0000/hari</li>
                <li>
                  Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                  20.000/jam
                </li>
                <li>Tidak termasuk akomodasi penginapan</li>
                <li>Tidak termasuk biaya makan sopir Rp 75.0000/hari</li>
                <li>
                  Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                  20.000/jam
                </li>
                <li>Tidak termasuk akomodasi penginapan</li>
              </ul>
            </Card>
          </Col>
          <Col lg={5} md={12}>
            <Card>
              <img src={detail.image} alt="" loading="lazy" />
              <Card.Body>
                <Card.Title> {detail.name} </Card.Title>
                <div className="icon-user">
                  <img src={User} alt="" loading="lazy" />
                  <div>
                    {(() => {
                      switch (detail.category) {
                        case "small":
                          return "2-4 orang";
                        case "medium":
                          return "4-6 orang";
                        case "large":
                          return "6-8 orang";
                        default:
                          return "-";
                      }
                    })()}
                  </div>
                </div>

                <div className="nominal">
                  <h4>Total</h4>
                  <h4>Rp {detail.price} / Hari</h4>
                </div>
              </Card.Body>
            </Card>
            <a href={`/cari-mobil`} className="btn btn-success btn-detail">
              Kembali
            </a>
          </Col>
        </Row>
      </Container>
      <Foot />
    </>
  );
};

export default Detail;
