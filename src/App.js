import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ProjectProvider } from "./ProjectContext";
import React from "react";
import HomePage from "./pages/HomePage";
import LaunchPad from "./pages/LaunchPad";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <ProjectProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/launchpad" element={<LaunchPad />} />
        {/* <Route path="/detailpage" element={<DetailPage />} /> */}
        {/* <Route path="/detailpage/:id" element={<DetailPage />} /> */}
        <Route path="/:id" element={<DetailPage />} />
      </Routes>
    </ProjectProvider>
  );
}

export default App;
