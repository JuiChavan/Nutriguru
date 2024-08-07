import React, { useEffect, useState } from 'react';
import '../Css/Nutritionists.css';
import NutritionistService from '../Service/NutritionistService';

export default function GetAllNutritionist() {
  const [nutritionists, setNutritionist] = useState([]);

  useEffect(() => {
    fetchAll();
  }, []);

  const fetchAll = () => {
    NutritionistService.getAll()
      .then((resp) => {
        console.log("Data ", resp.data);
        setNutritionist(resp.data);
      })
      .catch((err) => {
        console.log("err ", err);
      });
  };

  return (
    <div className="nutritionists-container">
      <h1>Our team of nutrition professionals</h1>
      <div className="nutritionists-list">
        {nutritionists.map((nutritionist) => (
          <div key={nutritionist.id} className="nutritionist-card">
            <div className="profile-pic">
              <img 
                src='https://i.pinimg.com/564x/8c/c9/68/8cc9685d03a0233b437a37f66af87b7b.jpg' 
                alt="Default profile"
              />
            </div>
            <div className="nutritionist-details">
              <b>{nutritionist.name}</b>
              <p>Category Name: {nutritionist.categoryName}</p>
              <p>Consultation Fees: &#8377;{nutritionist.consulatationFees}</p>
              <p>Email: {nutritionist.email}</p>
              <p>Qualification: {nutritionist.qualification}</p>
              <p>Rating: {nutritionist.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
