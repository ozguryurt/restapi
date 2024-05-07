# Simple ExpressJS API
This is a simple REST API built using [DummyJSON](https://dummyjson.com) to generate mock data. Below are the instructions on how to run it locally.

## Prerequisites
Before you begin, ensure you have met the following requirements:

-Node.js installed on your local machine. You can download and install it from here.
-Git installed on your local machine. You can download and install it from here.
##Installation
-Clone the repository to your local machine using the following command:
```
git clone https://github.com/ozguryurt/restapi.git
```
-Navigate to the project directory:
```
cd your-repository
```
-Install the dependencies:
```
npm install
```
## Usage
To run the API locally, use the following command:
```
node index.js
```
The API will start running on `http://localhost:3000.`

## Endpoints
Here are the endpoints available in this API:

- GET /products: Retrieves a list of products.
- GET /products/:param: Retrieves a specific product by ID or name.
- POST /products: Adds a new product.
- PUT /products/:id: Updates a specific product by ID.
- DELETE /products/:id: Deletes a specific product by ID.
