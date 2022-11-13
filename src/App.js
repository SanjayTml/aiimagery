import logo from './logo.svg';
import './App.css';
import { useState } from "react";


const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.REACT_APP_API_KEY,
});
const openai = new OpenAIApi(configuration);

function App() {
  const [userPrompt, setUserPrompt] = useState("")
  const [imageUrl, setImageUrl] = useState("")

  return (
    <div className="App">
      {
        imageUrl
          ? <img src={imageUrl} className="image" alt="ai thing" />
          : <img src={logo} className="image" alt="logo" />
      }
      <p>Generate a unique image using DALL·E</p>
      <p>What do you want to see?</p>
      <input
        placeholder='A sunset on the Sydney Opera House'
        onChange={(e) => setUserPrompt(e.target.value)}
      />
      <button>Generate</button>
    </div>
  );
}

export default App;
