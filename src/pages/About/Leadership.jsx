import { FaUserTie } from "react-icons/fa";
import { motion } from "framer-motion";
import owner1 from '../../assets/owner1.jpg';
import owner2 from '../../assets/owner2.jpg';
import owner3 from '../../assets/owner3.jpg';
const leadershipData = [
   {
      name: "Dr. William Carter",
      role: "Head of School",
      bio: "Dr. Carter has over 20 years of experience in education leadership, inspiring excellence in academic and extracurricular activities.",
      image: owner1,
   },
   {
      name: "Dr. Wisdom Godzo",
      role: "Assistant Head",
      bio: "Mr. Wisdom specializes in student engagement and curriculum development, ensuring a balanced and enriching school experience.",
      image: owner2,
   },
   {
      name: "Dr. Kelvin Kudzordzi",
      role: "Head Of Academics",
      bio: "Mr. Kelvin specializes in student engagement and curriculum development, ensuring a balanced and enriching school experience.",
      image: owner3,
   },
];

const Leadership = () => {
   return (
      <section className="leadership">
         <h2 className="section-title">Leadership and Staff</h2>
         <div className="leadership__list">
            { leadershipData.map((leader, index) => (
               <motion.div
                  className="leader-card"
                  key={ index }
                  initial={ { opacity: 0, y: 30 } }
                  animate={ { opacity: 1, y: 0 } }
                  transition={ { duration: 0.8, delay: index * 0.2 } }
               >
                  <img src={ leader.image } alt={ leader.name } className="leader-image" />
                  <div className="leader-info">
                     <h3>{ leader.name }</h3>
                     <FaUserTie className="leader-icon" />
                     <p className="leader-role">{ leader.role }</p>
                     <p>{ leader.bio }</p>
                  </div>
               </motion.div>
            )) }
         </div>
      </section>
   );
};

export default Leadership;