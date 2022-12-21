import React from "react";
import "./App.css";
import { add, TestComponent } from "@example-app/shared";

function App() {
  return (
    <div>
      <button onClick={() => console.log(add(21, 4))}>Run add function</button>
      <TestComponent />
    </div>
  );
}

export default App;
