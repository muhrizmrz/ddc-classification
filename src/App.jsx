import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

import './App.css'

import Data from "./Data.json";
import Header from './components/Header';
import Home from './pages/Home';
import SearchResult from './pages/SearchResult';

function App() {
  const [classfications, setClassifications] = useState(loadData());
  const [searchKeyword, setSearchKeyword] = useState()
  const [searchResult, setSearchResult] = useState([])


  const routes = [
    {
      path: '/', 
      element: <Home 
                  data={classfications} 
                  setFirstSummaryActive={setFirstSummaryActive}
                  setSecondSummaryActive={setSecondSummaryActive} 
                />
    },
    {
      path: '/results',
      element: <SearchResult data={classfications} searchResult={searchResult} keyword={searchKeyword} />
    }
  ]

  function loadData() {
    return Data.map(obj => {
      if (obj.classificationNumber === "000") {
        return {
          ...obj,
          isactiveFirstSummary: true,
          isactiveSecondSummary: true,
        };
      } else {
        return { ...obj };
      }
    });
  }

  function setFirstSummaryActive(classificationNumber) {
    return () => {
      setClassifications((prev) =>
        prev.map((obj) => {
          return obj.classificationNumber == classificationNumber
            ? {
              ...obj,
              isactiveFirstSummary: true,
              isactiveSecondSummary: true,
            }
            : {
              ...obj,
              isactiveFirstSummary: false,
              isactiveSecondSummary: false,
            };
        })
      );
    };
  }

  function setSecondSummaryActive(classificationNumber) {
    return () => {
      setClassifications((prev) => {
        return prev.map((obj) => {
          return obj.classificationNumber == classificationNumber
            ? { ...obj, isactiveSecondSummary: true }
            : { ...obj, isactiveSecondSummary: false };
        });
      });
    };
  }

  function handleSearch(classificationNumber) {
    const res = classfications.filter((obj) =>
      JSON.stringify(obj).toLowerCase().includes(classificationNumber)
    );
    setSearchResult(prev => res)
  }

  return (
    <div className="App">
      <Router>
      <Header onSearch={setSearchKeyword} handleSearch={handleSearch} />
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={route.element}
            />
          ))}
        </Routes>
      </Router>
    </div>
  )
}

export default App
