import { Outlet } from "react-router";
import { Link } from "react-router-dom";
export function AboutUs() {
    // const navigate = useNavigate();
    return (
      <>
        <h3> About Us Component </h3>
        <Link to="/" className="anchor"> BACK TO HOME </Link> &nbsp;
        
        <Outlet />
      </>
    );
  }

  


  export function ContactUs() {
    // const navigate = useNavigate();
    return (
      <>
        <h3> Contact Us Component </h3>
        <Link to="/" className="anchor"> BACK TO HOME </Link> &nbsp;
        
        <Outlet />
      </>
    );
  }
  // export default ContactUs;

  export function Branches() {
    // const navigate = useNavigate();
    return (
      <>
        <h3> Branches Component </h3>
        <Link to="/" className="anchor"> BACK TO HOME </Link> &nbsp;
        
        <Outlet />
      </>
    );
  }


  export function AdminLogin() {
    // const navigate = useNavigate();
    return (
      <>
        <h3> Admin Login Component </h3>
        <Link to="/" className="anchor"> BACK TO HOME </Link> &nbsp;
        
        <Outlet />
      </>
    );
  }
  export function StudentLogin() {
    // const navigate = useNavigate();
    return (
      <>
        <h3> Student Login Component </h3>
        <Link to="/" className="anchor"> BACK TO HOME </Link> &nbsp;
        
        <Outlet />
      </>
    );
  }
  // export default Branches;
