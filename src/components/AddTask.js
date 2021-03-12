import { useState } from 'react'

const AddTask = ({ onInsert }) => {
    const [text, setText] = useState('')
    const [date, setDate] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert('Task field cannot be null')
            return
        }

        onInsert({ text, date, reminder })
        setText('')
        setDate('')
        setReminder(false)
    }

    return (
        <form class='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' placeholder='insert task'
                    value={text} onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Date Time</label>
                <input type='text' placeholder='insert Date Time'
                value={date} onChange={(e) => setDate(e.target.value)}/>
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type='checkbox' checked={reminder}
                value={reminder} onChange={(e) => setReminder(e.currentTarget.checked) }/>
            </div>

            <input type='submit' value='Insert'
                className='btn btn-block'/>
        </form>
    )
}

export default AddTask
