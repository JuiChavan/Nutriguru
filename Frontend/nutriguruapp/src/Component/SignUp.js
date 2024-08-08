import { useState } from "react";
import '../Css/SignUp.css'
import { Link } from "react-router-dom";

export default function SignUp() {
  const [fullName, setFullName] = useState('');
  const [age, setAge] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contact, setContact] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');

  const submit =(email,password)=>{
    console.log(email, password);
  }

  return (
    <div className="sign-up">
      <div className="sign-up-form-container">
        <form className="signUp-form">
          <br></br>
          <br></br>
          <label for="fullName" className="signUp-label">Full Name</label>
          <br></br>
          <input className="signUp-input" id="fullName" type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
          <br></br>

          <label for="email" className="signUp-label">Email</label>
          <br></br>
          <input className="signUp-input" id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <br></br>

          <label for="age" className="signUp-label">Age</label>
          <br></br>
          <input className="signUp-input" id="age" type="number" value={age} onChange={(e) => setAge(e.target.value)} required />
          <br></br>

          <label for="dob" className="signUp-label">Dob</label>
          <br></br>
          <input className="signUp-input" id="dob" type="date" value={dob} onChange={(e) => setDob(e.target.value)} required />
          <br></br>

          <label for="password" className="signUp-label">Password</label>
          <input className="signUp-input" id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <br></br>

          <label for="contact" className="signUp-label">Contact</label>
          <input className="signUp-input" id="contact" type="tel" value={contact} onChange={(e) => setContact(e.target.value)} required />
          <br></br>

          <label for="address" className="signUp-label">Address</label>
          <input className="signUp-input" id="address" type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
          <br></br>

          <label for="gender" className="signUp-label">Gender</label> <span>  </span>
          <label  className="gender-label"><input type="radio" name="gender" id="female" value="Female" onChange={(e) => setGender(e.target.value)}/>Female</label>
          <label  className="gender-label"><input type="radio" name="gender" id="male" value="Male" onChange={(e) => setGender(e.target.value)}/>Male</label>
          <label  className="gender-label"><input type="radio" name="gender" id="other" value="Other" onChange={(e) => setGender(e.target.value)}/>Other</label>
          <br></br> 

          <button className="signUp-btnSubmit" onClick={()=>{submit(email,password)}}>
              Book an appointment
          </button>
          <br></br>
          <br></br>
        </form>
      </div>
      <br></br>
      {/* <footer className="signUp-page-footer">
        <p>&copy; 2024 Nutriguru. All rights reserved.</p>
      </footer> */}
      <div className="sign-in-bg-container"></div>
    </div>
  );
}