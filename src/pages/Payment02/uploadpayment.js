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
import Countdownone from "./countdown1";
import Upload from './upload';
// import {CopyToClipboard} from 'react-copy-to-clipboard';
import { useNavigate } from "react-router-dom";


const Payment02 = () => {

  const bank = localStorage.getItem('bank');

  const idOrder = JSON.parse(localStorage.getItem("detailCar"));

  const navigate = useNavigate();

  const [copyTex, setCopyText] = useState('');
  const handleCopy = () => {
    navigator.clipboard.writeText(copyTex)
    alert("copyed")
  }

  const [copyTex1, setCopyText1] = useState('');
  const handleCopy1 = () => {
    navigator.clipboard.writeText(copyTex1)
    alert("copyed")
  }

  // const [value, setValue] = React.useState('some\ntext');
  // const [copied, setCopied] = React.useState(false);
  
  // const getCopy = React.useCallback(({target: {innerText}}) => {
  //   console.log(`Clicked on "${innerText}"!`);
  // }, [])
  
  

  return (
    <>
      <Header />
      <div className="payment">
        <div className="container">
          <Col>
            <Row>
              <div className="col">
                <button className="p-3 fs-6 fw-bold btn-previous"  onClick={()=>navigate("/pembayaran")}>
                  <FaArrowLeft className="me-3 mb-1 arrowleft" />
                 
                </button>
                
              </div>
              <div className="col-lg-5" >
                <p className="fw-bold fs-5 lh-base">
                  {(() => {
                        switch (bank) {
                          case "BNI":
                            return "BNI Transfer";
                          case "Mandiri":
                            return "Mandiri Transfer";
                          case "BCA":
                            return "BCA Transfer";
                          default:
                            return "-";
                        }
                      })()}
                </p>
                <p className="fs-6">Order ID: {idOrder.id}</p>
                </div>
              <div className="col-lg-6 ">
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
            <Card className=" mt-3 p-3">
              <p className="fw-bold">Lakukan Transfer Ke</p>
              <ListGroup variant="flush border-bottom border-top-0 list-group-payment">
                <ListGroup.Item>
                  <div className="d-flex">
                    <Button
                      variant="outline-dark button-tf"
                      className="disable"
                    >
                      {bank}
                    </Button>
                    <div className="Pemilik">
                      <p className="fw-bold">
                      {(() => {
                      switch (bank) {
                        case "BNI":
                          return "BNI Transfer";
                        case "Mandiri":
                          return "Mandiri Transfer";
                        case "BCA":
                          return "BCA Transfer";
                        default:
                          return "-";
                      }
                    })()}
                      </p>
                      <p> a.n Binar Car Rental</p>
                    </div>
                  </div>
                  <FormLabel>No. Rekening</FormLabel>
                  <InputGroup className="mb-3">
                    <FormControl
                      className="disable"
                      placeholder="1387653928"
                      value={copyTex}
                      onChange={(e) => setCopyText(e.target.value)}
                    >
                    </FormControl>
                    <Button
                      variant="outline-secondary"
                      id="button-addon2"
                      className="disable"
                      onClick={handleCopy}
                    >
                      <img src={Copy} alt="Copy"></img>
                    </Button>
                  </InputGroup>
                  <FormLabel>Nominal</FormLabel>
                  <InputGroup className="mb-3">
                    <FormControl
                      className="disable"
                      placeholder="Rp. 3.500.000"
                      value={copyTex1}
                      onChange={(e) => setCopyText1(e.target.value)}
                    ></FormControl>
                    <Button
                      variant="outline-secondary"
                      id="button-addon2"
                      className="disable"
                      onClick={handleCopy1}
                    >
                      <img src={Copy} alt="Copy"></img>
                    </Button>
                  </InputGroup>
                </ListGroup.Item>
              </ListGroup>
            </Card>
            <Card className="mt-5" >
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
          <div className="col-lg-5">
            <Card className="p-3 mt-3">
                
            <div className="d-flex justify-content-between">
                <div>
                  <p className="fw-bold">Konfirmasi Pembayaran</p>                 
                </div>
                <div>
                    <Countdownone duration={10 * 60 * 1000} /> 
                </div>
            </div>
                <p>Terima kasih telah melakukan konfirmasi pembayaran. 
                Pembayaranmu akan segera kami cek tunggu kurang lebih 10 menit untuk mendapatkan konfirmasi.
                </p>
                <p className="fs-5">Upload Bukti Pembayaran</p>
                <p>Untuk membantu kami lebih cepat melakukan pengecekan. Kamu bisa upload bukti bayarmu
                </p>
                
                <Upload className="mt-3 mb-5 d-flex"/>
                
            
          


              {/* <p>
                {!change
                  ? "Klik konfirmasi pembayaran untuk mempercepat proses pengecekan"
                  : change}
              </p>
              <Button
                className="w-100 btn-success"
                onClick={() => changeValue()}
              >
                Konfirmasi Pembayaran
              </Button> */}
            </Card>
          </div>
        </Row>
      </Container>
      <Foot />
    </>
  );
};
export default Payment02;
