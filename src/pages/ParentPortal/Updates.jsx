const Updates = () => {
   const updates = ["Parent-teacher meeting on January 20", "School closed on February 1"];

   return (
      <div className="updates-section">
         <h3>Updates</h3>
         <ul>
            { updates.map((update, index) => (
               <li key={ index }>{ update }</li>
            )) }
         </ul>
      </div>
   );
};

export default Updates;
