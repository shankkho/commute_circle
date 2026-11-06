
import './App.css'
import { Route, Routes} from 'react-router-dom' 
import Home from './Componant/home';
import FindRide from './Componant/FindRide';
import Offerride from './Componant/Offerride';
import Aboutus from './Componant/Aboutus'
import Contactus from './Componant/Contactus';
import Helpsupport from './Componant/help';
const App = () =>  {


  return (    
  
    <Routes>

      <Route path = "/" element={<Home/>}></Route>
      <Route path = "/findRide" element={<FindRide/>} ></Route>
      <Route path = "/offerride" element={<Offerride/>}></Route>
      <Route path = "/aboutus" element={<Aboutus/>}></Route>
        <Route path = "/contactus" element={<Contactus/>}></Route>
         <Route path = "/Helpsupport" element={<Helpsupport/>}></Route>

    </Routes>
  
      
  );
  
}

export default App;
