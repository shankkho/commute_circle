
import './App.css'
import { Route, Routes} from 'react-router-dom' 
import Home from './Componant/home';
import FindRide from './Componant/FindRide';
import Offerride from './Componant/Offerride';

const App = () =>  {


  return (    
  
    <Routes>

      <Route path = "/" element={<Home/>}></Route>
      <Route path = "/findRide" element={<FindRide/>} ></Route>
      <Route path = "/offerride" element={<Offerride/>}></Route>

    </Routes>
  
      
  );
  
}

export default App;
