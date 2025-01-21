const Grades = () => {
   const grades = [
      { subject: "Core Mathematics", grade: "A" },
      { subject: "Integrated Science", grade: "B+" },
   ];

   return (
      <div className="grades-section">
         <h3>Grades</h3>
         <ul>
            { grades.map((item, index) => (
               <li key={ index }>
                  { item.subject }: { item.grade }
               </li>
            )) }
         </ul>
      </div>
   );
};

export default Grades;
