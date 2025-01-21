
const Attendance = () => {
   const attendanceData = [
      { date: "2025-01-15", status: "Present" },
      { date: "2025-01-14", status: "Absent" },
   ];

   return (
      <div className="attendance-section">
         <h3>Attendance</h3>
         <ul>
            { attendanceData.map((record, index) => (
               <li key={ index }>
                  { record.date } - { record.status }
               </li>
            )) }
         </ul>
      </div>
   );
};

export default Attendance;
