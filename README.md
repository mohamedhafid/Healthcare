# Online Video Calling Web Application

Welcome to the Online Video Calling Web Application! This project allows users to register, log in, and participate in video calls. It is built using React.js for the front-end, Express.js for the back-end, and MongoDB for data storage.

## Features

- User registration and authentication
- Video calling functionality
- Responsive and modular UI components
- Real-time communication

## Technologies Used

- **Frontend**: React.js
- **Backend**: Express.js
- **Database**: MongoDB
- **WebRTC** for video calling
- **Socket.io** for real-time communication

## Installation

### Prerequisites

- Node.js (v14 or later)
- MongoDB

### Setup

1. **Clone the repository:**

    ```bash
    git clone https://github.com/mohamedhafid/Healthcare.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd Healthcare
    ```

3. **Install frontend dependencies:**

    ```bash
    cd frontend
    npm install
    ```

4. **Install backend dependencies:**

    ```bash
    cd ../server
    npm install
    ```

5. **Configure environment variables:**

    Create a `.env` file in the `server` directory and add the following variables:

    ```env
    MONGODB_URI=mongodb://localhost:27017/your-database-name
    JWT_SECRET=your_jwt_secret_key
    ```

6. **Run the application:**

    - **Start the backend server:**

        ```bash
        cd backend
        npm run dev
        ```

    - **Start the frontend development server:**

        ```bash
        cd ../frontend
        npm run dev
        ```

    The frontend will be available at `http://localhost:3000` and the backend at `http://localhost:5000`.

## Usage

1. **Register**: Navigate to the registration page, fill out the form, and submit to create a new user account.

2. **Log In**: Use the login page to access your account and enter the video calling interface.

3. **Join a Call**: Once logged in, you can join or start video calls with other users.

## Directory Structure

- **`/client`**: Contains the React.js frontend application
  - **`/src/components`**: UI components
  - **`/src/pages`**: Pages like Login and Register
- **`/server`**: Contains the Express.js backend application
  - **`/routes`**: API endpoints
  - **`/models`**: MongoDB data models
  - **`/controllers`**: Business logic



## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or feedback, please reach out to [mohamedhafid097@gmail.com]

---

Thank you for checking out the Online Video Calling Web Application!
