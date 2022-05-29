import {useState, useCallback} from 'react'
import RatingSelect from './RatingSelect'
import Button from './shared/Button'
import Card from './shared/Card'


function FeedbackForm({handleAdd}) {
    const [text, setText] = useState('')
    const [rating, setRating] = useState(null)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')
    const [selected, setSelected] = useState(null)



    const handleTextChange = (e) =>{

        if(text === '' || selected === null){
            setBtnDisabled(true)
            setMessage(null)
        } else if(text !== '' && text.trim().length <= 10 || selected === null){
            setMessage('text should be 10 char and pick a rating, pick a rating')
        } else {
            setMessage(null)
            setBtnDisabled(false)
        }
        setText(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault(e)
        const rating = selected

        if(text.trim().length > 10) {
            const newFeedback = {
                text,
                rating
            }
            handleAdd(newFeedback)
            setText('')
            setSelected(null)
            
    


        }

    }
  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>hello</h2>
            <RatingSelect selected={selected} setSelected={setSelected} select={(rating) => setRating(rating)}/>
            <div className='input-group'>
                <input value={text} onChange={handleTextChange} type='text' placeholder='write'/>
                <Button type='submit' isDisabled={btnDisabled}>Send</Button>
            </div>
            {message && <div className='message'>{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm