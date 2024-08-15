// MyAppointment.js
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import UserService from "../Service/UserService";

export default function MyAppointment() {
  const location = useLocation();
  const email = location.state?.clientEmail;
  const [clientName, setClientName] = useState('');
  const [clientId, setClientId] = useState(null);

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

  useEffect(() => {
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

  return (
    <div>
      Client email: {email}
      <br />
      Client name: {clientName}
      <br />
      Client ID: {clientId}
    </div>
  );
}
