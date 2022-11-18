import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Feliz cumpleaños dantee!!!!</h1>
      <iframe
        src="https://giphy.com/embed/IFjSbBHETzzr6GJdwW"
        width="480"
        height="480"
        frameBorder="0"
        class="giphy-embed"
        allowFullScreen
      ></iframe>
      <a
        href="https://www.youtube.com/watch?v=zt1JLUcU6Vs&ab_channel=loxo"
        target="_BLANK"
      >
        Tu regalo
      </a>
    </div>
  );
}

export default App;
