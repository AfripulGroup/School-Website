# Rockville Montessori School  Documentation

## Project Overview
The Rockville Montessori School Website is a modern, interactive, and responsive web platform designed to showcase the school’s programs, mission, and facilities. It provides essential information for prospective parents, current parents, and other stakeholders, featuring dynamic pages, secure access, and visually engaging content.

This project emphasizes accessibility, responsive design, and user experience, ensuring it caters to the diverse needs of its users.

## Project Features

### Core Website Structure
#### 1. Home Page
- Hero Section: A welcoming message with a carousel showcasing school images.
- Quick Links: Easy access to key pages like Admissions, About Us, Programs, and Contact Us.
- Testimonials: A section highlighting feedback from parents and alumni.
- Call to Action (CTA): Prompts to schedule a visit or contact the school.
- FAQs: A section addressing common queries.

#### 2. About Us
- Mission, Vision, and Philosophy: Overview of the school’s core values.
- School History: A timeline or summary of the school’s journey.
- Leadership and Staff: Profiles of the school’s team with photos and brief bios.
- Accreditations: Affiliations and recognition details.

#### 3. Programs
- Program Details: Comprehensive information on infant, toddler, primary, and after-school programs.
- Curriculum Highlights: Key aspects of the Montessori curriculum.
- Eligibility: Age requirements and other criteria for enrollment.

#### 4. Admissions
- Process and Timeline: Step-by-step guide for prospective parents.
- Documents: Downloadable forms required for admission.
- Tuition and Fees: Transparent information on costs.

#### 5. News and Events
- Calendar: Upcoming events displayed in an interactive format.
- Recent News: Updates on school activities.
- Blog Section: Articles on parenting tips and Montessori education.

#### 6. Gallery
- Photo and Video Galleries: Visual content showcasing school facilities, events, and student activities.
- Categories: Organized for easy navigation.

#### 7. Contact Us
- Contact Form: Fields for Name, Email, and Message.
- School Address: Includes an embedded Google Map.
- Other Details: Phone number, email, and office hours.

#### 8. Parent Portal
- Secure Login: Access to attendance, grades, and updates.
- Resources: Downloadable materials for parents.

#### 9. Careers
- Job Listings: Openings with detailed descriptions.
- Application Portal: Direct application submission.

### Additional Features
1. Responsive Design: Compatibility across devices (desktop, tablet, and mobile).
2. Accessibility: WCAG compliance for inclusivity.
3. Interactive Elements: FAQ accordion, hover effects, and smooth scrolling.
4. SEO Optimization: Includes meta tags, alt attributes, and fast-loading components.
5. Newsletter Subscription: Signup form for updates.
6. Search Functionality: Users can search for information across the site dynamically.

## Project Setup

### Prerequisites
Ensure the following are installed:
- [Node.js](https://nodejs.org/) (v16 or higher)
- [Git](https://git-scm.com/)

### Cloning the Repository
bash
git clone <repository_url>
cd school-website


### Installing Dependencies
Using npm:
bash
npm install

### Running the Development Server
Start the development server with Vite:
bash
npm run dev

Navigate to the URL provided in the terminal (e.g., `http://localhost:5173`).

## Deployment

### Deploying on Netlify
1. Create a GitHub Repository:
   bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <repository_url>
   git push -u origin main

2. Log in to Netlify:  
   Go to [Netlify](https://www.netlify.com/) and log in.

3. Create a New Site:  
   - Click "Add new site" and connect your GitHub repository.
   - Build Command: `npm run build`
   - Publish Directory: `dist`

4. Deploy:  
   - Save the settings and deploy.
   - Your live URL will be provided by Netlify.

