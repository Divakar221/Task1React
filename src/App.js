// import logo from './logo.svg';
import './App.css';
import {Branches} from './Functions'
import {AboutUs }from './Functions'
import {ContactUs} from './Functions'
import { AdminLogin } from './Functions';
import { StudentLogin } from './Functions';
import Main from './Main';
import {
  BrowserRouter,
  Route,
  Link,
  Routes,
  Outlet,
  useLocation,
  useParams,
  useNavigate,
} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>

      
          <Route path="/" element={<Main/>}>

          </Route>
          <Route path="/aboutus" element={<AboutUs />}>

          </Route>

          <Route path="/contactus" element={<ContactUs />}>
          </Route>

          <Route path="/Branches" element={<Branches />}>
          </Route>
         
          <Route path="/adminlogin" element={<AdminLogin/>}>
             </Route> 

             <Route path="/StudentLogin" element={<StudentLogin/>}>
             </Route>  

      </Routes>
      
      </BrowserRouter>
     

      
    </div>
  );
}

export default App;
