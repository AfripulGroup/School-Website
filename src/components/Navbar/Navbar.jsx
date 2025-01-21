import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaSearch } from 'react-icons/fa';
import logo from '../../assets/logo.jpg';
import './Navbar.css';

const Navbar = () => {
   const [menuOpen, setMenuOpen] = useState(false);
   const [searchQuery, setSearchQuery] = useState('');
   const navigate = useNavigate();

   const toggleMenu = () => {
      setMenuOpen(!menuOpen);
   };

   // Handle search form submission
   const handleSearch = (e) => {
      if (e.type === "submit" || (e.type === "keydown" && e.key === "Enter")) {
         e.preventDefault();
         if (searchQuery.trim()) {
            // Redirect to a search results page
            navigate(`/search?query=${searchQuery}`);
            setSearchQuery('');
            setMenuOpen(false);
         }
      }
   };


   // Getting the current pathname to identify the active link
   const location = useLocation();
   const isActive = (path) => (location.pathname === path ? 'active' : '');

   return (
      <nav className="navbar">
         <div className="navbar__logo" onClick={ () => navigate('/') }>
            <img src={ logo } alt="Rockville Montessori School" />
            <h1>Rockville Montessori</h1>
         </div>
         <div className={ `navbar__menu ${menuOpen ? 'open' : ''}` }>
            <ul>
               <li>
                  <Link
                     to="/"
                     className={ isActive('/') }
                     onClick={ () => setMenuOpen(false) }
                  >
                     Home
                  </Link>
               </li>
               <li>
                  <Link
                     to="/about-us"
                     className={ isActive('/about-us') }
                     onClick={ () => setMenuOpen(false) }
                  >
                     About Us
                  </Link>
               </li>
               <li>
                  <Link
                     to="/programs"
                     className={ isActive('/programs') }
                     onClick={ () => setMenuOpen(false) }
                  >
                     Programs
                  </Link>
               </li>
               <li>
                  <Link
                     to="/admissions"
                     className={ isActive('/admissions') }
                     onClick={ () => setMenuOpen(false) }
                  >
                     Admissions
                  </Link>
               </li>
               <li>
                  <Link
                     to="/contact-us"
                     className={ isActive('/contact-us') }
                     onClick={ () => setMenuOpen(false) }
                  >
                     Contact Us
                  </Link>
               </li>
               <li>
                  <Link
                     to="/parent-portal"
                     className={ isActive('/parent-portal') }
                     onClick={ () => setMenuOpen(false) }
                  >
                     Parent Portal
                  </Link>
               </li>
            </ul>
            <form className="navbar__search" onSubmit={ handleSearch }>
               <FaSearch />
               <input
                  type="text"
                  placeholder="Search..."
                  value={ searchQuery }
                  onChange={ (e) => setSearchQuery(e.target.value) }
                  onKeyDown={ handleSearch }
               />
            </form>
         </div>
         <div className="navbar__toggle" onClick={ toggleMenu }>
            { menuOpen ? <FaTimes /> : <FaBars /> }
         </div>
      </nav>
   );
};

export default Navbar;
