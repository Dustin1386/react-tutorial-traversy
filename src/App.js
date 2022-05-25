import { useState } from "react"
import FeedBackList from "./components/FeedBackList"
import Headers from "./components/Headers"
import FeedbackData from "./data/FeedBackData"

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)
    
    const deleteFeedback = (id) =>{
        if(window.confirm('you really want to do this homie')){
         setFeedback(feedback.filter((item) => item.id !== id))
        }
    }


    return (
        <>
        <Headers />
        <FeedBackList feedback={feedback} 
        handleDelete={deleteFeedback}
        />

        </>
    )
}

export default App