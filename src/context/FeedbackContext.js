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
    const deleteFeedback = (id) => {
        if (window.confirm("you really want to do this homie")) {
          setFeedback(feedback.filter((item) => item.id !== id));
        }
      };
      // TODO: V2
      // const editFeedback = (item) =>{
      //   console.log(item, 'item')
      //   setEditItem({
      //     item,
      //     edit :true
      //   })
      // }
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