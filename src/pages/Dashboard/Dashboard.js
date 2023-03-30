import React from 'react'
import Navbar from "../../components/Navbar/Navbar";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./Dashboard.module.css";
import ChartDashboard from '../../components/Chart/Chart'
import TableDashboard from '../../components/Table/Table'

const Dashboard = () => {
  return (
    <div>
      <Container fluid className={`p-0 m-0 ${classes.containerDashboard}`}>
        <Navbar currentPage="dashboard" />
        <Row className="m-0">
          <Col
            xs="auto"
            className={`${classes.colDashboard} d-none d-md-block h-100`}></Col>
        </Row>
        <div className={classes.dataGraphTable}>
          <ChartDashboard />
          <br />
        </div>
      </Container>
      <br />
      <br />
      <TableDashboard />
    </div>
  )
}

export default Dashboard