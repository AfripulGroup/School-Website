import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import AboutUs from "./pages/About/AboutUs";
import Admissions from "./pages/Admissions/Admissions";
import Careers from "./pages/Careers/Careers";
import ContactUs from "./pages/Contact/ContactUs";
import Gallery from "./pages/Gallery/Gallery";
import NewsEvents from "./pages/NewsEvents/NewsEvents";
import ParentPortal from "./pages/ParentPortal/ParentPortal";
import Programs from "./pages/Programs/Programs";
import ScrollToTop from "./utils/ScrollToTop";
import ParentDashboard from "./pages/ParentPortal/ParentDashboard";
import SearchResults from "./components/SearchResults/SearchResults";


const App = () => {
   const location = useLocation();

   // Define the routes where the main Navbar should be hidden
   const hideNavbarRoutes = ["/parent-dashboard"];
   const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

   return (
      <div>
         <ScrollToTop />
         { !shouldHideNavbar && <Navbar /> }
         <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/about-us" element={ <AboutUs /> } />
            <Route path="/programs" element={ <Programs /> } />
            <Route path="/admissions" element={ <Admissions /> } />
            <Route path="/contact-us" element={ <ContactUs /> } />
            <Route path="/gallery" element={ <Gallery /> } />
            <Route path="/careers" element={ <Careers /> } />
            <Route path="/news-events" element={ <NewsEvents /> } />
            <Route path="/parent-portal" element={ <ParentPortal /> } />
            <Route path="/parent-dashboard" element={ <ParentDashboard /> } />
            <Route path="/search" element={ <SearchResults /> } />
         </Routes>
         <Footer />
      </div>
   );
};

export default App;