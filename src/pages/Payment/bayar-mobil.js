import React, {useState, useEffect} from "react";
import Header from "../../components/header";
import Foot from "../../components/footer";
import "./bayar.css";
import Step from "../../assets/image/step.png";
import {Row, Col, Button, Container, Card, ListGroup} from "react-bootstrap";
import {FaArrowLeft, FaAngleUp, FaAngleDown} from "react-icons/fa";
import {FiUsers} from "react-icons/fi";
import Check from '../../assets/image/check.svg';
import axios from "axios";
import moment from "moment";
import { useNavigate } from "react-router-dom";


const Bayar = () => {
  const [show, setShow] = useState(true);
  const [selected, setSelected] = useState();
  const [cars, setCars] = useState('');

  const baseUrl = "https://bootcamp-rent-cars.herokuapp.com/customer"
  
  
  const getCars = () => {
      const token = localStorage.getItem ('access_token')
      const config = {
          headers:{
              access_token: token
          },
         
      }
    const detailCar = localStorage.getItem("detailCar")
    console.log('disini saya console', detailCar)
    const detailCarsParsed = JSON.parse(detailCar)
    console.log("saya console", detailCarsParsed)
    axios
        .get(`${baseUrl}/order/${detailCarsParsed.id}`,config)
        .then((response) => {
          setCars(response.data)
         console.log(response.data)
        })
        .catch((error) => console.log(error));
      }
      
      useEffect(()=>{getCars()},[])

    const getCarCategory = (Car) => {
      if (Car && Car.Car){
        switch (Car.Car.category) {
          case "small":
            return "2-4 orang";
          case "medium":
            return "4-6 orang";
          case "large":
            return "6-8 orang";
          default:
            return "-";
        }
      }
      return "-"

    }
      
  
  const navigate = useNavigate();

  const selectClick = (index) => { setSelected(index) };


  return (
    <>
      <Header />
      <div className="payment">
        <div className="container">
          <Col>
            <Row>
              <div className="col-lg-8">
                <button className="fs-6 fw-bold btn-previous" onClick={() => navigate ("/Detail/:id")}>
                  <FaArrowLeft className="me-3 mb-1" />
                  Pembayaran
                </button>
              </div>
              <div className="col-lg-4">
                <ul className="menu d-flex justify-content-center">
                  <img src={Step} className="image" alt=""></img>
                </ul>
              </div>
            </Row>
          </Col>
        </div>
      </div>
      <Container>
        <Card className="detail-box">
          <Row>
            <p className="fw-bold">Detail Pesananmu</p>
            <Col>
              <label>Nama Mobil</label>
              <p className="disable">{(cars && cars.Car) ? cars.Car.name : ""}</p>
            </Col>
            <Col>
              <label>Kategori</label>
              <p className="disable">
              {getCarCategory(cars)}
              </p>
            </Col>
            <Col>
              <label>Tanggal Mulai Sewa</label>
              <p className="disable">
                {moment(cars.start_rent_at).format("DD MMMM YYYY")}
              </p>
            </Col>
            <Col>
              <label>Tanggal Akhir Sewa</label>
              <p className="disable">
              {moment(cars.finish_rent_at).format("DD MMMM YYYY")}
              </p>
            </Col>
          </Row>
        </Card>
      </Container>
      <Container>
        <Row className="mt-3">
          <div className="col-lg-7">
            <Card className="p-3">
              <p className="fw-bold">Pilih Bank Transfer</p>
              <p>
                Kamu bisa membayar dengan transfer melalui ATM, Internet Banking
                atau Mobile Banking
              </p>
              <ListGroup variant="flush border-bottom border-top-0 ">
                <ListGroup.Item>
                    <div
                      className={selected === 1 ? 'active' : null} 
                      onClick={() => {
                        selectClick(1);
                        // localStorage.setItem("bank", "BCA");
                      }}
                    >
                      <div className="mt-3" >
                        <button className="bank btn btn-outline-secondary w-25">BCA</button>
                        <span className='ms-3' >BCA Transfer</span>
                      
                      {selected === 1 ? <img src={Check} className="float-check-right mt-2" alt="check-list" /> : null}
                      </div>
                    </div >
                </ListGroup.Item>
                <ListGroup.Item>
                    <div
                      className={selected === 2 ? 'active' : null}
                      onClick={() => {
                        selectClick(2);
                        localStorage.setItem("bank", "Mandiri");
                      }}
                    >
                      <div className="mt-3" >
                        <button className="bank btn btn-outline-secondary w-25">Mandiri</button>
                        <span className='ms-3' >Mandiri Transfer</span>
                      
                      {selected === 2 ? <img src={Check} className="float-check-right mt-2" alt="check-list" /> : null}
                      </div>
                    </div>
                
                  </ListGroup.Item>  
                  <ListGroup.Item>
                    <div
                      className={selected === 3 ? 'active' : null}
                      onClick={() => {
                        selectClick(3);
                        localStorage.setItem("bank", "BNI");
                      }}
                    >
                      <div className="mt-3" >
                        <button className="bank btn btn-outline-secondary w-25">BNI</button>
                        <span className='ms-3' >BNI Transfer</span>
                      
                      {selected === 3 ? <img src={Check} className="float-check-right mt-2" alt="check-list" /> : null}
                      </div>
                    </div >
                  </ListGroup.Item> 
              </ListGroup>
            </Card>
          </div>
          <div className="col-lg-5">
            <Card className="p-3">
              <Card.Body>
                <p className="fw-bold">{(cars && cars.Car) ? cars.Car.name : ""}</p>
                <p className="disable">
                  <FiUsers className="mb-1 me-2" />
                  {getCarCategory(cars)}
                </p>
                <div className="total">
                  <button
                    onClick={() => setShow(!show)}
                    className="btn-show"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseExample"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    <p>Total</p>{" "}
                    {show ? (
                      <FaAngleUp className="mt-1 ms-2" />
                    ) : (
                      <FaAngleDown className="mt-1 ms-2" />
                    )}
                  </button>
                  <p className="fw-bold">Rp. {cars.total_price}</p>
                </div>
                <div className="collapse" id="collapseExample">
                  <h6 className="fw-bold ">Harga</h6>
                  <div className="total1 text-indent">
                    <li>Sewa Mobil {cars.price} x 7 Hari</li>
                    <span>Rp {cars.total_price}</span>
                  </div>
                  <h6 className="fw-bold mt-4 ">Biaya Lainnya</h6>
                  <div className="total1 text-indent">
                    <li>Pajak</li>
                    <span className="text-success">Termasuk</span>
                  </div>
                  <div className="total1 text-indent">
                    <li>Biaya makan sopir</li>
                    <span className="text-success">Termasuk</span>
                  </div>
                  <h6 className="fw-bold mt-4 ">Belum Termasuk</h6>
                  <div className="text-indent">
                    <li>Bensin</li>
                    <li>Tol dan parkir</li>
                  </div>
                  <div className="total">
                    <p>Total</p>
                    <p className="fw-bold">Rp. {cars.total_price}</p>
                  </div>
                </div>
                <Button className="w-100 btn-success" onClick={()=>navigate("/uploadpayment")}>Bayar</Button>
              </Card.Body>
            </Card>
          </div>
        </Row>
      </Container>

      <Foot />
    </>
  );
};
export default Bayar;
