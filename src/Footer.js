import React from 'react';
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
  import { Stack } from '@mui/material';

  
function Footer() {
  return <div className="footer">
      
{/* 
      <Routes>
          <Route path="/aboutus" element={<AboutUs />}>

          </Route>
          <Route path="/contactus" element={<ContactUs />}>

          </Route>
          <Route path="/Branches" element={<Branches />}>

          </Route>
      </Routes> */}
      <Stack direction="row" spacing={2}>
      <Link to="/aboutus" className="anchor"> About Us </Link> &nbsp;
      <Link to="/contactus"className="anchor"> Contact Us </Link> &nbsp;
      <Link to="/Branches" className="anchor"> Branches  </Link> &nbsp;
    </Stack>

     
     

    
  </div>;
}

export default Footer;

