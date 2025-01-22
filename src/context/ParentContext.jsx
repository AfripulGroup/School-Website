/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const ParentContext = createContext();

const ParentProvider = ({ children }) => {
   const [isLoggedIn, setIsLoggedIn] = useState(false);
   const [parentData, setParentData] = useState(null);
   const navigate = useNavigate();

   // Check login state on mount
   useEffect(() => {
      const storedData = JSON.parse(localStorage.getItem("parentData"));
      if (storedData) {
         setIsLoggedIn(true);
         setParentData(storedData);
      }
   }, []);

   // Redirect to Parent Portal if logged in
   useEffect(() => {
      if (isLoggedIn) {
         navigate('/parent-dashboard');
      }
   }, [isLoggedIn, navigate]);

   // Login Parent
   const login = (data) => {
      localStorage.setItem("parentData", JSON.stringify(data));
      setParentData(data);
      setIsLoggedIn(true);
   };

   // Signup Parent
   const signup = (data) => {
      localStorage.setItem("parentSignupData", JSON.stringify(data));
      setParentData(data);
      navigate('/parent-dashboard');
   };

   // Logout Parent
   const logout = () => {
      localStorage.removeItem("parentData");
      setParentData(null);
      setIsLoggedIn(false);
      navigate('/parent-portal');
   };

   return (
      <ParentContext.Provider
         value={ { isLoggedIn, parentData, login, logout, signup } }
      >
         { children }
      </ParentContext.Provider>
   );
};

export default ParentProvider;
