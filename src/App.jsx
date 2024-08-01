/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";

const dictionary = {
  teh: "the",
  wrok: "work",
  for: "for",
  exampl: "example",
};

function App() {
  const [suggestion, setSuggestion] = useState("");

  const handleInputChange = (e) => {
    const inputWords = e.target.value;
    const wordsArray = inputWords.split(" ");

    // console.log("Words Array: " + wordsArray);

    const correctedWords = wordsArray.map((item) => {
      const correctedWord = dictionary[item] || item;
      return correctedWord;
    });

    // console.log("CorrectedWords: " + correctedWords);

    const correctedInput = correctedWords.join(" ");

    const firstCorrection = correctedWords.find(
      (item, idx) => item !== wordsArray[idx]
    );

    console.log("First correction: " + firstCorrection);

    setSuggestion(firstCorrection || "");
  };

  // console.log(suggestion);

  return (
    <>
      <h1>Spell Check and Auto-Correction</h1>

      <textarea
        name="userInput"
        id=""
        placeholder="Enter text..."
        rows={6}
        style={{
          width: "20rem",
          fontSize: "1.2rem",
          borderRadius: "8px",
          padding: "0.75rem",
        }}
        onChange={(e) => handleInputChange(e)}
      ></textarea>

      {suggestion && (
        <div style={{ marginTop: "1rem" }}>
          Did you mean:{" "}
          <span style={{ fontSize: "1.3rem", fontWeight: "bold" }}>
            {suggestion}?
          </span>
        </div>
      )}
    </>
  );
}

export default App;
