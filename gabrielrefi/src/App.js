import React from "react";
import Messaggio from "./Messaggio";
import "./App.css"; // Import del file CSS

// Componente principale App
function App() {
  return (
    <div>
      <h1>Benvenuto nella mia App React aggiornata!</h1>
      <Messaggio />
      <MyApp />
    </div>
  );
}

export default App;

// Componente MyButton
function MyButton() {
  return <button>I'm a button</button>;
}

// Componente ItemList
function ItemList({ items }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

// Componente MyApp
export function MyApp() {
  const items = ["Elemento 1", "Elemento 2", "Elemento 3"];
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
      <ItemList items={items} />
      <div className="awesome" style={{ border: "1px solid red" }}>
        <label htmlFor="name">Enter your name:</label>
        <input type="text" id="name" />
      </div>
      <p>Enter your HTML here</p>
      <img className="avatar" alt="Avatar" />
    </div>
  );
}

