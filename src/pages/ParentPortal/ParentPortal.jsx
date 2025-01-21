import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import './ParentPortal.css';
import { motion } from 'framer-motion';

const ParentPortal = () => {
   const [isSignup, setIsSignup] = useState(false);

   return (
      <div className="parent-portal">
         <motion.div
            initial={ { opacity: 0, y: 30 } }
            animate={ { opacity: 1, y: 0 } }
            transition={ { duration: 0.8 } }
         >
            { isSignup ? <Signup /> : <Login /> }
            <button
               className="auth-btn"
               onClick={ () => setIsSignup((prev) => !prev) }
            >
               { isSignup ? "Already have an account? Login" : "Don't have an account? Signup" }
            </button>

         </motion.div>
      </div>
   );
};

export default ParentPortal;
