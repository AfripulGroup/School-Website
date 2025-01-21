const ApplicationForm = () => {
   return (
      <div className="application-form">
         <h2>Apply for a Position</h2>
         <form>
            <div className="form-group">
               <label htmlFor="name">Name</label>
               <input type="text" id="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
               <label htmlFor="email">Email</label>
               <input type="email" id="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
               <label htmlFor="phone">Phone</label>
               <input type="tel" id="phone" placeholder="Your Phone Number" required />
            </div>
            <div className="form-group">
               <label htmlFor="resume">Resume</label>
               <input type="file" id="resume" accept=".pdf,.doc,.docx" required />
            </div>
            <div className="form-group">
               <label htmlFor="cover-letter">Cover Letter</label>
               <textarea
                  id="cover-letter"
                  rows="5"
                  placeholder="Write your cover letter here"
                  required
               ></textarea>
            </div>
            <button type="submit" className="submit-btn">Submit Application</button>
         </form>
      </div>
   );
};

export default ApplicationForm;
