Movie List Application
======================

This is a React TypeScript application that lists popular movies using The Movie Database (TMDB) API. The application features search functionality, pagination, and movie detail navigation. It uses Redux for state management and React Bootstrap for styling.

Features
--------

*   **Movies List**: Displays a list of  movies.
    
*   **Search**: Allows users to search for movies by title.
    
*   **Pagination**: Paginates the movie list, displaying 10 movies per page.
    
*   **Movie Details**: Click on a movie to navigate to its details page.
    

Prerequisites
-------------

Before running this application, make sure you have the following installed:

*   **Node.js** (v14.x or higher)
    
*   **npm** (v6.x or higher) or **yarn** (v1.x or higher)
    

Getting Started
---------------

Follow these instructions to set up and run the project locally.

### 1\. Clone the Repository

`git clone https://github.com/sameerapeiris/react-move-directory.git  cd react-move-directory   `

### 2\. Install Dependencies

Install the project dependencies using npm or yarn:

` npm install  # or  yarn install   `

### 3\. Set Up TMDB API Key

You need a TMDB API key to fetch movies from The Movie Database.(Project included my API key for demo purposes)

Go to TMDB API and sign up to get your API key. 

### 4\. Run the Application

Start the development server:

` npm start  # or  yarn start   `

The application will be available at http://localhost:3000.

### 5\. Build the Application for Production

To create a production build of the application, run:

`npm run build  # or  yarn build   `

The optimized production build will be available in the build directory.

### Key Files and Directories

*   **app/store.ts**: Configures the Redux store.
    
*   **components/features/movies/**: Contains the main components and Redux slice for managing movies.
    
*   **MovieList.tsx**: Displays the list of movies with pagination.
    
*   **MovieSearch.tsx**: Provides the search functionality.
    
*   **MovieDetail.tsx**: Shows detailed information about a selected movie.
    
*   **movieSlice.ts**: Contains the Redux logic for fetching and storing movies.
    

Usage
-----

*   **Search Movies**: Use the search bar to find movies by title.
    
*   **Pagination**: Navigate through pages using the pagination controls.
    
*   **Movie Details**: Click on any movie to view more details.
    

Technologies Used
-----------------

*   **React**: JavaScript library for building user interfaces.
    
*   **TypeScript**: Superset of JavaScript that adds static types.
    
*   **Redux**: State management library.
    
*   **React Redux**: Official React bindings for Redux.
    
*   **React Bootstrap**: Bootstrap components built with React.
    
*   **Axios**: Promise-based HTTP client for making API requests.
    
*   **React Router**: Library for routing in React applications.
    


