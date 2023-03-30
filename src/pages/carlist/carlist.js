import React, {useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import {datacrud} from "../../store/actions/crud-slice";
import {useDispatch, useSelector} from "react-redux";

// import axios from "axios";


const Carlist = ({  }) => {
  const [cars, setCars] = useState([]);
  const dispatch = useDispatch();
  const viewcar = useSelector(state => state.viewstore.cruddata)
  // const [pagesize,setPageSize] = useState (10)
  //   const [page,setPage] = useState (1)
    const [carSmall,setSmall] = useState()
    // const handleCarSmall = (ev) =>{
    //   ev.preventDefault()
    //   setSmall (ev.target.value)
    // }
    useEffect(() => {
      dispatch(datacrud({carSmall}));
  }, [])
  // const API_URL = "https://bootcamp-rent-cars.herokuapp.com";
  // const getCars = () => {
  //   const token = localStorage.getItem ('access_token')
  //   const config = {
  //       headers:{
  //           access_token: token
  //       },
       
  //   }
  
  // axios
  //     .get(`${API_URL}/admin/v2/car`,config)
  //     .then((response) => {
  //       setCars(response.data.cars)
  //      console.log(response.data)
  //     })
  //     .catch((error) => console.log(error));
  //   }
    // useEffect(()=>{getCars()},[])
    return(

<>
<div className="row">
          <div className="col">
            <h4>List Car</h4>
            <div className="btn-group" >
              <button type="button" className="btn btn-outline-primary">All</button>
              <button type="button" className="btn btn-outline-primary" >2 - 4 People</button>
              <button type="button" className="btn btn-outline-primary" >4 - 6 People</button>
              <button type="button" className="btn btn-outline-primary" >6 - 8 People</button>

            </div>
          </div>
          <div className="col">
            <Link to={`/addCar`}>
              <button style={{ marginLeft: '390px', marginBottom: '10px' }} className="btn btn-primary"> + Add New Car</button>
            </Link>
          </div>
        </div>
      <div className="row">
        {viewcar.cars.map((car, index) =>(
           
            <div className="col-lg-4 col-md-4" key={index}>
            <div className="card-border">
            <div className="card">
              <img src={car.image} />
              
  </div>
            </div>
            </div>
          
        ))}
   
      </div>
</>
    )
}
export default Carlist;