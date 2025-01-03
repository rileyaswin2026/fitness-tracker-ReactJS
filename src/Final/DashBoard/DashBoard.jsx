import React, { useState } from "react";
import { FaHome, FaHeartbeat, FaChartBar, FaUser } from "react-icons/fa";
import "./Dashboard.css";
import Sidebar from "./Sidebar";
import ProfileModel from "./ProfileModel";
import Activity from "./Activity";
import ProgressChart from "./ProgressChart";
import Schedule from "./Schedule";
import trainer1 from "../images/trainer1.jpg";
import trainer2 from '../images/trainer2.jpg';
import trainer3 from '../images/trainer3.jpg';
import trainer4 from '../images/trainer4.jpg';
import Avocado from '../images/Avocado.jpg';
import Blueberry from '../images/Blueberry.jpg';
import Trainers from "./Trainers";




const Dashboard = () => {
   
     const [userData, setUserData] = useState({
       steps: 3500,
       water: 1.5,
       calories: 1400,
       heartRate: 70,
       goals: {
         steps: 5000,
         water: 2, // in liters
         calories: 2000,
         heartRate: 75,
       },
     });
     const trainers = [
      {
        image: trainer1, // Replace with your banner URL
        profilePicture: trainer3, // Replace with your profile picture URL
        name: "Cameron Williamson",
        title: "Fitness Specialist",
        badgeCount: 25,
        starCount: 104,
      },
      {
        image: trainer2, // Replace with your banner URL
        profilePicture: trainer4, // Replace with your profile picture URL
        name: "Cameron Williamson",
        title: "Fitness Specialist",
        badgeCount: 25,
        starCount: 104,
      },
    ];

    const breakfast = {
      title: 'Avocado salad',
      image: Avocado,
      nutrients: {
        carbs: 30,
        protein: 56,
        fat: 36,
      },
    };
  
    const blueberry = {
      title: 'Blueberry',
      image: Blueberry,
      nutrients: {
        carbs: 34,
        protein: 66,
        fat: 44,
      },
    };
  return (
    <div className="dashboard-container ">
      <div className="d-flex">
      <div>
      <Sidebar/>
      </div>
      <div>
      <header className="dashboard-header d-flex">
        <div>
        <h6 className="mt-4">Good Morning</h6>
        <h1>Welcome Back 🎉</h1>
        </div>
        <div>
          <button type="button" style={{margin:"10px 80px 0px 450px"}}>Subscribe</button>
        </div>
      </header>
      <main>
        <div className="stats-grid">
          <div className="stat-card1">
            <h3>🏃🏻 Steps</h3>
            <p>
              {userData.steps} / {userData.goals.steps}
            </p>
          </div>
          <div className="stat-card2">
            <h3> Water</h3>
            <p>
              {userData.water}L / {userData.goals.water}L
            </p>
          </div>
          <div className="stat-card3">
            <h3>Calories</h3>
            <p>
              {userData.calories} / {userData.goals.calories}
            </p>
          </div>
          <div className="stat-card4">
            <h3>Heart Rate</h3>
            <p>{userData.heartRate} bpm</p>
          </div>
        </div>
        <div className="d-flex">
        <div >
        <Activity></Activity>
        </div>
        <div>
          <ProgressChart></ProgressChart>
        </div>
        </div>
        <div className="d-flex">
        <div>
      <h3 className="ms-3 fw-bold fs-5">Recommended Trainer for you</h3>
      <div className="row ms-1" style={{width:'550px'}}>
        {trainers.map((trainer, index) => (
          <Trainers key={index} {...trainer} />
        ))}
      </div>
    </div>
    <div>
      <h4 className="text-center text-success fw-bold fs-5" >Break Fast</h4>
      <Schedule meal={breakfast} time="10:00 am" />
      <Schedule meal={blueberry} time="10:00 am" />
    </div>
       
        </div>
       
      </main>
      </div>
      <div style={{backgroundColor:"lightgray"}}>
        <ProfileModel />
       
      </div>
      </div>
    </div>
  );
};

export default Dashboard;