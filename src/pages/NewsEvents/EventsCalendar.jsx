import { FaCalendarAlt } from "react-icons/fa";
import { events } from "./newsEventData";

const EventsCalendar = () => {
   return (
      <section className="events-calendar">
         <h2 className="section-title">
            <FaCalendarAlt className="icon" /> Upcoming Events
         </h2>
         <div className="events-grid">
            { events.map((item, index) => (
               <div key={ index } className="event-card">
                  <span className="event-date">{ item.date }</span>
                  <span className="event-name">{ item.event }</span>
               </div>
            )) }
         </div>
      </section>
   );
};

export default EventsCalendar;
