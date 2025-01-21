import { FaCalendarAlt, FaClipboardCheck, FaUserGraduate } from "react-icons/fa";
import { FaFilePdf, FaPaperclip, FaPassport } from "react-icons/fa";

export const processSteps = [
   {
      icon: <FaCalendarAlt />,
      title: "Schedule a Tour",
      description: "Visit our campus to meet the staff and explore the environment.",
   },
   {
      icon: <FaClipboardCheck />,
      title: "Submit Application",
      description: "Complete and submit the application form along with the fee.",
   },
   {
      icon: <FaUserGraduate />,
      title: "Enroll Your Child",
      description: "Once accepted, complete enrollment by submitting required documents.",
   },
];

export const documents = [
   {
      icon: <FaPassport />,
      title: "Proof of Identity",
      description: "Submit a copy of your child’s birth certificate or passport.",
   },
   {
      icon: <FaFilePdf />,
      title: "Medical Records",
      description: "Provide immunization records and health forms.",
   },
   {
      icon: <FaPaperclip />,
      title: "Application Form",
      description: (
         <a href="/forms/application-form.pdf" download>
            Download Application Form (PDF)
         </a>
      ),
   },
];

export const tuitionDetails = [
   {
      program: "Infant Program",
      fee: "1,200 per year",
   },
   {
      program: "Toddler Program",
      fee: "1,000 per year",
   },
   {
      program: "Primary Program",
      fee: "900 per year",
   },
   {
      program: "After-School Program",
      fee: "500 per year",
   },
];