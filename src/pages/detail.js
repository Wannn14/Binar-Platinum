import React, {useRef, useEffect, useState} from "react";
import Header from "../components/header";
import Foot from "../components/footer";
import {Container, Row, Col, Card} from "react-bootstrap";
import {useParams} from "react-router-dom";
import Axios from "axios";
import User from "../assets/image/fi_users.svg";
// import { DateRangePicker } from 'rsuite';
// import {DatePicker} from 'antd';
// import Button from "react-bootstrap/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import moment from "moment";
import { add, endOfDay, min, startOfDay } from "date-fns";

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


const [range, setRange] = useState([ new Date(), add( new Date(), { days: 7 } ) ] );

  const onRangeChange = (range) => {
    if (7 && range[1]) {
      //  Determine the max date
      const maxDate = add(range[0], { days: 6 });
      //  Then, choose between max value and actual value
      range[1] = min([maxDate, range[1]]);
    }

    // Ensure that we include info from the start of the day
    range[0] = startOfDay(range[0]);

    if (range[1]) {
      // Ensure that we include info until the end of the day
      range[1] = endOfDay(range[1]);
    }

    setRange(range);
    console.log()
  };
  const dataKurang = range[1]-range[0];
  const dataSamain = Math.ceil(dataKurang / (1000 * 3600 * 24)) 
console.log(dataSamain,'ini jumlah tanggal')

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
                <div className="datebox">
                  <h3>Tentukan lama sewa mobil (max. 7 hari)</h3>
                </div>
                <div className="date">
   
<DatePicker
              showIcon
                    selected={range[0]}
                    startDate={range[0]}
                    endDate={range[1]}
                    onChange={onRangeChange}
                    selectsRange
                    // inline
                  />

                  </div>
                <div className="nominal">
                  <h4>Total</h4>
                  <h4>Rp {detail.price} / Hari</h4>
                </div>
                <a href={`/pembayaran`} className="btn btn-success btn-detail">
                  Lanjutkan Pembayaran
                </a>
                {/* <Button variant="success" size="sm">
                  Lanjutkan Pembayaran
                </Button> */}
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
