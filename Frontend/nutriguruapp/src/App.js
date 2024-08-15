import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './Component/Home';
import KnowYourBody from './Component/KnowYourBody';
import SignIn from './Component/SignIn';
import SignUp from './Component/SignUp';
import GetAllNutritionist from './Component/GetAllNutritionist'
import BookNutrionistAppointment from './Component/BookNutrionistAppointment';
import Blogs from './Component/Blogs'
import AllAppointment from './Component/AllAppointment'
import AddDiet from './Component/AddDiet'
import MyAppointment from './Component/MyAppointment'

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<SignIn/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/knowYourBody' element={<KnowYourBody/>}/>
        <Route path='/signIn' element={<SignIn/>}/>
        <Route path='/signUp' element={<SignUp/>}/>
        <Route path='/nutritionists' element={<GetAllNutritionist/>}/>
        <Route path='/bookAppointment' element={<BookNutrionistAppointment/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/AllAppointment' element={<AllAppointment/>}/>
        <Route path='/AddDiet' element={<AddDiet/>}/>
        <Route path='/MyAppointment' element={<MyAppointment/>}/>

        
      </Routes>
    </div>
  );
}

export default App;
