Movie List Application
======================

This is a React TypeScript application that lists popular movies using The Movie Database (TMDB) API. The application features search functionality, pagination, and movie detail navigation. It uses Redux for state management and React Bootstrap for styling.

Features
--------

*   **Popular Movies List**: Displays a list of popular movies.
    
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

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   bashCopy codegit clone https://github.com/your-username/movie-list-app.git  cd movie-list-app   `

### 2\. Install Dependencies

Install the project dependencies using npm or yarn:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   bashCopy codenpm install  # or  yarn install   `

### 3\. Set Up TMDB API Key

You need a TMDB API key to fetch movies from The Movie Database.

1.  Go to TMDB API and sign up to get your API key.
    
2.  Create a .env file in the root directory of your project.
    
3.  bashCopy codeREACT\_APP\_TMDB\_API\_KEY=your\_api\_key\_here
    

### 4\. Run the Application

Start the development server:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   bashCopy codenpm start  # or  yarn start   `

The application will be available at http://localhost:3000.

### 5\. Build the Application for Production

To create a production build of the application, run:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   bashCopy codenpm run build  # or  yarn build   `

The optimized production build will be available in the build directory.

Project Structure
-----------------

Here's a brief overview of the project's folder structure:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   bashCopy codesrc/  │  ├── app/  │   └── store.ts          # Redux store configuration  ├── features/  │   └── movies/  │       ├── MovieList.tsx  # Component for listing movies  │       ├── MovieSearch.tsx  # Component for searching movies  │       ├── MovieDetail.tsx  # Component for movie details  │       └── movieSlice.ts  # Redux slice for managing movie state  ├── App.tsx               # Main app component  └── index.tsx             # Entry point of the application   `

### Key Files and Directories

*   **app/store.ts**: Configures the Redux store.
    
*   **features/movies/**: Contains the main components and Redux slice for managing movies.
    
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
    

License
-------

This project is licensed under the MIT License. See the LICENSE file for details.

With this README.md, users will have a clear guide on how to set up, run, and understand the structure and functionality of your movie list application.