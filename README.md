## Description

Live Coding Task: Blog

## Overview
In this live coding session, you will enhance a blogging platform by adding and improving features related to blog posts and authors. The existing system is built with Nest.js and Node.js, utilizing Sqlite for data storage. Your task is to implement new functionalities and queries to manage blog posts and author data.

You can use any IDE or code editor as well as any other tools you are comfortable with. You are free to install any npm packages you want. Additionally, you are allowed to use google or/and chatgpt during the session for how-to questions. However, please do not use it for direct code solutions.

Also, we would ask you for the following:
- share your screen and code in your own environment
- disable any AI code completion or code generation tools


## Tech Setup
The application currently has basic user management functionality.
Sqlite database is set up with tables for users.
Nest.js framework is being used with Node.js.

## Task Requirements
#### Add Blog Post Functionality:
- Implement an endpoint (or GraphQL mutation, if GraphQL is used) to add a new blog post.
- Each blog post should have a title, content, author, and timestamp.
- Ensure proper validation of the input data.
#### Retrieve All Blog Posts:
- Create an endpoint (or GraphQL query) to retrieve all blog posts.
- Include pagination to handle large numbers of blog posts efficiently.
- Optionally, allow filtering by author, date, or title. 
#### List Authors with Their Blog Post Counts:
- Develop a query to list all authors along with the number of blog posts they have written.
- This should return the author's name and their post count.
- Ensure the query is optimized for performance.
#### Testing:
- Write unit/e2e tests for all new endpoints and functionalities.
#### Error Handling and Validation:
- Implement robust error handling for the new endpoints.
- Validate inputs for adding blog posts to prevent invalid data entries.
