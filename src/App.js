import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Search from "./pages/Search";
import ResultsPage from "./pages/Results";
import SavedBeerPage from "./pages/SavedBeers";
import AllBeersPage from "./pages/AllBeers";
import "./App.css";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/saved" element={<SavedBeerPage />} />
          <Route path="/all" element={<AllBeersPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
