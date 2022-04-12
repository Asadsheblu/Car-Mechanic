
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Bikes from './Components/Bike/Bikes';
import Notfound from './Components/Notfound/Notfound';



import Home from './Components/Pages/Home';
import Login from './Components/Pages/Login';
import Servicedetails from './Components/Pages/Servicedetails';
import Services from './Components/Pages/Services';

import SIgnUp from './Components/Pages/SIgnUp';
import Footer from './Components/Public/Footer';
import Header from './Components/Public/Header';
import RequireAuth from './Components/RequireAuth';





function App() {
  
  return (
    <div className="App">

      <Header />
      <Bikes />
     <Routes>
       <Route path='/' element={
       <RequireAuth>
      <Home/>
     </RequireAuth>
       }></Route>
      
       <Route path='/login' element={<Login />}></Route>
       <Route path='/register' element={<SIgnUp />}></Route>
       <Route path='/service' element={
         <RequireAuth>
           <Services />
         </RequireAuth>
       }>
         <Route path="/service/:serviceId" element={<Servicedetails />}></Route>
       </Route>
        {/* <Route path='/bike'element={<Bikes />}></Route> */}
      <Route path='*'  element={<Notfound />}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
