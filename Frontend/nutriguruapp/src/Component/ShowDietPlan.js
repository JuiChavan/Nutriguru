// DietPlan.js
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserService from "../Service/UserService";

export default function DietPlan() {
  const { clientId } = useParams();
  const [dietPlan, setDietPlan] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const [nutritionistId, setNutritionistId] = useState(null);
  useEffect(() => {
    if (clientId) {
      UserService.getDietPlan(clientId)
        .then((resp) => {
          setDietPlan(resp.data);
          setAppointments(resp.data.bookAppointmentIds || []);
          setNutritionistId(resp.data.nutritionistId);
        })
        .catch((err) => {
          console.log("Error ", err);
        });
    }
  }, [clientId]);

  if (!dietPlan) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Diet Plan Information</h2>
      <p><strong>Name:</strong> {dietPlan.name}</p>
      <p><strong>Email:</strong> {dietPlan.email}</p>
      <p><strong>Age:</strong> {dietPlan.age}</p>
      <p><strong>Date of Birth:</strong> {dietPlan.dob}</p>
      <p><strong>Nutritionist ID:</strong> {dietPlan.nutritionistId}</p>
      <p><strong>Appointments:</strong> {dietPlan.bookAppointmentIds.join(", ")}</p>
      <p><strong>Program:</strong> {dietPlan.program}</p>
<p><strong>Description:</strong> {dietPlan.description}</p>

    </div>

    
  );
}
