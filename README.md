# BlogPost

A small blog‑posting website built with **Node.js** and **Express** (using ESM modules).  
This project is meant as a learning exercise to practice backend development, routing, views, and simple CRUD operations without using a database.

---

## Table of Contents

1. [Features](#features)  
2. [Tech Stack](#tech-stack)  
3. [Project Structure](#project-structure)  
4. [Getting Started](#getting-started)  
   - [Prerequisites](#prerequisites)  
   - [Installation](#installation)  
   - [Running the App](#running-the-app)  
5. [Usage](#usage)  
6. [Limitations](#limitations)  
7. [Future Improvements](#future-improvements)  
8. [License & Credits](#license--credits)

---

## Features

- Create, read, update, and delete (CRUD) blog posts  
- Uses server‑side rendering with EJS templates  
- No database—data persisted in local file(s) (e.g. JSON)  
- Simple routing and controllers  
- Practice with Express middleware, request parsing, and static assets  

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Runtime / Server | Node.js |
| Web Framework | Express (ESM modules) |
| View Engine | EJS |
| Data Storage | Local JSON or in‑memory (no external database) |
| Frontend | Basic HTML, CSS (served via Express `static`) |

---

## Project Structure

Here’s an example of what your folder layout might look like:

BlogPost/  
├── blogs/  
│ └── … (JSON or blog data files)  
├── public/  
│ ├── css/  
│ ├── js/  
│ └── images/  
├── views/  
│ ├── layouts/  
│ ├── partials/  
│ └── templates (e.g. index.ejs, post.ejs, edit.ejs)  
├── .gitignore  
├── details.json  
├── index.js  
├── package.json  
└── package-lock.json  


- `index.js` — Entry point, Express app setup, routing.  
- `details.json` — (If used) stores blog post metadata or content.  
- `blogs/` — Directory for blog content data (if separated).  
- `views/` — EJS templates.  
- `public/` — Static assets (CSS, JS, images).  

---

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- **Node.js** (v14+ recommended)  
- **npm** (comes with Node.js)  

Because this project uses ESM (module syntax `import/export`), older Node versions that don’t fully support ESM may cause issues.

### Installation

1. Clone the repo  
   ```bash
   git clone https://github.com/singhanshuman01/BlogPost.git
   cd BlogPost
2. Install dependencies
   ```bash
   npm install
3. Start the server:
   ```bash
   npm start
Or, if you have configured a custom script (e.g. with nodemon):
   ```bash
   npm run dev
```
Then open your browser and go to http://localhost:3000 (or whichever port is configured) to see the blog app.
