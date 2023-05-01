import React from "react";
import UpcomingEvents from "./UpcomingEvents";
import Navbar from "./Navbar.jsx";
import FullCalendarApp from "./Calender";

function Dashboard() {
    const styles1 = {
      flex: '4',
    };
    const styles2 = {
      flex: '1',
    };
    const calendarStyles = {
      width: '100%',
      height: '500px',
    };
    const eventStyles={
        width : '20%'
    }
    const name= "Rahul";
    const nameStyle={
        position:'relative',
        top: '30px',
        
    }
    return (
      <div>
        <Navbar />
        <h2 className="Dash">Welcome Back {name}</h2>
        <div className="Dashboard">
          <div style={styles1}>
            <div style={calendarStyles}>
              <FullCalendarApp />
            </div>
          </div>
          <div style={styles2}>
            <UpcomingEvents />
          </div>
        </div>
      </div>
    );
  }
  

export default Dashboard;
