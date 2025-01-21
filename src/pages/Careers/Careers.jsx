import { useState } from "react";
import JobListings from "./JobListings";
import JobDetailsModal from "./JobDetailsModal";
import ApplicationForm from "./ApplicationForm";
import { jobOpenings } from "./jobData";
import "./Careers.css";

const Careers = () => {
   const [selectedJob, setSelectedJob] = useState(null);

   const openJobDetails = (job) => {
      setSelectedJob(job);
   };

   const closeJobDetails = () => {
      setSelectedJob(null);
   };

   return (
      <section className="careers">
         <h2 className="section-title">Careers at Our School</h2>
         <JobListings jobOpenings={ jobOpenings } onJobSelect={ openJobDetails } />
         { selectedJob && (
            <JobDetailsModal job={ selectedJob } onClose={ closeJobDetails } />
         ) }
         <ApplicationForm />
      </section>
   );
};

export default Careers;
