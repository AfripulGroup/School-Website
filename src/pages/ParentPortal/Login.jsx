import { useState, useContext } from "react";
import { ParentContext } from "../../context/ParentContext";
import { FaEnvelope, FaLock, FaSignInAlt } from "react-icons/fa";
import "./ParentPortal.css";

const Login = () => {
   const { login } = useContext(ParentContext);
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [error, setError] = useState("");

   const handleLogin = (e) => {
      e.preventDefault();

      // Retrieve stored signup data
      const storedData = JSON.parse(localStorage.getItem("parentSignupData"));

      if (!storedData || storedData.email !== email || storedData.password !== password) {
         setError("Invalid email or password.");
         return;
      }

      login(storedData);
   };

   return (
      <div className="login-page">
         <h2>
            <FaSignInAlt /> Parent Portal Login
         </h2>
         <form onSubmit={ handleLogin }>
            <div className="form-group">
               <label className="label">
                  <FaEnvelope /> Email:
               </label>
               <input
                  type="email"
                  className="input"
                  value={ email }
                  onChange={ (e) => setEmail(e.target.value) }
                  required
               />
            </div>
            <div className="form-group">
               <label className="label">
                  <FaLock /> Password:
               </label>
               <input
                  type="password"
                  className="input"
                  value={ password }
                  onChange={ (e) => setPassword(e.target.value) }
                  required
               />
            </div>
            { error && <p className="error-msg">{ error }</p> }
            <button type="submit" className="login-btn">
               <FaSignInAlt /> Login
            </button>
         </form>
      </div>
   );
};

export default Login;
