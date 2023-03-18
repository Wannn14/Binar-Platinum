import React, {useState} from "react";
import Header from "../../components/header";
import Foot from "../../components/footer";
import "./bayar.css";
import Step from "../../assets/image/step.png";
import {Row, Col, Button, Container, Card, ListGroup} from "react-bootstrap";
import {FaArrowLeft, FaAngleUp, FaAngleDown} from "react-icons/fa";
import {FiUsers} from "react-icons/fi";
import Check from '../../assets/image/check.svg';


const Bayar = () => {
  const [show, setShow] = useState(true);
  const [selected, setSelected] = useState();


  const selectClick = (index) => { setSelected(index) };


  return (
    <>
      <Header />
      <div className="payment">
        <div className="container">
          <Col>
            <Row>
              <div className="col-lg-8">
                <button className="fs-6 fw-bold btn-previous">
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
              <p className="disable">Innova</p>
            </Col>
            <Col>
              <label>Kategori</label>
              <p className="disable">6 - 8 orang</p>
            </Col>
            <Col>
              <label>Tanggal Mulai Sewa</label>
              <p className="disable">2 Jun 2022</p>
            </Col>
            <Col>
              <label>Tanggal Akhir Sewa</label>
              <p className="disable">8 Jun 2022</p>
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
                        localStorage.setItem("bank", "BCA");
                      }}
                    >
                      <div className="mt-3" >
                        <button className="bank btn btn-outline-secondary">BCA</button>
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
                        localStorage.setItem("bank", "BCA");
                      }}
                    >
                      <div className="mt-3" >
                        <button className="bank btn btn-outline-secondary">BCA</button>
                        <span className='ms-3' >BCA Transfer</span>
                      
                      {selected === 2 ? <img src={Check} className="float-check-right mt-2" alt="check-list" /> : null}
                      </div>
                    </div>
                
                  </ListGroup.Item>  
                  <ListGroup.Item>
                    <div
                      className={selected === 3 ? 'active' : null}
                      onClick={() => {
                        selectClick(3);
                        localStorage.setItem("bank", "BCA");
                      }}
                    >
                      <div className="mt-3" >
                        <button className="bank btn btn-outline-secondary">BCA</button>
                        <span className='ms-3' >BCA Transfer</span>
                      
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
                <p className="fw-bold">Innova</p>
                <p className="disable">
                  <FiUsers className="mb-1 me-2" />6 - 8 orang
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
                  <p className="fw-bold">Rp 3.500.000</p>
                </div>
                <div className="collapse" id="collapseExample">
                  <h6 className="fw-bold ">Harga</h6>
                  <div className="total1 text-indent">
                    <li>Sewa Mobil Rp.500.000 x 7 Hari</li>
                    <span>Rp 3.500.000</span>
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
                    <p className="fw-bold">Rp 3.500.000</p>
                  </div>
                </div>
                <Button className="w-100 btn-success">Bayar</Button>
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
