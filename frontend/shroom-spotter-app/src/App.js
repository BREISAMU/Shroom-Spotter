import { useEffect, useState } from 'react'
import './App.css'
import InputForm from './pages/InputForm'
import ResultsPage from './pages/ResultsPage'
import Home from './pages/HomePage.js'
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className='bg-main'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/input" element={<InputForm />} />
          <Route path="/score" element={<ResultsPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App