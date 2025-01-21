/* eslint-disable react/prop-types */
import { FaTimes } from "react-icons/fa";

const FullViewModal = ({ isOpen, closeModal, title, content }) => {
   if (!isOpen) return null;

   return (
      <div className="modal-overlay">
         <div className="modal-content">
            <button className="close-btn" onClick={ closeModal }>
               <FaTimes />
            </button>
            <h2>{ title }</h2>
            <p>{ content }</p>
         </div>
      </div>
   );
};

export default FullViewModal;
