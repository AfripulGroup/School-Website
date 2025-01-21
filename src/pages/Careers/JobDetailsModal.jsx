/* eslint-disable react/prop-types */
const JobDetailsModal = ({ job, onClose }) => {
   return (
      <div className="modal-overlay" onClick={ onClose }>
         <div className="modal-content" onClick={ (e) => e.stopPropagation() }>
            <h3>{ job.title }</h3>
            <p><strong>Department:</strong> { job.department }</p>
            <p><strong>Location:</strong> { job.location }</p>
            <p>{ job.description }</p>
            <h4>Application Instructions</h4>
            <p>{ job.applicationInstructions }</p>
            <button className="close-btn" onClick={ onClose }>
               &times;
            </button>
         </div>
      </div>
   );
};

export default JobDetailsModal;
