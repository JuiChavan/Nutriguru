import { useState } from "react";
import '../Css/SignIn.css'
import { Link } from "react-router-dom";

export default function SignIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const submit =(email,password)=>{

  }
  return (
    
    <div className="sign-in">
      <div className="sign-in-form-container">
        <form className="signIn-form">
          <label for="email" className="signIn-label">Email</label>
          <br></br>
          <input className="signIn-input" id="email" type="email" value={email} required />
          <br></br>
          <label for="password" className="signIn-label">Password</label>
          <input className="signIn-input" id="password" type="password" value={password} required />
          <br>
          </br>
          <button className="signIn-btnSubmit" onClick={()=>{submit(email,password)}}>
              Submit
          </button>
          <br>
          </br>
          <br></br>
          <h7>
            Don't have an acconut<span> ? </span>
            <Link to="/signUp">
            Sign up
            </Link>
          </h7>
        </form>
      </div>
      <br>
    </br>
      <footer className="signIn-page-footer">
        <p>&copy; 2024 Nutriguru. All rights reserved.</p>
      </footer>
      <div className="sign-in-bg-container"></div>
    </div>
  );
}