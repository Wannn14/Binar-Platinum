import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {dataTable} from '../../store/actions/table-slice';
import {useEffect, useState} from 'react';
import moment from 'moment';
import Pagination from 'react-bootstrap/Pagination';
import Form from 'react-bootstrap/Form';
import './Table.css';
import { Button } from 'react-bootstrap';

const Table = () => {
    const dispatch = useDispatch();
    const tabledata = useSelector(state => state.tableStore.tableData)

    const [pagesize,setPageSize] = useState (10)  
    const [page,setPage] = useState (1)
    let active = 1;
    let items = [];
    
    useEffect(() => {
        dispatch(dataTable({pagesize,page}))

    }, [])

    useEffect (()=>{
        dispatch(dataTable({pagesize,page}));
    },[pagesize,page])

    const handlePage = (ev) =>{
      ev.preventDefault()
      setPage (ev.target.text)
    }
    const handlepageSizeChange = (ev) =>{
      ev.preventDefault()
      setPageSize (ev.target.value)
    }
    const limits = [10, 15, 20, 25, 30]

    for (let number = 1; number <= 5; number++) {
      items.push(
          <Pagination.Item onClick={handlePage} key={number} active={number === active}>
          {number}
      </Pagination.Item>,);
  }

    return (
        <div className='section-table'>
            <div className='row row-table'>
                <h4>Dashboard</h4>
                <p>List Order</p>

                <div className='main-table'>
                    <table className="table ">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>User Email</th>
                                <th>Car</th>
                                <th>Start Rent</th>
                                <th>Finish Rent</th>
                                <th>Price</th>
                                <th>Category</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tabledata
                                .orders
                                .map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{item.User.email}</td>
                                            {/* <td>{item.Car || 'Unknown'}</td> */}
                                            <td>{item.Car}</td>
                                            <td>{moment(item.start_rent_at).format('DD-MM-YYYY HH:mm')}</td>
                                            <td>{moment(item.finish_rent_at).format('DD-MM-YYYY HH:mm')}</td>
                                            <td>
                                                Rp.{item
                                                    .total_price
                                                    .toLocaleString('id-ID')}</td>
                                            <td>
                                                {item.status}</td>
                                        </tr>

                                    );
                                })}

                        </tbody>
                    </table>
                    <div className='table-footer d-flex'>
                        <div className='table-limit col-2'>
                            <Form.Select onChange={handlepageSizeChange} aria-label="Default select example">
                                {/* <option>Open this select menu</option> */}
                                {limits.map((item, index) => (
                                    <option key={`key-${index}`} value={item}>{item}</option>
                                ))}
                            </Form.Select>

                        </div>
                        <div className='table-pagination col-10'>
                            <Pagination >
                                <Pagination.First/> {items}
                                <Pagination.Last/>
                            </Pagination>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Table