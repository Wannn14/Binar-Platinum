import React, { useState } from "react";
import {Button} from 'react-bootstrap';
import './payment02.css';
import { FiImage } from "react-icons/fi";
import axios from "axios";


const Upload = () => {

    const [image, setImage] = useState(null)
    const [fileName, setFileName] = useState ("No selected File")
   
    const baseUrl = "https://bootcamp-rent-cars.herokuapp.com/customer";

    const uploadImage = async () => {
        const carData = JSON.parse(localStorage.getItem("detailCar"))
        const token = localStorage.getItem ('access_token')
        const config = {
            headers:{
                access_token: token
            }
        }
        const formData = new FormData()
        formData.append("slip", image)
        await axios.put(`${baseUrl}/order/${carData.id}/slip`, formData, config)
    }

    return (
        <>
        <main>
            <form className="form-data"  action=""
            onClick={()=> document.querySelector(".input-field").click()}
            >
                <input type="file" name="file" accept="image/*" className="input-field" 
                 hidden 
                onChange={({target: {files}}) => {
                    files [0] && setFileName(files[0].name)
                    if (files){
                        console.log(files[0])
                        setImage(files[0])
                    }
                }} 
                />
                {image ?
                <img src={URL.createObjectURL(image)} width={300} height={200} alt={fileName} />
                :
                <FiImage className="w-25 h-25" />
                }
                
            </form>

            
        </main>
       <Button onClick={uploadImage} className="btn btn-success mt-3">Upload Gambar</Button>
        </>
    )
}
export default Upload;