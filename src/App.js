import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FeedbackForm from "./components/FeedbackForm";
import FeedBackList from "./components/FeedBackList";
import FeedbackStats from "./components/FeedbackStats";
import Headers from "./components/Headers";
import About from "./pages/About";
import Registration from "./components/Registration";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
  return (
    <FeedbackProvider>
    <Router>
      <Headers />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <FeedbackForm  />
                <FeedbackStats />
                <FeedBackList
                />
              </>
            }
          ></Route>
          <Route path="/about" element={<About />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>

      </div>
    </Router>
    </FeedbackProvider>
  );
}

export default App;
