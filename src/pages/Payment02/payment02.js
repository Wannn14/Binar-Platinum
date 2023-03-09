import React, {useState} from "react";
import Header from "../../components/header";
import Foot from "../../components/footer";
import "./payment02.css";
import Copy from "../../assets/image/fi_copy.png";
import Frame from "../../assets/image/Frame 21.png";
import {
  Row,
  Col,
  Button,
  Container,
  Card,
  ListGroup,
  InputGroup,
  FormControl,
  FormLabel,
  Tabs,
  Tab,
} from "react-bootstrap";
import {FaArrowLeft} from "react-icons/fa";
import CountDown from "./countdown";

const Payment02 = () => {
  const [change, setChange] = useState("");

  const changeValue = () => {
    setChange("Konfirmasi Pembayaran");
  };

  return (
    <>
      <Header />
      <div className="payment">
        <div className="container">
          <Col>
            <Row>
              <div className="col-lg-8">
                <button className="p-3 fs-6 fw-bold btn-previous">
                  <FaArrowLeft className="me-3 mb-1" />
                  Pembayaran
                </button>
              </div>
              <div className="col-lg-4 ">
                <ul className="menu d-flex justify-content-center">
                  <img src={Frame} className="mt-3" alt=""></img>
                </ul>
              </div>
            </Row>
          </Col>
        </div>
      </div>

      <Container>
        <Row>
          <Col lg={7}>
            <Card className="p-3 mt-3">
              <div className="d-flex justify-content-between">
                <div>
                  <p className="fw-bold">Selesaikan Pembayaran Sebelum</p>
                  <p>Rabu, 19 Mei 2022 jam 13.00 WIB</p>
                </div>
                <div>
                  <CountDown duration={24 * 60 * 60 * 1000} />
                </div>
              </div>
            </Card>
          </Col>
          <div className="col-lg-5">
            <Card className="p-3 mt-3">
              <p>
                {!change
                  ? "Klik konfirmasi pembayaran untuk mempercepat proses pengecekan"
                  : change}
              </p>
              <Button
                className="w-100 btn-success"
                onClick={() => changeValue()}
              >
                Konfirmasi Pembayaran
              </Button>
            </Card>
          </div>
        </Row>

        <Row className="mt-3">
          <div className="col-lg-7">
            <Card className="p-3">
              <p className="fw-bold">Lakukan Transfer Ke</p>
              <ListGroup variant="flush border-bottom border-top-0 list-group-payment">
                <ListGroup.Item>
                  <div className="d-flex">
                    <Button
                      variant="outline-dark button-tf"
                      className="disable"
                    >
                      BCA
                    </Button>
                    <div className="Pemilik">
                      <p className="fw-bold">BCA Transfer </p>
                      <p> a.n Binar Car Rental</p>
                    </div>
                  </div>
                  <FormLabel>No. Rekening</FormLabel>
                  <InputGroup className="mb-3">
                    <FormControl
                      className="disable"
                      placeholder="1387653928"
                    ></FormControl>
                    <Button
                      variant="outline-secondary"
                      id="button-addon2"
                      className="disable"
                    >
                      <img src={Copy} alt="Copy"></img>
                    </Button>
                  </InputGroup>
                  <FormLabel>Nominal</FormLabel>
                  <InputGroup className="mb-3">
                    <FormControl
                      className="disable"
                      placeholder="Rp. 3.500.000"
                    ></FormControl>
                    <Button
                      variant="outline-secondary"
                      id="button-addon2"
                      className="disable"
                    >
                      <img src={Copy} alt="Copy"></img>
                    </Button>
                  </InputGroup>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </div>
        </Row>
      </Container>

      <Container>
        <Row className="mt-3">
          <Col lg={7}>
            <Card>
              <Card.Title className="m-3">Intruksi Pembayaran</Card.Title>
              <Tabs
                defaultActiveKey="home"
                transition={false}
                className="mb-3 justify-content-center"
              >
                <Tab eventKey="ATM BCA" title="ATM BCA">
                  <ul>
                    <li>Masukkan Kartu ATM, lalu PIN</li>
                    <li>
                      Pilih menu "Transaksi Lainnya" - "Transfer" - "ke Rek BCA
                      Virtual Account"
                    </li>
                    <li>
                      Masukkan nomor BCA Virtual Account : 70020+Order ID Contoh
                      : No. Peserta : 12345789, maka ditulis 7002012345789
                    </li>
                    <li>
                      Layar ATM akan menampilkan konfirmasi, ikuti intruksi
                      untuk menyelesaikan transaksi
                    </li>
                    <li>Ambil dan simpanlah bukti transaksi tersebut</li>
                  </ul>
                </Tab>
                <Tab eventKey="M-BCA" title="M-BCA">
                  <ul>
                    <li>Buka aplikasi BCA mobile dan pilih m-BCA.</li>
                    <li>Masukkan Kode Akses Anda.</li>
                    <li>Pilih m-Transfer.</li>
                    <li>Pilih Antar Bank pada Daftar Transfer.</li>
                    <li>Masukkan nomor rekening tujuan.</li>
                    <li>Pilih BCA Digital pada Bank, kemudian klik Send.</li>
                    <li>Kembali ke menu m-Transfer.</li>
                    <li>Pilih Antar Bank pada menu Transfer.</li>
                    <li>Pilih BCA Digital pada kolom Bank.</li>
                    <li>Pilih rekening pada kolom Ke Rekening Tujuan.</li>
                    <li>
                      Masukkan jumlah uang yang akan ditransfer lalu klik OK
                      Pilih Layanan Transfer menggunakan BI FAST atau Realtime
                      Online, klik Send.
                    </li>
                    <li>Klik OK kemudian masukkan PIN m-BCA Anda.</li>
                  </ul>
                </Tab>
                <Tab eventKey="BCA Klik" title="BCA klik">
                  <ul>
                    <li>Buka https://ibank.klikbca.com/ pada browser.</li>
                    <li>
                      Masukan User ID dan PIN KlikBCA Individual, Klik Login.
                    </li>
                    <li> Masukkan nomor rekening BCA.</li>
                    <li>Klik Transfer Dana.</li>
                    <li> Klik Transfer ke Rekening BCA. </li>
                    <li>Pilih nomor rekening dari daftar.</li>
                    <li> Isi nominal transfer BCA.</li>
                    <li>Tunggu 8 digit untuk isi KeyBCA.</li>
                    <li> Aktifkan KeyBCA, Masukkan pin dan tekan angka 2.</li>
                    <li> Masukkan 8 digit.</li>
                    <li>Masukkan 8 digit dari Respon KeyBCA APLLI 2.</li>
                    <li>Klik Lanjutkan, Tunggu informasi rekening tujuan.</li>
                    <li>Nyalakan KeyBCA kembali.</li>
                    <li>Klik angka 1.</li>
                    <li>Tunggu 8 digit di kotak Respon KeyBCA APPLI 1.</li>
                    <li>Pilih Kirim. </li>
                    <li> Tunggu bukti transaksi transfer BCA berhasil.</li>
                  </ul>
                </Tab>
                <Tab eventKey="Internet Bangking" title="Internet Bangking">
                  <ul>
                    <li>Masukkan Kartu ATM, lalu PIN</li>
                    <li>
                      Pilih menu "Transaksi Lainnya" - "Transfer" - "ke Rek BCA
                      Virtual Account"
                    </li>
                    <li>
                      Masukkan nomor BCA Virtual Account : 70020+Order ID Contoh
                      : No. Peserta : 12345789, maka ditulis 7002012345789
                    </li>
                    <li>
                      Layar ATM akan menampilkan konfirmasi, ikuti intruksi
                      untuk menyelesaikan transaksi
                    </li>
                    <li>Ambil dan simpanlah bukti transaksi tersebut</li>
                  </ul>
                </Tab>
              </Tabs>
            </Card>
          </Col>
        </Row>
      </Container>

      <Foot />
    </>
  );
};
export default Payment02;
