import React from "react";
import ReactDOM from "react-dom"; //import ReactDOM from "react-dom/client" - tenhle import je defaultně pro verzi reactu 18 a tam pak nefungují FCC testy!!!
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

/**
 * DEFAULTNÍ RENDER V REACTU 18 - nefungují FreeCodeCamp testy
 */
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
