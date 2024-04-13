# Weekend To-Do List App

## Description

This is a simple to-do list application built with Node.js, Express, and PostgreSQL. The application allows users to add tasks to a list, mark tasks as complete, and delete tasks from the list. The application demonstrates the ability to create server routes to handle HTTP requests, interact with a PostgreSQL database to create, read, update, and delete records, and dynamically update the DOM on the client side based on user interaction and server responses.

## Installation

1. Clone the repository to your local machine.
2. Run `npm install` to install the necessary dependencies.
3. Create a new PostgreSQL database named `weekend-to-do-app` and run the queries in the `database.sql` file to create and populate the `todos` table.
4. Run `npm start` to start the server.
5. Open your browser and navigate to `http://localhost:5001` to view the application.

## Usage

1. Enter a task in the input field and click the 'Add' button to add a new task to the list.
2. Click the 'Complete' button next to a task to mark it as complete.
3. Click the 'Delete' button next to a task to remove it from the list.

## Testing

Run `npm test` to run the test suite.

## Built With

- Node.js
- Express
- PostgreSQL
- HTML
- CSS
- JavaScript

## License

[MIT](LICENSE)