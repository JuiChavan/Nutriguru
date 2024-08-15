import { useState } from "react";
import "../Css/SignUp.css";
import UserService from "../Service/UserService";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [name, setname] = useState("");
 
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const [role, setRole] = useState("");
  const[fee,setFee]=useState("");
  const[qualification,setQualification]=useState("");
  const[category,setCategory]=useState("");

  const validateEmail = (email) => {
    const emailFormat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$/;
    return emailFormat.test(email);
  };

  const navigate = useNavigate();



  const submit = () => {
    if (!name || !email || !password || !fee || !qualification || !category || !role) {
      alert("Please fill out all required fields.");
      return;
    }

  

    // Validate email format
    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }
  
    const userDetails = {
      name,
      email,
      password,
      fee,
      qualification,
      category,
      role
    };

    UserService.signUpForNutritionist(userDetails)
      .then((resp) => {
        console.log("User data:", resp.data);
        navigate("/signIn");
      })
      .catch((err) => {
        console.error(
          "Error in sign-up:",
          err.response ? err.response.data : err.message
        );
        navigate("/SignUpForNutritionist");
      });
  };

  return (
    <div className="sign-up">
      <div className="sign-up-form-container">
      
        <form className="signUp-form">
        <div className="s-up">
        <p>Sign Up</p>
      </div>
          <label htmlFor="name" className="signUp-label">
            Full Name
          </label>
          <input
            className="signUp-input"
            id="name"
            type="text"
            value={name}
            onChange={(e) => setname(e.target.value)}
            required
          />
          <label htmlFor="email" className="signUp-label">
            Email
          </label>
          <input
            className="signIn-input"
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        
         
          <label htmlFor="password" className="signUp-label">
            Password
          </label>
          <input
            className="signUp-input"
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
         <label htmlFor="fee" className="signUp-label">
            Consulting Fee
          </label>
          <input
            className="signUp-input"
            id="fee"
            type="number"
            value={fee}
            onChange={(e) => setFee(e.target.value)}
            required
          />
          <label htmlFor="qualification" className="signUp-label">
          Qualification
          </label>
          <input
            className="signUp-input"
            id="qualification"
            type="text"
            value={qualification}
            onChange={(e) => setQualification(e.target.value)}
            required
          />
          <label htmlFor="category" className="signUp-label">
          Category Name
          </label>
          <input
            className="signUp-input"
            id="category"
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
  

          <label htmlFor="role" className="signUp-label">
            Role
          </label>
          <div id="role" className="signUp-radio-role">
            <label>
              <input
                className="opt"
                type="radio"
                name="role"
                value="CLIENT"
                checked={role === "CLIENT"}
                onChange={(e) => setRole(e.target.value)}
                required
              />
              CLIENT
            </label>
            <label>
              <input
                className="opt"
                type="radio"
                name="role"
                value="NUTRITIONIST"
                checked={role === "NUTRITIONIST"}
                onChange={(e) => setRole(e.target.value)}
                required
              />
              NUTRITIONIST
            </label>
          </div>
          <button
            className="signUp-btnSubmit"
            type="button"
            onClick={() =>
              submit(name, email, password, fee, qualification, category)
            }
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
