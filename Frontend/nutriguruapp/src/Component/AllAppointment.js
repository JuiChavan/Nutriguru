import React, { useEffect, useState } from 'react';
import AppointmentService from '../Service/AppointmentService';
import { Navigate, useLocation, useNavigate } from "react-router-dom";

// Define the AllAppointment component
export default function AllAppointment() {
    const location = useLocation();
    const navigate=useNavigate();
    const user = location.state?.user; 
    const nutriId=location.state?.nutriId; 

    console.log("user loged in ",user)
    console.log("nutriId ",nutriId)

    const nid = nutriId; // Nutritionist ID
    const [appointments, setAppointments] = useState([]); // Initialize as an empty array

    useEffect(() => {
        fetchAllAppointments(nid);
    }, [nid]);

    const fetchAllAppointments = (id) => {
        AppointmentService.getAll(id)
            .then((resp) => {
                console.log("Response data: ", resp.data);
                setAppointments(resp.data); // Set the response data as an array
            })
            .catch((err) => {
                console.error("Error fetching appointments: ", err);
            });
    };

    const addDietPlan = (cid,email) => {
        console.log("sending client id and email ",cid,email)
        navigate("/AddDiet", { state: {   cid: cid,email:email } });
    };

    return (
        <div>
            <h2>Appointment Details</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse', margin: '20px 0' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f4f4f4', textAlign: 'left' }}>Date</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f4f4f4', textAlign: 'left' }}>Time Slot</th>
                        {/* <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f4f4f4', textAlign: 'left' }}>Nutritionist ID</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f4f4f4', textAlign: 'left' }}>Nutritionist Name</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f4f4f4', textAlign: 'left' }}>Nutritionist Email</th> */}
                        {/* <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f4f4f4', textAlign: 'left' }}>Client ID</th> */}
                        <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f4f4f4', textAlign: 'left' }}>Client Name</th>
                        {/* <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f4f4f4', textAlign: 'left' }}>Client Email</th> */}
                        <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f4f4f4', textAlign: 'left' }}></th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map((appointment) => (
                        <tr key={appointment.id}>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{appointment.date}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{appointment.timeSlot}</td>
                            {/* <td style={{ border: '1px solid #ddd', padding: '8px' }}>{appointment.nutritionistId}</td> */}
                            {/* <td style={{ border: '1px solid #ddd', padding: '8px' }}>{appointment.nutritionistName}</td> */}
                            {/* <td style={{ border: '1px solid #ddd', padding: '8px' }}>{appointment.email}</td> */}
                            {/* <td style={{ border: '1px solid #ddd', padding: '8px' }}>{appointment.clientId}</td> */}
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{appointment.clientName}</td>
                            {/* <td style={{ border: '1px solid #ddd', padding: '8px' }}>{appointment.clientEmail}</td> */}
                            <td>
                                <button id="dietBtn" onClick={() => { addDietPlan(appointment.clientId,appointment.clientEmail) }}>
                                    Assign Diet Plan
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
