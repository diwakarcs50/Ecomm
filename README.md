# eCommerce App Backend

This repository contains the backend codebase for our eCommerce application. The backend is built using Node.js, Express.js, and MongoDB, providing the necessary APIs and services to support the eCommerce website or application.

## Prerequisites

- **Node.js**: Make sure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).

- **MongoDB**: Ensure you have a MongoDB database set up where the application data will be stored. You can install MongoDB locally or use a cloud-based MongoDB service like MongoDB Atlas.

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/eCommerce-backend.git

   Navigate to the Project Directory:

bash
Copy code
cd eCommerce-backend
Install Dependencies:

bash
Copy code
npm install
Set Up Environment Variables:

Create a .env file in the root directory. Define the following environment variables:

env
Copy code
PORT=3000
MONGODB_URI=your-mongodb-connection-string
SECRET_KEY=your-secret-key-for-jwt-token
Start the Server:

bash
Copy code
npm start
The server will start at http://localhost:3000.

API Endpoints
GET /api/products: Get a list of all products.
GET /api/products/:id: Get details of a specific product by ID.
POST /api/products: Add a new product.
PUT /api/products/:id: Update details of a specific product by ID.
DELETE /api/products/:id: Delete a product by ID.
