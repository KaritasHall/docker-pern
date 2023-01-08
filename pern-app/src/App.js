import "./App.css";

import { useEffect, useState } from "react";
function App() {
  //We start with greeting as undefined because until it gets value from the server
  const [greeting, setGreeting] = useState();

  useEffect(() => {
    const getGreeting = async () => {
      // Fetch data from the server
      const response = await fetch("http://localhost:5002");
      const data = await response.json();
      // Making a variable that holds a random index
      const randomIndex = Math.floor(Math.random() * data.length);

      // Set the greeting state to the greeting at the random index
      setGreeting(data[randomIndex]);
    };
    // Fetch the greeting when the component mounts
    getGreeting();
  }, []);
  // Render the greeting if it is available, or an empty string if it is not
  return <div>{greeting ? greeting.greeting : ""}</div>;
}

export default App;
