import React, {useState,useEffect} from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import {useDispatch} from "react-redux";
import Chart from "react-apexcharts";
import { dataDashboard } from "../../store/actions/dashboard-slice";
import {useSelector} from "react-redux";
import moment from "moment/moment";
import './Chart.css'
const ChartDashboard = () => {
    const dispatch = useDispatch();
    const [startDateRent, setStartDateRent] = useState(`2022-01-01`);
    const [finishDateRent, setFinishDateRent] = useState(`2022-01-31`);
    const data = useSelector(state => state.dashboardStore.dashboardData)
    const months = [
        { id: 1, name: "January" },
        { id: 2, name: "February" },
        { id: 3, name: "March" },
        { id: 4, name: "April" },
        { id: 5, name: "May" },
        { id: 6, name: "June" },
        { id: 7, name: "July" },
        { id: 8, name: "August" },
        { id: 9, name: "September" },
        { id: 10, name: "October" },
        { id: 11, name: "November" },
        { id: 12, name: "December" },
      ];
    const handledataDashboard = (e) => {
        // e.preventDefault();
        console.log("data");
        dispatch(dataDashboard({from:startDateRent, until:finishDateRent}))
          .unwrap()
          .then(() => 
          {
            
          })
      };
    useEffect(()=>{
        handledataDashboard();
    },[])
    // useEffect(()=>{
    //     dispatch(getDataChart());
    // }, [dispatch]);
      
    // const series = [
    //     {
    //         name: "series-1",
    //         data: data.map((item)=>item.orderCount)
    //       }
    // ];
    // const options = {
    //     chart: {
    //         id: "simple-bar"
    //     },
    //     xaxis: {
    //         data: data.map((item)=>item.day)
    //     }
    // };
    const options= {
          chart: {
            id: "simple-bar"
          },
          xaxis: {
            categories: data.map((item)=>moment(item.day, 'YYYY-MM-DD') .format("DD")),
            title :{
                text: 'Date',
                style: {
                    color: '#775DD0',
                    fontSize: '18px',
                    fontFamily: 'Arial, sans-serif',
                    fontWeight: 400,
                    cssClass: 'apexcharts-yaxis-title',
                },
            },
            
          },
          fill:{
            colors:['#586B90']
            },
          
          yaxis:{
            title : {
                text : 'Amount of Car Rented'
            },
            fill:{
                colors:['#586B90']
            }
          }
        }
        const series = [
          {
            name: "Count",
            data: data.map((item)=>item.orderCount)
          }
        ]
    return (
        <div className="container chart-section">
            <div className="row">
                {/* <p>{data.dashboardData.length && data.dashboardData [0].day}</p> */}
                <Col>
                    <Col className='detailSelect'>Month</Col>
                    <Form className="d-flex mb-5" >
                    <Form.Select
                        aria-label="Default select example"
                        style={{ width: 150, borderRadius: 2, fontSize: 12 }}
                        onChange={(e) => {
                        let date = new Date(e.target.value);
                        let lastDay = new Date(2022, date.getMonth() + 1, 0);
                        setStartDateRent(`2022-${e.target.value}-1`);
                        setFinishDateRent(`2022-${e.target.value}-${lastDay.getDate()}`);
                        }}>
                        <option disabled>Open this select menu</option>
                        {months.map((month) => (
                        <option value={month.id} key={month.id}>
                            {month.name} - 2022
                        </option>
                        ))}
                    </Form.Select>
                    <br />
                    <Button variant="outline-none" className='btnGo' onClick={handledataDashboard}>
                        Go
                    </Button>
                    </Form>
                </Col>
                <div className="mixed-chart">
                    <Chart className="chart-mobil" options={options} series={series} type="bar" width="800px"/>
                </div>
            </div>
        </div>
    )
}

export default ChartDashboard