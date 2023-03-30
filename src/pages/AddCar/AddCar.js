import React, {useState} from "react";
import {
  Form,
  Button
} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {addData} from "../../store/actions/add-slice"
const Carditem = () => {
  const [name, setName] = useState("");
  const [kategori, setKetegori] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState("");
  const [image, setImage] = useState("");
  const dispatch = useDispatch();

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleKetegori = (e) => {
    setKetegori(e.target.value);
  };
  const handlePrice = (e) => {
    setPrice(e.target.value);
  };
  const handleStatus = (e) => {
    setStatus(e.target.value);
  };
  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    console.log("succes");
    dispatch(addData({name: name, category: kategori, price: price, status:status, image:image}))
      .unwrap()
      .then(() => {
        alert ("succes tambah mobil")
        // setBgToast ('info')
        // setShowMsg ('Berhasil Login')
        // setIsToastShow (true);
        // setTimeout(() => {
        //   navigate("/login")
        // }, 2000);
      })
      .catch((error)=>{
        // setBgToast ('danger')
        // setShowMsg ('Silahkan di cek kembali email')
        // setIsToastShow(true);
        alert ("gagal")

      });
  };



  return (
    <div className='section-car'>
        <div className='row row-car'>
        <Form onSubmit={handleAdd}>
              <Form.Group className="mb-3">
                <Form.Label>Nama</Form.Label>
                <Form.Control
                  placeholder="Enter nama"
                  onChange={handleName}
                />
              </Form.Group>

              <Form.Select aria-label="Default select example"  onChange={handleKetegori}>
                  <option>Kategori</option>
                  <option value="small">small</option>
                  <option value="medium">medium</option>
                  <option value="large">large</option>
              </Form.Select>

              <Form.Group className="mb-3">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  placeholder="Enter price"
                  onChange={handlePrice}
                />
              </Form.Group>

              <Form.Select aria-label="Default select example" onChange={handleStatus}>
                  <option>Status</option>
                  <option value="1">true</option>
                  <option value="0">false</option>
              </Form.Select>

              <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>Foto</Form.Label>
                  <Form.Control type="file" onChange={handleImage}/>
               </Form.Group>


              <Button variant="primary" type="submit" className="w-100 mb-3">
                Sign In
              </Button>
            </Form>

        </div>
    </div>
  )
}

export default Carditem