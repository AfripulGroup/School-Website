import { useState, useContext } from "react";
import { ParentContext } from "../../context/ParentContext";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // React icons for toggle button
import "./PortalNavbar.css";

const PortalNavbar = () => {
   const { logout } = useContext(ParentContext);
   const [isOpen, setIsOpen] = useState(false);

   const toggleNavbar = () => {
      setIsOpen(!isOpen);
   };

   return (
      <nav className={ `portal-navbar ${isOpen ? "open" : ""}` }>
         <div className="navbar-container">
            <div className="header">
               <h1 className="portal-logo">Parent Portal</h1>
               <div className="navbar-toggle" onClick={ toggleNavbar }>
                  { isOpen ? <FaTimes /> : <FaBars /> }
               </div>

            </div>
            <ul className={ `navbar-links ${isOpen ? "show" : ""}` }>
               <li>
                  <Link to="/dashboard/attendance" className="nav-link">
                     Attendance
                  </Link>
               </li>
               <li>
                  <Link to="/dashboard/grades" className="nav-link">
                     Grades
                  </Link>
               </li>
               <li>
                  <Link to="/dashboard/updates" className="nav-link">
                     Updates
                  </Link>
               </li>
               <li>
                  <Link to="/dashboard/resources" className="nav-link">
                     Resources
                  </Link>
               </li>
               <button onClick={ logout } className="logout-btn">
                  Logout
               </button>
            </ul>
         </div>
      </nav>
   );
};

export default PortalNavbar;
