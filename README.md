# JobNest



### Features of the project:

1. **User Authentication:**

User registration and login with email and password.
Google Sign-in option for user authentication.
User profile with name, email, password, and profile photo.

2. **Navigation:**

A navigation bar with links to Home, All Jobs, Applied Jobs, Add A Job, My Jobs, Blogs, and User Profile.
Dynamic navigation options based on user login status (profile picture or login button).

3. **Home Page:**

A visually appealing landing page with a slider or banner section.
Tabbed job categories (On Site Job, Remote Job, Hybrid, Part Time) with an "All Jobs" tab.
Display job listings under each category with details like job title, posting date, application deadline, salary range, and more.
Apply for a job (if logged in) with validation for application deadline.
4. **Blogs Page:**

Create a blog section with informative content on access tokens, refresh tokens, Express.js, and Nest.js.
Add the ability for users to read and engage with blog content.

5. **All Jobs Page:**

Display all job listings in a tabular format.
Implement a search system based on the job title.
Allow users to view job details and apply (if logged in).
6. **Single Job Details:**

Private route accessible only when logged in.
Display detailed information about a job, including company logo, job banner, job title, description, salary range, applicants, and an apply button.
Allow users to apply for a job, auto-filling user information.
7. **Add A Job Page:**

Private route for logged-in users.
Create a form for adding a new job listing with fields for job banner URL, job title, user name, job category, salary range, job description, posting date, and application deadline.
Update the job applicants number after each application using MongoDB.

8. **My Jobs Page:**

Private route for logged-in users.
Display all job listings added by the user in a tabular format.
Allow users to update and delete jobs they posted.
Implement a confirmation for job deletion.

9. **Applied Jobs Page:**

Private route for logged-in users.
Show jobs the user has applied for with a filter system based on job category.
Users can only see jobs they have applied for.

10. **CRUD Operations:**

Implement Create, Read, Update, and Delete (CRUD) functionality with relevant notifications and error messages.

11. **Authorization:**

Implement authorization checks to restrict access to private routes and actions.
Notify users to log in for specific actions (e.g., viewing job details).





