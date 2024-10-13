# React Project - AlloMedia Delivery Application

## Part 1: Authentication (FrontEnd)

## Description
This project is a delivery application developed with React, focused on user authentication. This first part concentrates on setting up the frontend for registration, login, and user session management.

## Authentication Features
- **Registration**: 
  - Users can create an account by providing their name, email address, and password.
  - Client-side validation ensures fields are correctly filled.
  - Email format and password security are verified.

- **Login**: 
  - Users can log in with their email address and password.
  - Handles authentication errors, such as incorrect credentials.

- **Password Reset**: 
  - Users can request a password reset link.
  - Interface to enter a new password after clicking the link received by email.

- **Logout**: 
  - Users can log out, which clears the stored JWT token.

## User Interface Overview
Here are some screenshots of the application to give you an overview of the user interface:

### Registration Page
![Registration Page](path/to/registration-screenshot.png)

### Login Page
![Login Page](path/to/login-screenshot.png)

### Password Reset Page
![Password Reset Page](path/to/reset-password-screenshot.png)

## Prerequisites
- Node.js (version 14 or higher)
- Docker and Docker Compose

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/your-project.git
   cd your-project
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   Create a `.env` file at the root of the project and add the necessary variables, such as the backend API URL and secret keys.

## Usage

1. **Start the application:**
   ```bash
   npm start
   ```

2. **Access the application:**
   Open your browser and go to `http://localhost:3000`.

## Dockerization

1. **Build the Docker image:**
   ```bash
   docker build -t react-app .
   ```

2. **Start the containers with Docker Compose:**
   ```bash
   docker-compose up
   ```

3. **Access the application:**
   Open your browser and go to `http://localhost:3000`.

## Application Pages

### 1. Home
- **Description**: The application's homepage showcasing the main services and features.
- **Code**: `src/pages/Home.jsx`

### 2. Registration
- **Description**: Allows users to create an account by providing personal information.
- **Code**: `src/pages/auth/Register.jsx`

### 3. Login
- **Description**: Page for users to log into their account.
- **Code**: `src/pages/auth/Login.jsx`

### 4. Role Selection
- **Description**: Allows users to select their role before registration.
- **Code**: `src/pages/auth/roleSelection.jsx`

### 5. Password Reset
- **Description**: Page to reset the password in case of forgetting.
- **Code**: `src/pages/auth/resetPassword.jsx`

### 6. Email Verification
- **Description**: Page to verify the email address after registration.
- **Code**: `src/pages/auth/VerifyEmail.jsx`

### 7. Forgot Password
- **Description**: Allows users to request a password reset link.
- **Code**: `src/pages/auth/ForgotPassword.jsx`

### 8. OTP Verification
- **Description**: Page to enter the OTP sent by email for verification.
- **Code**: `src/pages/auth/verify-otp.jsx`

### 9. Delivery Tracking
- **Description**: Allows users to track their order in real-time.
- **Code**: `src/components/DeliveryTracking.jsx`

### 10. Services
- **Description**: Presents the various services offered by the application.
- **Code**: `src/components/ServiceCards.jsx`

### 11. Footer
- **Description**: Footer component displaying copyright information and social media icons.
- **Code**: `src/components/layouts/Footer.jsx`

### 12. 404 Not Found
- **Description**: Page displayed when the user navigates to a non-existent route.
- **Code**: `src/pages/404.jsx`

## Libraries and Frameworks

- **React**: For developing the user interface.
- **React Router**: For route management.
- **Axios**: For HTTP requests.
- **Formik/React Hook Form**: For form management.
- **Context API/Redux**: For global state management.

## Icons and Images
- **Icons**: Using `react-icons` for interface icons.
- **Images**: Logos are stored in `src/assets/img`.

## Project Management
This project uses [Jira](https://elmorjanimohamed.atlassian.net/jira/software/projects/AFA/boards/4) for task management and development tracking.

## Contribution
Contributions are welcome. Please submit a pull request for any improvements or corrections.

## Authors
- **Elmorjani Mohamed** - [My GitHub Profile](https://github.com/elmorjanimohamed9)
