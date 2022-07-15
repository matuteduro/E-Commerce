import React from 'react'
import Sidebar from "./Sidebar"
import "./Dashboard.css";
import { Link, Typography } from '@mui/material';
import MetaData from "../layout/MetaData";
import { Doughnut, Line } from "react-chartjs-2"


const Dashboard = () => {

  return (
    <div className="dashboard">
      <MetaData title="Dashboard - Admin Panel" />
      <Sidebar />

      <div className="dashboardContainer">
        <Typography component="h1">Dashboard</Typography>

        <div className="dashboardSummary">
          <div>
            <p>
              Total Amount <br /> $2000
            </p>
          </div>
          <div className="dashboardSummaryBox2">
            <Link to="/admin/products">
              <p>Product</p>
              <p>50</p>
            </Link>
            <Link to="/admin/orders">
              <p>Orders</p>
              <p>4</p>
            </Link>
            <Link to="/admin/users">
              <p>Users</p>
              <p>5</p>
            </Link>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Dashboard