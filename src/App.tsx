import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Header } from "./components";
import { Landing, ChapterDetails, Details } from "./pages";

function App() {
  return (
    <div className="lg:container lg:mx-auto pr-5 pl-5">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Landing />}
          />
          <Route
            path="/podcast/:id"
            element={<Details />}
          />
          <Route
            path="/podcast/:id/episode/:episodeId"
            element={<ChapterDetails />}
          />
          <Route
            path="*"
            element={
              <Navigate
                to="/"
                replace
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
