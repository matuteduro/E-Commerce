import React from 'react'
import Sidebar from "./Sidebar"
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
        <Sidebar/>

        <div className="dashboardContainer"></div>
    </div>
  )
}

export default Dashboard