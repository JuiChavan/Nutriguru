import React, { useEffect, useState } from "react";
import "../Css/Nutritionists.css";
import NutritionistService from "../Service/NutritionistService";
import { useLocation, useNavigate } from "react-router-dom";
import BookNutrionistAppointment from "./BookNutrionistAppointment";
import UserService from "../Service/UserService";

export default function GetAllNutritionist() {
  const [nutritionists, setNutritionists] = useState([]);
  const [nutritionist, setNutritionist] = useState([]);
  const [user, setUser] = useState({
    id: 0,
    name: "",
    email: "",
    age: 0,
    dob: "",
    address: {
      addressLine1: "",
      addressLine2: "",
      state: "",
      coutryCode: 0,
      zipCode: 0,
    },
  });
  const location = useLocation();
  const clientEmail = location.state?.clientEmail; // Corrected access
  console.log("--logged is user ", clientEmail);

  const navigate = useNavigate();

  useEffect(() => {
    fetchAll();
  }, []);

  useEffect(() => {
    console.log("--Updated user state:", user);
  }, [user]);

  //displaying all nutris
  const fetchAll = () => {
    console.log("--client email ", clientEmail);

    NutritionistService.getAll()
      .then((resp) => {
        setNutritionists(resp.data);
        console.log("*Data of nutritionists", resp.data);
        console.log("*client email ", clientEmail);
      })
      .catch((err) => {
        console.log("err ", err);
      });
  };

  const bookNutrionistAppointment = (clientEmail, nutritionist) => {
    console.log("email of client ", clientEmail);
    UserService.getByEmail(clientEmail)
      .then((resp) => {
        setUser(resp.data);
        setNutritionist(nutritionist); // Store the selected nutritionist in state
        console.log("user sending on click user data", resp.data);
        console.log("nutritionist sending on click nutri data ", nutritionist);
        navigate("/bookAppointment", {
          state: {
            user: resp.data,
            nutritionist: nutritionist,
          },
        });
      })
      .catch((err) => {
        if (err.response && err.response.status === 302) {
          // Handle redirection manually
          console.log("Redirect detected:", err.response.headers.location);
          // Optionally, follow the redirection or handle accordingly
        } else {
          console.log("Error ", err);
        }
      });
  };

  return (
    <div className="nutri-">
      <div className="nutritionists-container">
        <h1>Our team of nutrition professionals</h1>
        <div className="nutritionists-list">
          {nutritionists.map((nutritionist) => (
            <div key={nutritionist.id} className="nutritionist-card">
              <div className="profile-pic">
                <img
                  src="https://i.pinimg.com/564x/8c/c9/68/8cc9685d03a0233b437a37f66af87b7b.jpg"
                  alt="Default profile"
                />
              </div>
              <div className="nutritionist-details">
                <b>{nutritionist.name}</b>
                <p>Category Name: {nutritionist.categoryName}</p>
                <p>
                  Consultation Fees: &#8377;{nutritionist.consulatationFees}
                </p>
                <p>Email: {nutritionist.email}</p>
                <p>Qualification: {nutritionist.qualification}</p>
                <p>Rating: {nutritionist.rating}</p>
                <div className="book-nutritionist">
                  <button className="book-nutri-btn"
                    onClick={() => {
                      bookNutrionistAppointment(clientEmail, nutritionist);
                    }}
                  >
                    Book Nutritionist
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
