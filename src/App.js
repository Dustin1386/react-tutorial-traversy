import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FeedbackForm from "./components/FeedbackForm";
import FeedBackList from "./components/FeedBackList";
import FeedbackStats from "./components/FeedbackStats";
import Headers from "./components/Headers";
import FeedbackData from "./data/FeedBackData";
import About from "./pages/About";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    if (window.confirm("you really want to do this homie")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  return (
    <Router>
      <Routes>
        <Headers />
        <div className="container">
          <Route path="/">
            <FeedbackForm handleAdd={addFeedback} />
            <FeedbackStats feedback={feedback} />
            <FeedBackList feedback={feedback} handleDelete={deleteFeedback} />
          </Route>
          <Route path="/about" element={<About />} />
        </div>
      </Routes>
    </Router>
  );
}

export default App;
