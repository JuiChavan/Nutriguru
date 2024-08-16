import React, { useEffect } from 'react';
import  '../Css/Home.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation, useNavigate } from "react-router-dom";

export default function Home(){

  const navigate = useNavigate(); // Hook for programmatic navigation
  const location = useLocation();
  const clientEmail = location.state?.clientEmail;
  // const nutriEmail=location.state?.user.email // Corrected access
  console.log("logged is user ", clientEmail);


  useEffect(()=>{
    console.log("client email-- ",clientEmail)
  },[])

  const bmiPage = () => {
    navigate('/knowYourBody'); // Navigate to the BMI Calculator page
  };

  const blogPage=()=>{
    navigate('/blogs')   //Navigate to the Blog page
  }
  
  const getAllNutriGuru = () => {
    navigate('/nutritionists', { state: { clientEmail } });
  }
  
  const getAllNutriAppointment=()=>{
    navigate("/MyAppointment",{ state: { clientEmail:clientEmail } });
  }
  const aboutUsPage=()=>{
    navigate('/aboutUs')
  }
  return (
    <div className='div-body'>

    <br></br>
    <Navbar  className="custom-navbar" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto ">
          <div className='title-header'>
            <h1>
               Nutriguru<sub className='sub'> <u>Book Your Bite</u> </sub>  
            </h1>
          </div >
            <Nav.Link className='nav-link ' onClick={()=>{bmiPage()}}>BMI Calculator</Nav.Link>
            <Nav.Link className='nav-link 'onClick={()=>{aboutUsPage()}}>About Us</Nav.Link>
            <Nav.Link className='nav-link ' onClick={blogPage}>Blogs</Nav.Link>
            <Nav.Link className='nav-link ' onClick={()=>{getAllNutriGuru()}}>Book Appointment</Nav.Link>
            <Nav.Link className='nav-link ' onClick={()=>{getAllNutriAppointment()}}>Show My Appointment</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className='byb'>
        <h3>Your one-stop destination 
          for personalized nutrition plans and expert advice on achieving your health goals</h3>  
      </div>
    
      <div className='healthy-quote1'>
        <p>SAY GOODBYE TO BORING DIETS AND HELLO TO NUTRIENT-RICH EATING !</p>
      </div>
      

      <div className='nutri-info'>
        <p>Nutriguru is your trusted partner in achieving optimal health through personalized nutrition plans. 
          We offer expert guidance tailored to your unique needs. Our team of nutritionists uses science backed methods 
          to help you reach your wellness goals. Join Nutriguru and take the first step towards a healthier lifestyle. 
          Our practical and effective approach ensures you get the results you desire. </p>
      </div>


      <div className='tagline'>
        <div className='tagline-book'>
        <p>Book Your Healthy Bites With Us</p>

        </div>
      <button className='byb-consult-us-btn'>
        Consult Us
      </button>
      </div>

      <div className='join-now'>
        <p>Transform Your Health Today</p>
        <h3>Join Nuriguru and start your wellness journy</h3>
        <button className='join-now-btn'>
        Join Us
      </button>
      </div>
       <footer className="home-page-footer">
        <p>&copy; 2024 Nutriguru. All rights reserved.</p>
      </footer> 
    </div>
  );
};