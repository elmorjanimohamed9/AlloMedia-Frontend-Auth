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

## Visuals

Here are images showing the application in both light and dark modes on web and mobile:

### Web

- **Light Mode:**

  ![Web Light Mode](document/img/web-light.png)

- **Dark Mode:**

  ![Web Dark Mode](document/img/web-dark.png)

### Mobile

<div style="display: flex; justify-content: space-around;">
  <div>
    <h4>Light Mode</h4>
    <img src="document/img/mobile-light.png" alt="Mobile Light Mode" width="200">
  </div>
  <div>
    <h4>Dark Mode</h4>
    <img src="document/img/mobile-dark.png" alt="Mobile Dark Mode" width="200">
  </div>
</div>
## Prerequisites

- Node.js (version 20 or higher)
- Docker and Docker Compose

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/elmorjanimohamed9/AlloMedia-Frontend-Auth
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
   Open your browser and go to `http://localhost:5173`.

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
   Open your browser and go to `http://localhost:5173`.

## Libraries and Frameworks

- **React**: For developing the user interface.
- **React Router**: For route management.
- **Axios**: For HTTP requests.
- **Formik/React Hook Form**: For form management.
- **Context API/Redux**: For global state management.

## Icons and Images

- **Icons**: Using `react-icons` for interface icons. This library provides a wide range of icons that can be easily integrated into your React components.
- **Images**: Logos are stored in `src/assets/img`.

## Project Management

This project uses [Jira](https://elmorjanimohamed.atlassian.net/jira/software/projects/AFA/boards/4) for task management and development tracking.

## Contribution

Contributions are welcome. Please submit a pull request for any improvements or corrections.

## Authors

- **Elmorjani Mohamed** - [My GitHub Profile](https://github.com/elmorjanimohamed9)

---

For more details, check our [complete documentation](https://elmorjanimohamed.atlassian.net/jira/software/projects/AFA/boards/4).

---

[![Jira Logo](https://upload.wikimedia.org/wikipedia/commons/8/82/Jira_%28Software%29_logo.svg)](https://elmorjanimohamed.atlassian.net/jira/software/projects/AFA/boards/4)
