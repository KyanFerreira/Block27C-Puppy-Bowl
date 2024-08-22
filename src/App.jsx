// Import the React library, which allows us to define components
import {useEffect, useState} from "react";

// Import the Players component, which we'll use to show a list of players
import Players from "./features/players/Players"

// Define the App component
function App() {
  // This component renders the Players component inside a div
  // This div has a class of 'App', which we could use for styling
  return (
    <div>
      <h1>Puppy Bowl Players</h1>
      <Players/>
    </div>
  );
}

// Export the App component as the default export
export default App;
