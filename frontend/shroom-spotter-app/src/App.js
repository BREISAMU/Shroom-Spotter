import { useEffect, useState } from 'react'
import './App.css'
import InputForm from './pages/InputForm'
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InputForm />} />
          <Route path="/chu" element={<h1>CHU</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App