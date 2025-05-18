// ./src/App.js
import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Lazy-loaded pages

const HomePage = lazy(() => import("./pages/HomePage"));  

// Lazy-loaded nested layout and subpages
const HomeLayout = lazy(() => import("./Layouts/HomeLayout"));
const Home = lazy(() => import("./pages/Home"));
const Newsfeed = lazy(() => import("./components/Newsfeed/Newsfeed"));
const Explore = lazy(() => import("./components/Explore/Explore"));

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/socialdummy">
        <ErrorBoundary>
          <Suspense fallback={<div className="text-center p-5">Loading...</div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="*" element={<NotFound />} />

              <Route path="/home" element={<HomeLayout />}>
                <Route index element={<Home />} />
                <Route path="newsfeed" element={<Newsfeed />} />
                <Route path="explore" element={<Explore />} />
              </Route>
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </BrowserRouter>
    </div>
  );
}

function NotFound() {
  console.error("Page not found!");
  return <h1 className="text-center mt-5">404 - Not Found</h1>;
}

export default App;