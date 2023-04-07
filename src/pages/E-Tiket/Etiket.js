import React from 'react'
import "./Etiket.css";
import Foot from "../../components/footer";
import Header from "../../components/header";
import Steper from "../../assets/image/step3.png";
import {Row, Col} from "react-bootstrap";
import {FaArrowLeft,FaCheckCircle} from "react-icons/fa";
import { BsDownload } from "react-icons/bs";
import pdf from '../../assets/pdf/dummy_tos.pdf'
import { PDFDownloadLink, Document, Page } from '@react-pdf/renderer'
import { useNavigate } from 'react-router-dom';
const MyDoc = () => (
    <Document>
      <Page>
      </Page>
    </Document>
  )

const Etiket = () => {

const navigate = useNavigate();
const idOrder = JSON.parse(localStorage.getItem("detailCar"))

  return (
    <>
    <Header />
    <div className="etiket">
        <div className="container">
          <Col>
            <Row>
              <div className="col-lg-8 etiket-btn-back">
                <button className="p-3 fs-5 lh-base fw-bold btn-previous" onClick={() => navigate('/uploadpayment')}>
                  <FaArrowLeft className="me-3 mb-1 fs-5" />
                  Tiket
                </button>
                <br></br>
                <span className='fs-6'>Order ID : {idOrder.id}</span>
              </div>
              <div className="col-lg-4 ">
                <ul className="menu d-flex justify-content-center">
                  
                  <img src={Steper} className="mt-3" alt=""></img>
                </ul>
              </div>
            </Row>
          </Col>
        </div>
      </div>

      <div className='container'>
        <div className='etiket-content'>
            <Row>
                <div className='etiket-text text-center'>
                    <FaCheckCircle className="me-3 mb-1 success-icon" size='50px'/>
                    <h5 className='fw-bold my-3'>Pembayaran Berhasil!</h5>
                    <p className='text-secondary'>Tunjukkan invoice ini ke petugas BCR di titik temu.</p>    
                </div>
            </Row>

            <Row>
                <div className='etiket-invoice'>
                    <div className='d-flex'>
                        <div className='col-9'>
                            <h5 className='fw-bold my-3'>Invoice</h5>
                            <p className='text-secondary'>*no invoice</p>   
                        </div>
                        <div className='col-3 text-end'>
                            <button className="button-download">
                            <BsDownload className="icon-download fw-bold" size='18px' type='bold' />
                            <PDFDownloadLink document={<MyDoc />} fileName={pdf}>
                            {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Unduh')}
                            </PDFDownloadLink>
                            </button>
                            
                        </div> 
                    </div>
                    <div className='view-pdf'>
                        <object data={pdf} type='application/pdf' width='100%' height='auto'>
                        <p></p> 
                        </object>
                    </div>
                </div>
            </Row>

        </div>
        
      </div>
      <Foot />
    </>
  )
}

export default Etiket