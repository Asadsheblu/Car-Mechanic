
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
import Experts from './Components/Pages/Experts/Experts'
import AllCustomerReview from './Components/Pages/CustomerReview/AllCustomerReview';
import Adduser from './Components/Pages/Adduser';
import Bikedetails from './Components/Bike/Bikedetails';
import Manageservice from './Components/Pages/Manageservice';




function App() {
  
  return (
    <div className="App">

      <Header />
      
     <Routes>
       <Route path='/' element={
     
      <Home/>
     
       }></Route>
      
       <Route path='/login' element={<Login />}></Route>
       <Route path='/register' element={<SIgnUp />}></Route>
       <Route path='/service' element={
         <RequireAuth>
           <Services />
         </RequireAuth>
       }>
         </Route>
       <Route path='/addservice' element={
         <RequireAuth>
           <Adduser />
         </RequireAuth>
       }>
         </Route>
       <Route path='/manage' element={
         <RequireAuth>
           <Manageservice />
         </RequireAuth>
       }>
         </Route>
       <Route path='/bike' element={
         <RequireAuth>
           <Bikes />
         </RequireAuth>
       }>
         </Route>
       <Route path="/review" element={
         <RequireAuth>
           <AllCustomerReview />
         </RequireAuth>
       }></Route>
         <Route path="/service/:serviceId" element={<Servicedetails />}></Route>
         <Route path="/bike/:bikeId" element={<Bikedetails />}></Route>
      <Route path='/expert' element={
        <RequireAuth>
          <Experts></Experts>
        </RequireAuth>
      }></Route>
        
      <Route path='*'  element={<Notfound />}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
