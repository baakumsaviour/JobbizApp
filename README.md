# rn-assignment4-11357296

## DCTT202 MOBILE APPLICATION DEVELOPMENT Assignment 4

### Overview
This project involves creating a mobile application that closely follows a provided UI mockup. The application includes a login screen, a home screen that displays user information, and two sections showcasing job listings (featured and popular jobs) using custom components.

### Features Implemented

1. **UI Design Recreation**
   - The design has been recreated as per the provided [UI mockup](https://www.figma.com/design/CGpaaLigc1W8ij1mLJMvev/Assignment-4?node-id=0-1&t=R4C2YdXsamoSMvkl-0).
   - Styling matches the design closely using custom components.

2. **Login Screen Functionality**
   - The login screen captures user name and email.
   - On pressing login, the app navigates to the home screen, displaying the captured name and email.

3. **Home Screen**
   - Displays the user's name and email passed from the login screen.
   - Two sections: "Featured Jobs" and "Popular Jobs".
   - Each section displays at least 8 different job cards.

4. **JobCard Component**
   - A reusable component for displaying job details.
   - Accepts props for job details and background color.
   - Dynamically displays the correct company logo based on the job data.

5. **Custom Backgrounds**
   - Featured job cards have different background colors.
   - Popular job cards have a transparent background.

### Component Details

#### JobCard Component
- **File**: `src/components/JobCard.js`
- **Description**: Displays a job card with details such as logo, job title, company, salary, and location.
- **Props**:
  - `job`: An object containing job details:
    ```jsx
    {
      title: 'Software Engineer',
      company: 'Facebook',
      salary: '$180,000',
      location: 'Accra, Ghana'
    }
   
  - `backgroundColor`: A string representing the background color of the card.
- **Usage**:
  
  <JobCard job={{ title: 'Software Engineer', company: 'Facebook', salary: '$180,000', location: 'Accra, Ghana' }} backgroundColor="#f8d7da" />
