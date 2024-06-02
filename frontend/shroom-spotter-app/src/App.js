import { useEffect, useState } from 'react'
import './App.css'
import InputForm from './pages/InputForm'
import ResultsPage from './pages/ResultsPage'
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InputForm />} />
          <Route path="/score" element={<ResultsPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App