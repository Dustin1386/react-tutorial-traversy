import { useState } from "react"
import FeedbackForm from "./components/FeedbackForm"
import FeedBackList from "./components/FeedBackList"
import FeedbackStats from "./components/FeedbackStats"
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
        <Headers  />
        <div className="container">
            
        </div>
        <FeedbackForm />
        <FeedbackStats feedback={feedback} />
        <FeedBackList feedback={feedback} 
        handleDelete={deleteFeedback}
        />

        </>
    )
}

export default App