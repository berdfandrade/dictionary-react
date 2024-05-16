# Dictionary App

## Overview
The Dictionary App is a frontend application designed to provide word definitions in a user-friendly interface. It consumes a dictionary API to fetch word definitions based on user input and presents them in a structured format.

## Features
- **Search Bar:** Allows users to input a word and initiate a search for its definition.
- **Word Section Component:** Renders the definitions of the searched word in a structured layout.
  - Displays the word, its phonetic pronunciation, and a play button for audio pronunciation (if available).
  - Lists the meanings of the word, including its part of speech and definitions.
  - Provides examples for each definition when available.
  - Handles cases where no definitions are found for the searched word.

## Technologies Used
- React.js: Frontend library for building user interfaces.
- Chakra UI: Component library for quickly building accessible and responsive web applications.
- Axios: HTTP client for making requests to the dictionary API.

## Usage
To use the Dictionary App:
1. Enter a word into the search bar and press Enter or click the search button.
2. View the definitions of the searched word presented in the Word Section component.

## Setup
To run the application locally:
1. Clone this repository.
2. Install dependencies using `npm install`.
3. Start the development server using `npm start`.

## Credits
This application was created as part of the Frontend Mentor challenge. Components and styling may have been inspired by the challenge requirements.

---

Feel free to expand or customize this README according to your application's specific details and requirements.