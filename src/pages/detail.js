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

  // const {
  //   RangePicker,

  // } = DatePicker;
  // const [dates, setDates] = useState(null);
  // const [value, setValue] = useState(null);
  // const disabledDate = (current) => {
  //   if (!dates) {
  //     return false;
  //   }
  //   const tooLate = dates[0] && current.diff(dates[0], 'days') > 7;
  //   const tooEarly = dates[1] && dates[1].diff(current, 'days') > 7;
  //   return !!tooEarly || !!tooLate;
  // };
  // const onOpenChange = (open) => {
  //   if (open) {
  //     setDates([null, null]);
  //   } else {
  //     setDates(null);
  //   }
  // };

//   const [startDate, setStartDate] = useState(new Date());
//   const [endDate, setEndDate] = useState(null);
//   const onChange = (dates) => {
//     const [start, end] = dates;
//     setStartDate(start);
//     setEndDate(end);

// console.log (dates,'ini tanggal')
// };

// const [startDate, setStartDate] = useState(null);
// const [endDate, setEndDate] = useState(null);

// console.log (dates,'ini tanggal')
//   // };
// console.log (endDate)

const [startDate, setStartDate] = useState(null);
const [endDate, setEndDate] = useState(null);

const handleStartDateChange = (date) => {
  setStartDate(date);
  setEndDate(null); // reset tanggal akhir saat tanggal awal berubah
};

const maxEndDate = startDate ? new Date(startDate.getTime() + 7 * 24 * 60 * 60 * 1000) : null;


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
                  {/* <RangePicker
      value={dates || value}
      disabledDate={disabledDate}
      onCalendarChange={(val) => setDates(val)}
      onChange={(val) => setValue(val)}
      onOpenChange={onOpenChange}
    /> */}

{/* <DatePicker
       selected={startDate}
       onChange={(date) => onChange(moment(date).format('YYYY-MM-DD'))}
       startDate={startDate}
       endDate={endDate}
       selectsRange
       inline
       dateFormat="dd-MM-yyyy" 
    /> */}

<>
      <DatePicker
        selected={startDate}
        onChange={handleStartDateChange}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        placeholderText="Tanggal Awal"
      />
      <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        maxDate={maxEndDate}
        placeholderText="Tanggal Akhir"
      />
    </>

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
