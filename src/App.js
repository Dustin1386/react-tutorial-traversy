import { useState } from "react"
import FeedBackList from "./components/FeedBackList"
import Headers from "./components/Headers"
import FeedbackData from "./data/FeedBackData"

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)
    return (
        <>
        <Headers />
        <FeedBackList feedback={feedback} />

        </>
    )
}

export default App