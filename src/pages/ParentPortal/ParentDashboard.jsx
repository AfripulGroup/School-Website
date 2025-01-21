import { useContext } from "react";
import { ParentContext } from "../../context/ParentContext";
import PortalNavbar from "./PortalNavbar";
import Attendance from "./Attendance";
import Grades from "./Grades";
import Updates from "./Updates";
import Resources from "./Resources";
import { motion } from 'framer-motion';
import "./ParentDashboard.css";

const ParentDashboard = () => {
   const { parentData } = useContext(ParentContext);

   return (
      <>
         <PortalNavbar />
         <motion.div
            initial={ { opacity: 0, y: 30 } }
            animate={ { opacity: 1, y: 0 } }
            transition={ { duration: 0.8 } }
         >
            <div className="parent-dashboard">
               <header>
                  <h2>Welcome, { parentData?.name }</h2>
                  <h4>Child: { parentData?.childName }</h4>

               </header>
               <div className="childs">
                  <Attendance />
                  <Updates />
                  <Grades />
                  <Resources />
               </div>
            </div>
         </motion.div>
      </>
   );
};

export default ParentDashboard;
