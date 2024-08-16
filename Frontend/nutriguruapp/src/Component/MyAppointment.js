// MyAppointment.js
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import UserService from "../Service/UserService";
import { useNavigate } from "react-router-dom";
export default function MyAppointment() {
  const location = useLocation();
  const navigate = useNavigate(); 
  const email = location.state?.clientEmail;
  const [clientName, setClientName] = useState('');
  const [clientId, setClientId] = useState(null);
  const [dietPlan, setDietPlan] = useState(null);
  const [showDietPlan, setShowDietPlan] = useState(false);
  useEffect(() => {
    setClientName(email)
    if (email) {
      UserService.getByEmail(email)
        .then((resp) => {
          setClientName(resp.data.name);
          setClientId(resp.data.id);
        })
        .catch((err) => {
          if (err.response && err.response.status === 302) {
            console.log("Redirect detected:", err.response.headers.location);
          } else {
            console.log("Error ", err);
          }
        });
    }
  }, [email]);

 /* useEffect(() => {
    if (clientId !== null) {
      UserService.getDietPlan(clientId)
        .then((resp) => {
          console.log("diet plan ", resp.data);
        })
        .catch((err) => {
          console.log("Error ", err);
        });
    }
  }, [clientId]);
  const handleShowDietPlan = () => {
    setShowDietPlan(true);
  };*/
  const handleShowDietPlan = () => {
    if (clientId) {
      navigate(`/showDietPlan/${clientId}`);
    }
  };
  return (
    <div className="my-appointment-container">
      <h2>Client Information</h2>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Name:</strong> {clientName}</p>
      <p><strong>ID:</strong> {clientId}</p>
      <button onClick={handleShowDietPlan}>Show Diet Plan</button>
    </div>
  );
}
