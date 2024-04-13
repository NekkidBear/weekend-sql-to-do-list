# ToDoListTasks

## Set up the project
- [x] Initialize a new project with npm.
- [x] Install necessary dependencies (axios, pg, nodemon, etc.).
- [x] Set up the server file with Node.js.

## Create the database
- [x] Create a new database named `weekend-to-do-app`.
- [x] Run the queries in `database.sql` to create a `todos` table and populate it with initial data.

## Create the front-end
- [x] Set up the HTML structure for the to-do list app.
- [x] Create an input field for the user to enter a new to-do item.
- [x] Create a submit button for the user to add the new to-do item.
- [x] Create a container to display the to-do items.

## Implement the CRUD operations
- [x] Create a route to get all to-do items from the database.
- [x] Create a route to add a new to-do item to the database.
- [x] Create a route to update a to-do item's `isComplete` status in the database.
- [x] Create a route to delete a to-do item from the database.

## Connect the front-end to the server
- [x] Use axios to get all to-do items from the server and display them on the page.
- [x] Use axios to send a new to-do item to the server when the user submits the form.
- [x] Use axios to send a request to the server to update a to-do item's `isComplete` status when the user clicks the 'Complete' button.
- [x] Use axios to send a request to the server to delete a to-do item when the user clicks the 'Delete' button.

## Update the DOM
- [ ] When a new to-do item is added, update the DOM to display the new item.
- [ ] When a to-do item's `isComplete` status is updated, change the CSS class of the item to `completed`.
- [ ] When a to-do item is deleted, remove the item from the DOM.

## Style the app
- [ ] Apply CSS styles to improve the aesthetics of the page.
- [ ] Change the background color of the page.
- [ ] Change the font family and size.
- [ ] Change the text color and/or background color of tasks to show whether or not they have been completed.

## Testing
- [ ] Ensure that the input for "to-do text" has `data-testid="toDoTextInput"`.
- [ ] Ensure that the submit button has `data-testid="submitButton"`.
- [ ] Ensure that each to-do item has `data-testid="toDoItem"`.
- [ ] Ensure that each delete button has `data-testid="deleteButton"`.
- [ ] Ensure that each complete button has `data-testid="completeButton"`.
- [ ] Ensure that each completed to-do item has a CSS class of `completed`.

Remember to commit your changes regularly as you complete these tasks.