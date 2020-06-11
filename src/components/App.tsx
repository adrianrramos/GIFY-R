import React, { useState } from "react";
import { Header } from "./layout/Header";
import { GifList } from "./layout/GifList";
import gifyApi from "../gifyApi";

// TODO: Plug into API and render GIFs
// TODO: Structure spacing + sizing for HTML / Display elements
// TODO: Implement lazy loading
// TODO: Add final touches such as styling etc.
// TODO: Update GitHub Repo with fancy README.MD

const App = () => {
  // const [gifs, setGifs] = useState<any[]>([]);
  const [text, setText] = useState<string>("");

  const changeDivText = (term: string) => {
    setText(term);
  };

  return (
    <div className="app-container">
      <Header changeText={changeDivText} />
      <GifList text={text} />
    </div>
  );
};

export default App;
