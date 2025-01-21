const Resources = () => {
   const resources = [
      { name: "School Handbook", link: "/handbook.pdf" },
      { name: "Holiday Schedule", link: "/holiday-schedule.pdf" },
   ];

   return (
      <div className="resources-section">
         <h3>Resources</h3>
         <ul>
            { resources.map((resource, index) => (
               <li key={ index }>
                  <a href={ resource.link } download>
                     { resource.name }
                  </a>
               </li>
            )) }
         </ul>
      </div>
   );
};

export default Resources;
