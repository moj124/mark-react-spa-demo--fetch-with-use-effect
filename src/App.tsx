import { useEffect, useState } from "react";

interface Joke {
  id: number;
  type: string;
  setup: string;
  punchline: string;
}

interface Quote {
  quote : string;
}

function App() {
  const [joke, setJoke] = useState<Quote>();

  useEffect(() => {
    const fetchJoke = async () => {
      const response = await fetch(
        "https://api.kanye.rest"
      );
      const jsonBody: Quote = await response.json();
      console.log(jsonBody)
      setJoke(jsonBody);
    };

    fetchJoke();
  }, []);

  // useEffect(() => {
  //   fetch("https://official-joke-api.appspot.com/jokes/general/random")
  //     .then(response => response.json())
  //     .then((jsonBody: Joke[]) => setJoke(jsonBody[0]));
  // }, [])

  return (
    <>
      <h1>Joke app</h1>
      {joke && (
        // This is a conditional rendering strategy
        //  using 'short-circuiting': if the left-hand
        //  side of an && is false, then JavaScript
        //  doesn't bother to evaluate the right-hand
        //  side (since the overall expression is false
        //  regardless)
        //
        // Exploiting that feature to conditional render JSX!
        <>
          <p>
            <b>{joke.quote}</b>
          </p>
        </>
      )}
    </>
  );
}

export default App;
