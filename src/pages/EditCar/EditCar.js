import React, {useState, useEffect} from "react";
import {
  Form,
  Button
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { getEditData,editData } from "../../store/actions/edit-slice";

const EditCar = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const dataEdit = useSelector(state => state.editcarStore.EditCarData)
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [status, setStatus] = useState("");
    const [image, setImage] = useState("");

    const handleName = (e) => {
      setName(e.target.value);
    };
    const handleKetegori = (e) => {
      setCategory(e.target.value);
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
    const handleEdit = (e) => {
      e.preventDefault();
      console.log("succes");
      dispatch(editData({name: name, category: category, price: price, status:status, image:image}))
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
  

    

    useEffect(() => {
        dispatch(getEditData({id:params.id}))
    }, [])
    console.log(dataEdit.status);
  
  return (
    <div className='section-car'>
        <div className='row row-car'>
    <Form onSubmit={handleEdit}>
          <Form.Group className="mb-3">
            <Form.Label>Nama</Form.Label>
            <Form.Control
                  value={dataEdit.name || ''}
                  onChange={handleName}
              placeholder="Enter nama"
            />
          </Form.Group>

          <Form.Select aria-label="Default select example"  value={dataEdit.category || ''} onChange={handleKetegori}> 
              <option>Kategori</option>
              <option value="small">small</option>
              <option value="medium">medium</option>
              <option value="large">large</option>
          </Form.Select>

          <Form.Group className="mb-3">
            <Form.Label>Price</Form.Label>
            <Form.Control
            value={dataEdit.price || ''}
            onChange={handlePrice}
              placeholder="Enter price"
            />
          </Form.Group>

          <Form.Select aria-label="Default select example" value={dataEdit.status || ''} onChange={handleStatus}>
            
              <option>Status</option>
              <option value="true">true</option>
              <option value="false">false</option>
          </Form.Select>

          <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Foto</Form.Label>
              <Form.Control type="file"
                onChange={handleImage}/>
           </Form.Group>


          <Button variant="primary" type="submit" className="w-100 mb-3">
            Edit
          </Button>
        </Form>

    </div>
</div>

  )
}

export default EditCar