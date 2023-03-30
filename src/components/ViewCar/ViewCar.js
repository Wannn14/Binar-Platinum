import React from 'react'
import {Card, Button} from 'react-bootstrap';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCarsData, deleteCarData} from "../../store/actions/view-car-slice"
import "./ViewCar.css"
import moment from 'moment';
import { useNavigate } from 'react-router';

const ViewCar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const dataCars = useSelector(state => state.viewcarStore.CarData)
    const [cars,setCars] = useState()
    const LoadDetail = (id)=>{
        navigate('/edit-car/'+id);
        }

    const handlecars = (ev) => {
        ev.preventDefault()
        setCars(ev.target.value)
    }
    const HandleDelete = (id) => {
        dispatch(deleteCarData({id: id})).then(() => {
            dispatch(getCarsData());
        }).catch(() => {
            console.log('error');
        })
    }

    useEffect(() => {
        dispatch(getCarsData());
    }, [])

    useEffect(() => {
        dispatch(getCarsData({cars}));
    }, [cars])

    //   useEffect(() => {     dispatch(getCarsData); }, [])
    return ( 
    <div className='container'>
        <div className='row d-flex'>
            <Button value="small" onClick={handlecars}>Small</Button>
            <Button value="Medium">Medium</Button>
            {dataCars
                .cars
                .map((item) => (
                    <div key={`key-${item.id}`} className="col-12 col-lg-4 mb-3">
                        <Card className="h-100 p-4">
                            <Card.Img src={item.image} className="d-lg-block card-img-custom"/>
                            <Card.Body>
                                <div className="row">
                                    <p className="pw-medium">{item.name}</p>
                                    <strong className='pw-bold'>{item.price}
                                        / hari</strong>
                                    <p className="pw-medium">Updated at {moment(item.updatedAt).format('DD-MMMM-YYYY HH:mm')}</p>
                                </div>
                                <Button
                                    className='mx-3 card-btn'
                                    variant="outline-danger"
                                    onClick={() => {
                                    HandleDelete(item.id)
                                }}>
                                    Delete
                                </Button>
                                <Button className='mx-3 card-btn' variant="outline-success " 
                                onClick={()=>{LoadDetail(item.id)}}>
                                    Edit
                                </Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))
            }
        </div>
    </div> 
    )
}

export default ViewCar