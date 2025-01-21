import { useState, useContext } from "react";
import { ParentContext } from "../../context/ParentContext";
import { FaUserAlt, FaEnvelope, FaLock, FaChild } from "react-icons/fa"; // Importing icons
import "./ParentPortal.css";

const Signup = () => {
   const { signup } = useContext(ParentContext);
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [childName, setChildName] = useState("");
   const [error, setError] = useState("");

   const handleSignup = (e) => {
      e.preventDefault();

      if (!name || !email || !password || !childName) {
         setError("All fields are required.");
         return;
      }

      const newUser = {
         name,
         email,
         password,
         childName,
      };

      signup(newUser);
   };

   return (
      <div className="signup-page">
         <h2>
            <FaUserAlt /> Parent Portal Signup
         </h2>
         <form onSubmit={ handleSignup }>
            <div className="form-group-container">
               <div className="form-group">
                  <label className="label">
                     <FaUserAlt /> Name:
                  </label>
                  <input
                     type="text"
                     className="input"
                     value={ name }
                     onChange={ (e) => setName(e.target.value) }
                     required
                  />
               </div>
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
            </div>
            <div className="form-group-container">
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
               <div className="form-group">
                  <label className="label">
                     <FaChild /> Child&apos;s Name:
                  </label>
                  <input
                     type="text"
                     className="input"
                     value={ childName }
                     onChange={ (e) => setChildName(e.target.value) }
                     required
                  />
               </div>
            </div>
            { error && <p className="error-msg">{ error }</p> }
            <button type="submit" className="signup-btn">
               <FaUserAlt /> Signup
            </button>
         </form>
      </div>
   );
};

export default Signup;
