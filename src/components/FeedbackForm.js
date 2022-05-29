import {useState} from 'react'
import Button from './shared/Button'
import Card from './shared/Card'
function FeedbackForm() {
    const [text, setText] = useState('filler')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')


    const handleTextChange = (e) =>{
        setText(e.target.value)
    }
  return (
    <Card>
        <form>
            <h2>hello</h2>
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