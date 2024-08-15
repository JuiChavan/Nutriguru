import { useState } from "react";
import '../Css/SignIn.css';
import { Link, useNavigate } from "react-router-dom";
import UserService from "../Service/UserService";

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [invalid, setInvalid] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    UserService.signIn({ email, password })
      .then((resp) => {
        console.log("sign-in response", resp);

        if (resp.data) {
          const user = resp.data;
          const nutriEmail=resp.data.email;
          setInvalid("");
          console.log("--user--",user);
          const clientEmail=resp.data.email;

          // Navigate based on role
          if (user.role === "NUTRITIONIST") {
            navigate('/AllAppointment', { state: { user: user ,nutriEmail:nutriEmail} });
          } else if (user.role === "CLIENT") {
            navigate('/home', { state: { clientEmail:resp.data.email, } });
          } else {
            // Handle other roles or unknown roles
            navigate('/home'); // Default or error page
          }
        }
      })
      .catch((err) => {
        setInvalid("Invalid User or Password");
        console.log("Error in sign-in", err.response ? err.response.data : err.message);
      });
  };

  return (
    <div className="sign-in">
      <div className="sign-in-form-container">
        <form className="signIn-form" onSubmit={handleSubmit}>
          <div className="signin-tagline">
            <p>Sign In</p>
          </div>
          <label htmlFor="email" className="signIn-label">Email</label>
          <br />
          <input
            className="signIn-input"
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <label htmlFor="password" className="signIn-label">Password</label>
          <input
            className="signIn-input"
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
          <div className="invalid-user">
            <p>{invalid}</p>
          </div>
          <button
            className="signIn-btnSubmit"
            type="submit"
          >
            Submit
          </button>
          <br />
          <br />
          <div className="sign-up-link">
            <h6>
              Don't have an account <span>?</span>
              <Link to="/signUp"> Sign up</Link>
            </h6>
          </div>
          <footer className="signIn-page-footer">
            <p>&copy; 2024 Nutriguru. All rights reserved.</p>
          </footer>
        </form>
      </div>
    </div>
  );
}
