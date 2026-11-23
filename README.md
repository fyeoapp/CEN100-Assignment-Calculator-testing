# CEN100 Assignment Calculator

Welcome to the CEN100 Assignment Calculator project. This tool is designed to help first year engineering students generate a step by step timeline for their assignments and projects.

## How It Works

The application is built to be as simple as possible. It runs entirely in the browser using standard web technologies. There is no complex backend, no build tools, and no server required.

The codebase consists of four main parts:
* **index.html**: The main structure of the web page.
* **style.css**: The styling and layout rules.
* **script.js**: The logic that drives the application, such as building the timeline and handling user interactions.
* **data.js**: All the course content (assignments, descriptions, due dates, and timeline steps).

## How to Update the Course Content

You do not need to be a developer to update the assignments for a new semester. We have decoupled all the course data from the complex logic.

All the assignments, descriptions, due dates, and timeline steps are stored in a single file called **data.js**.

If the course syllabus changes next year, simply open `data.js` in any text editor and update the text. For example:
1. Locate the assignment you want to change inside `data.js`.
2. Update the `title` (dropdown name), `header` (heading shown with the grade weight), `description`, `dueDate`, or the `steps` array to match the new syllabus.
3. Save the file.
4. Refresh your browser. The website will automatically update the dropdown menus and timelines to reflect your changes.

To add a completely new assignment, just copy and paste an existing assignment block inside `data.js`, give it a new ID, and update its details. 

## Where the Fall 2026 content comes from

* **Dates and weights:** the Fall 2026 CEN100 course outline, plus the course-team updates posted after it. For example, the Oct 13 update moved Failure Analysis Part 2 (FMEA) to Oct 28, and the Sept 25 update confirmed that reflections are emailed to your Project Manager.
* **How to do each assignment** (steps, formats, common mistakes): the assignment handouts and rubrics, as summarized in the student-made CEN100 Guide.
* Each Innovation Challenge milestone (M2 to M8) has its own entry, so students can plan a timeline for each one. The "Innovation Challenge Project" entry gives the overview.
* **Still to confirm with the Lead GA (Aditya):** how each assignment is done, especially where the professional email and the reflections are submitted, and whether the fishbone diagram is required. The final exam period is Dec 9 to 20 (TMU's exams page), which replaces the outline's Dec 8 to 19 line.

## Development Notes

* The project follows the DRY (Don't Repeat Yourself) principle. The `script.js` file uses loops to dynamically read the data from `data.js` rather than hardcoding long HTML strings.
* Because everything is static, you can easily host this on GitHub Pages or any static file server.
