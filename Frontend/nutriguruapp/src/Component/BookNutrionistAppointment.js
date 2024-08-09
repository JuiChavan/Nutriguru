// BookNutrionistAppointment.js
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AppointmentService from '../Service/AppointmentService';
import '../Css/BookNutrionistAppointment.css'; // Import the CSS file

export default function BookNutrionistAppointment() {
  const location = useLocation();
  const { user, nutritionist } = location.state || {}; // Destructure state
  const [date, setDate] = useState();
  const [timeSlot, setTimeSlot] = useState();
  const [userId, setUserId] = useState();
  const [nutritionistId, setNutritionistId] = useState();

  const data = {
    userId,
    nutritionistId,
    date,
    timeSlot
  };

  useEffect(() => {
    if (user) {
      console.log("User:", user);
    }
    if (nutritionist) {
      console.log("Selected Nutritionist:", nutritionist);
    }
  }, [user, nutritionist]);

  const bookAppointment = () => {
    data.userId = user.id;
    data.nutritionistId = nutritionist.id;
    data.timeSlot = timeSlot;
    data.date = date;
    console.log("data ", data.nutritionistId, data.userId, date, timeSlot);
    AppointmentService.bookAppointment(data)
      .then((resp) => {
        console.log("done ", resp.data);
        alert("Appointment booked");
      }).catch((err) => {
        console.log("err ", err);
      });
  };

  return (
    <div className="bacontainer">
      <h1>Book Appointment:Nutritionist Information</h1>
      <h2></h2>
      <br></br>
      {nutritionist && (
        <div>
          <p><b>{nutritionist.name}</b></p>
          <p>Category Name: {nutritionist.categoryName}</p>
          <p>Consultation Fees: &#8377;{nutritionist.consulatationFees}</p>
          <p>Email: {nutritionist.email}</p>
          <p>Qualification: {nutritionist.qualification}</p>
          <p>Rating: {nutritionist.rating}</p>
          <label htmlFor="book">Book Date</label>
          <br></br>
          <input type="date" value={date} name="date" onChange={(e) => setDate(e.target.value)} />
          <br></br>
          <label htmlFor="timeSlot">Time Slot</label>
          <br></br>
          <label>
            <input type="radio" name="timeSlot" id="MORNING" value="MORNING" onChange={(e) => setTimeSlot(e.target.value)} /> Morning
          </label>
          <label>
            <input type="radio" name="timeSlot" id="AFTERNOON" value="AFTERNOON" onChange={(e) => setTimeSlot(e.target.value)} /> Afternoon
          </label>
          <label>
            <input type="radio" name="timeSlot" id="EVENING" value="EVENING" onChange={(e) => setTimeSlot(e.target.value)} /> Evening
          </label>
          <br></br>
          <button id="book" onClick={() => bookAppointment()}>
            Book
          </button>
        </div>
      )}
    </div>
  );
}
