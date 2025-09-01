Input

Users provide recipe details through the web interface. This includes the recipe name, list of ingredients, cooking instructions, and optional details like preparation time or servings. Users may also click on existing recipes from the recipe list to view details, or choose actions like update or delete.

Process

The React front end handles routing between pages using React Router, such as navigating between recipe list, details, and add/update forms. User input is sent to the Node.js/Express backend, which processes requests and communicates with MongoDB Atlas. The database stores recipe data and handles CRUD (Create, Read, Update, Delete) operations. The backend returns the requested data to the frontend, which then updates the UI dynamically.

Output

The application displays a list of recipes, detailed recipe information when selected, and confirmation of actions like adding, updating, or deleting. The user sees a visually styled interface showing recipes with easy navigation. Screenshots of the running app (e.g., recipe list page, add recipe page, and details page) demonstrate that the Recipe Finder works as expected.