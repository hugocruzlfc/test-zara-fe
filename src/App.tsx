import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import { Landing, PodcastChapterDetails, PodcastDetails } from "./pages";

function App() {
  return (
    <div className="lg:container lg:mx-auto">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Landing />}
          />
          <Route
            path="/details"
            element={<PodcastDetails />}
          />
          <Route
            path="/chapter"
            element={<PodcastChapterDetails />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
