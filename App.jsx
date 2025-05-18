// ./src/App.js
import { Suspense, lazy } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Lazy-loaded pages
const Home = lazy(() => import("./pages/Home"));
const HomePage = lazy(() => import("./pages/HomePage"));  
function App() {
  return (
    <div className="App">
<HashRouter>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path='/home' element={<Home />} />
 </Routes>
</HashRouter>

    </div>
  );
}

function NotFound() {
  console.error("Page not found!");
  return <h1 className="text-center mt-5">404 - Not Found</h1>;
}

export default App;