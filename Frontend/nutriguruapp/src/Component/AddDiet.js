import { useEffect, useState } from "react";
import NutritionistService from '../Service/NutritionistService';
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import UserService from "../Service/UserService";


export default function AddDiet() {
    const location = useLocation();
    const id = location.state?.cid;
    const email = location.state?.email;
    const [clientName,setClientName]=useState('');

    console.log("recevied id and em",id,email)
    useEffect(()=>{
        UserService.getByEmail(email)
        .then((resp) => {
          console.log("Data of users", resp.data);
          console.log("Data of users", resp.data.name);
          setClientName(resp.data.name);
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
    },[])

    const [description, setDescription] = useState('');
    const [program, setProgram] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const dietPlanDto = {
            description,
            program,
        };

        NutritionistService.addDietPlan(id, dietPlanDto)
            .then((resp) => {
                console.log(resp.data);
            })
            .catch((err) => {
                console.error(err.response ? err.response.data : err.message);
            });
    };

    return (
        <div className="diet-plan">
            <h2>Add Diet Plan for client {clientName}</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="program">Program:</label>
                    <input
                        id="program"
                        type="text"
                        value={program}
                        onChange={(e) => setProgram(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Add Diet Plan</button>
            </form>
        </div>
    );
}
