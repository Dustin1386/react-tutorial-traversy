import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";


const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) =>{
    const [feedback, setFeedback] = useState([]);
    useEffect(() => {
      fetchFeedback()

    }, [])

    const fetchFeedback = async () => {
      const response = await fetch('http://localhost:5000/feedback?_sort=id&_order=desc')
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
      const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback]);
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