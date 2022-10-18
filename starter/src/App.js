import "./App.css";

import SearchComponent from "./SearchComponent";
import ListBooks from "./ListBooks";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [Books,setBooks] = useState([]);
  const [flipper,setFlip] = useState(0);
  return (
  <Routes>
    <Route exact path="/" element={<ListBooks Books={Books} setBooks={setBooks} flipper={flipper} setFlip={setFlip} />} />
    <Route exact path="/search" element={<SearchComponent Books={Books} setBooks={setBooks}/>} />
  </Routes>
  );
 
}

export default App;
