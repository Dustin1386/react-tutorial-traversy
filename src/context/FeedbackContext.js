import { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) =>{
    const [feedback, setFeedback] = useState([]);
    useEffect(() => {
      fetchFeedback()

    }, [])

    const fetchFeedback = async () => {
      const response = await fetch('/feedback?_sort=id&_order=desc')
      const data = await response.json()
      setFeedback(data)
    }
    //TODO: V2
    // const [feedbackEdit, setEditItem] = useState({
    //   item: {},
    //   edit: false
    // })
    const deleteFeedback = async (id) => {
       const response = await fetch(`/feedback/${id}`,{
        method: 'DELETE'
       })
          setFeedback(feedback.filter((item) => item.id !== id));
      };
      const addFeedback = async (newFeedback) => {
        const response = await fetch('/feedback', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body:JSON.stringify(newFeedback)
        })
        const data = await response.json()
        setFeedback([data, ...feedback]);
      };

    return <FeedbackContext.Provider 
    value={{
        feedback,
        deleteFeedback,
        addFeedback,

    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext 