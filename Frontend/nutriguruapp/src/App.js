import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './Component/Home';
import KnowYourBody from './Component/KnowYourBody';
import SignIn from './Component/SignIn';
import SignUp from './Component/SignUp';
import GetAllNutritionist from './Component/GetAllNutritionist'
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/knowYourBody' element={<KnowYourBody/>}/>
        <Route path='/signIn' element={<SignIn/>}/>
        <Route path='/signUp' element={<SignUp/>}/>
        <Route path='/nutritionists' element={<GetAllNutritionist/>}/>

      </Routes>
    </div>
  );
}

export default App;
