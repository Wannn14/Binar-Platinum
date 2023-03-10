import React, {useState,useEffect} from "react";
import {
    Form,
    Button
} from "react-bootstrap";
import {useDispatch} from "react-redux";
import Chart from "react-apexcharts";
import { dataDashboard } from "../../store/actions/dashboard-slice";
import {useSelector} from "react-redux";
const ChartDashboard = () => {
    const data = useSelector ((state)=>state.dashboardStore);
    const [inputdatefrom, setInputDateFrom] = useState();
    const [inputdateuntil, setInputUntil] = useState();
    const dispatch = useDispatch();
    const handledateFrom = (e) => {
        e.preventDefault();
        setInputDateFrom(e.target.value);
    };
    
    const handledateUntil = (e) => {
        e.preventDefault();
        setInputUntil(e.target.value);
    };
    const handledataDashboard = (e) => {
        e.preventDefault();
        console.log("data");
        dispatch(dataDashboard({from:inputdatefrom, until:inputdateuntil}))
          .unwrap()
          .then(() => 
          {
            console.log(data);
          })

    
      };
      
    const series = [
        {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91]
          }
    ];
    const options = {
        chart: {
            id: "simple-bar"
        },
        xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
    };
    return (
        <div className="app">
            <div className="row">
                {/* <p>{data.dashboardData.length && data.dashboardData [0].day}</p> */}
                <Form onSubmit={handledataDashboard}>
                    <Form.Group className="mb-3">
                        <Form.Label>Date awal</Form.Label>
                        <Form.Control type="text" placeholder="text" onChange={handledateFrom}/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Date Akhir</Form.Label>
                        <Form.Control type="text" placeholder="text" onChange={handledateUntil}/>
                    </Form.Group>
                    <Button variant="primary" type="submit" className="w-100 mb-3">
                        Sign In
                    </Button>
                </Form>
                <div className="mixed-chart">
                    <Chart options={options} series={series} type="bar" width="500"/>
                </div>
            </div>
        </div>
    )
}

export default ChartDashboard