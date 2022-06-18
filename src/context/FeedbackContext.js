import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";


const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) =>{
    const [feedback, setFeedback] = useState([
      {
        id: 1,
        text: "this is from context",
        rating: 4,
      },
      {
        id: 2,
        text: "item 2",
        rating: 6,
      },
      {
        id: 3,
        text: "item 3",
        rating: 7,
      },
      {
        id: 4,
        text: "item 4",
        rating: 10,
      },
    ]);
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