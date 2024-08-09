import { useState } from "react";
import '../Css/SignUp.css';
import UserService from "../Service/UserService";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [name, setname] = useState('');
  const [age, setAge] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contact, setContact] = useState('');
  const [address, setAddress] = useState({
    addressLine1: 'x',
    addressLine2: 'y',
    state: 'z',
    coutryCode: '123',
    zipCode: '415'
  });

  const navigate = useNavigate();

  const submit = () => {
    const userDetails = {
      name,
      email,
      password,
      contact,
      age,
      dob,
      address,
    };

    UserService.signUp(userDetails)
      .then((resp) => {
        console.log("User data:", resp.data);
        navigate('/signIn');
      })
      .catch((err) => {
        console.error("Error in sign-up:", err.response ? err.response.data : err.message);
        navigate('/signUp');
      });
  };

  return (
    <div className="sign-up">
      <div className="sign-up-form-container">
        <form className="signUp-form">
          <label htmlFor="name" className="signUp-label">Full Name</label>
          <input className="signUp-input" id="name" type="text" value={name} onChange={(e) => setname(e.target.value)} required />

          <label htmlFor="email" className="signUp-label">Email</label>
          <input className="signUp-input" id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

          <label htmlFor="age" className="signUp-label">Age</label>
          <input className="signUp-input" id="age" type="number" value={age} onChange={(e) => setAge(e.target.value)} required />

          <label htmlFor="dob" className="signUp-label">DOB</label>
          <input className="signUp-input" id="dob" type="date" value={dob} onChange={(e) => setDob(e.target.value)} required />

          <label htmlFor="password" className="signUp-label">Password</label>
          <input className="signUp-input" id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

          <label htmlFor="contact" className="signUp-label">Contact</label>
          <input className="signUp-input" id="contact" type="tel" value={contact} onChange={(e) => setContact(e.target.value)} required />

          {/* <label htmlFor="address" className="signUp-label">Address</label>
          <input className="signUp-input" id="address" type="text" value={address} onChange={(e) => setAddress(e.target.value)} required /> */}

          {/* <label htmlFor="gender" className="signUp-label">Gender</label>
          <label className="gender-label"><input type="radio" name="gender" id="female" value="Female" onChange={(e) => setGender(e.target.value)} />Female</label>
          <label className="gender-label"><input type="radio" name="gender" id="male" value="Male" onChange={(e) => setGender(e.target.value)} />Male</label>
          <label className="gender-label"><input type="radio" name="gender" id="other" value="Other" onChange={(e) => setGender(e.target.value)} />Other</label> */}

          <button className="signUp-btnSubmit" type="button" onClick={() => submit(name,email, password,contact,age,dob,address)}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
