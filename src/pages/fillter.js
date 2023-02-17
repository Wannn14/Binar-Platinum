import React from "react";
import {Container, Row, Col, Form} from "react-bootstrap";

const Filter = (filterData) => {
  return (
    <Container className="box">
      <Row>
        <Form onSubmit={filterData.getData} className="formbox">
          <Col>
            <div className="formoption">
              <label>Nama Mobil</label>
              <Form.Label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ketik nama/tipe mobil"
                  ref={filterData.namaMobil}
                ></input>
              </Form.Label>
            </div>
          </Col>

          <Col>
            <div className="formoption">
              <label>Kategori</label>
              <Form.Select ref={filterData.category}>
                <option />
                <option value="small">2 - 4 orang</option>
                <option value="medium">4 - 6 orang</option>
                <option value="large">6 - 8 orang</option>
              </Form.Select>
            </div>
          </Col>

          <Col>
            <div className="formoption">
              <label>Harga</label>
              <Form.Select ref={filterData.harga}>
                <option />
                <option value="small">{"<Rp. 400.000"}</option>
                <option value="medium">Rp. 400.000 - Rp. 600.000 </option>
                <option value="large">{"Rp. 600.000"} </option>
              </Form.Select>
            </div>
          </Col>

          <Col>
            <div className="formoption">
              <label>Status</label>
              <Form.Select ref={filterData.statusOrder}>
                <option />
                <option value="true">Tersedia</option>
                <option value="false">Di Sewa</option>
              </Form.Select>
            </div>
          </Col>
          <Col>
            <div className="cari">
              <button className="btn btn-success btn-cari" type="submit">
                Cari Mobil
              </button>
            </div>
          </Col>
        </Form>
      </Row>
    </Container>
  );
};

export default Filter;
