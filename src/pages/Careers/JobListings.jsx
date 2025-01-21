/* eslint-disable react/prop-types */

const JobListings = ({ jobOpenings, onJobSelect }) => {
   return (
      <div className="job-listings">
         { jobOpenings.map((job) => (
            <div key={ job.id } className="job-card">
               <h3>{ job.title }</h3>
               <p><strong>Department:</strong> { job.department }</p>
               <p><strong>Location:</strong> { job.location }</p>
               <p>{ job.summary }</p>
               <button onClick={ () => onJobSelect(job) } className="details-btn">
                  View Details
               </button>
            </div>
         )) }
      </div>
   );
};

export default JobListings;
