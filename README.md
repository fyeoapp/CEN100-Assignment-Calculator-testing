# CEN100 Assignment Calculator

Welcome to the CEN100 Assignment Calculator project. This tool is designed to help first year engineering students generate a step by step timeline for their assignments and projects.

## How It Works

The application is built to be as simple as possible. It runs entirely in the browser using standard web technologies. There is no complex backend, no build tools, and no server required.

The codebase consists of three main parts:
* **index.html**: The main structure of the web page.
* **style.css**: The styling and layout rules.
* **script.js**: The logic that drives the application, such as building the timeline and handling user interactions.

## How to Update the Course Content

You do not need to be a developer to update the assignments for a new semester. We have decoupled all the course data from the complex logic.

All the assignments, descriptions, due dates, and timeline steps are stored in a single file called **data.js**.

If the course syllabus changes next year, simply open `data.js` in any text editor and update the text. For example:
1. Locate the assignment you want to change inside `data.js`.
2. Update the `title`, `dueDate`, or the `steps` array to match the new syllabus.
3. Save the file.
4. Refresh your browser. The website will automatically update the dropdown menus and timelines to reflect your changes.

To add a completely new assignment, just copy and paste an existing assignment block inside `data.js`, give it a new ID, and update its details. 

## Development Notes

* The project follows the DRY (Don't Repeat Yourself) principle. The `script.js` file uses loops to dynamically read the data from `data.js` rather than hardcoding long HTML strings.
* Because everything is static, you can easily host this on GitHub Pages or any static file server.
