import React, { useState } from "react";
import "./App.css";

function App() {
  const texts = ["테스트1", "테스트2", "테스트3"];

  function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const [input, setInput] = useState("");
  const [array, setArray] = useState([...Array(5000)]);

  const handleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setInput(event.target.value);
    setArray(
      array.map((_, index) => ({
        text: texts[getRandomInt(0, 3)] + getRandomInt(0, 100),
        key: getRandomInt(0, 100),
      }))
    );
  };

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexWrap: "wrap",
        color: "#ccc",
      }}
    >
      <input
        placeholder="아무 값이나 입력해보세요!"
        value={input}
        onChange={handleChange}
      />
      {array.map(
        (item, index) =>
          item && (
            <div key={index} data-key={item.key}>
              <div>{item.text}</div>
            </div>
          )
      )}
    </div>
  );
}

export default App;
