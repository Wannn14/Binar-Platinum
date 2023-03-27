import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';
import './style.css';
import axios from "axios";

const AddCar = () => {
  
  




  return (

    <div className="content">
      <div className="main">
        <p>Cars {`>`} List Car {`>`} Add New Car</p>

        <h4>Add New Car</h4>
        <div className="row" style={{ backgroundColor: '#ffff', padding: '20px', marginRight: '10px' }}>
          <form action="" >
            <div className="col">
              <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Nama/Tipe Mobil</label>
                <div className="col-sm-10">
                  <input id="name" name="name" type="text" className="form-control" placeholder="Input Nama/Tipe Mobil"  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Harga</label>
                <div className="col-sm-10">
                  <input id="price" name="price" type="number" className="form-control" placeholder="Input Harga Sewa Mobil"  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Status</label>
                <div className="col-sm-10">
                  <input id="status" name="status" type="text" className="form-control" placeholder="Input Status"  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Foto</label>
                <div className="col-sm-10">
                  {/* <input id="image" name="image" type="file" className="form-control" placeholder="Upload Foto Mobil" onChange={(e)=>onInputChange(e)}/> */}
                

                  <p className="text-muted">File Size Max. 2 MB</p>
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Kategori</label>
                <div className="col-sm-10">
                  {/* <select className="form-select" id="exampleFormControlSelect1">
                                    <option >Pilih Kategori</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select> */}
                  <input id="category" name="category" type="text" className="form-control" placeholder="Kategori Mobil"  />

                </div>

              </div>
              <div className="button mt-5">
                <Link to={`/carlist`}>
                  <button className="btn btn-outline-primary">Cancel</button>
                </Link>
                <button className="btn btn-primary ms-2">Save</button>
              </div>
            </div>
            <div className="col">
            </div>

          </form>

        </div>
      </div>
    </div>
  )
}

export default AddCar;