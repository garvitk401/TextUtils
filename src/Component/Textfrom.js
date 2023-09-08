import React from 'react'
import { useState } from 'react'

export default function Textfrom(props) {
    const [text, setText] = useState('')
    const handle_change = (event) => {
        setText(event.target.value)
    }
    const handle_upper = () => {
        let newText = text.toUpperCase()
        setText(newText)
    }
    const handle_lower = () => {
        let newText = text.toLowerCase()
        setText(newText)
    }
    const handle_clear = () => {
        let newText = ''
        setText(newText)
    }
    const handle_copy = () => {
        let newText = document.getElementById('textarea')
        newText.select()
        navigator.clipboard.writeText(newText.value)
    }
    const handle_space = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
    }
    return (
        <>
            <div className="mb-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <label htmlFor="exampleFormControlTextarea1" className="form-label"><h2>Textarea</h2></label>
                <textarea className="form-control" id="textarea" rows="10" value={text} onChange={handle_change} style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}></textarea>
            </div>
            <div>
                <button type="button" className={`btn btn-${props.mode === 'dark' ? 'dark' : 'primary'} m-2`} onClick={handle_upper}>IntoUpperCase</button>
                <button type="button" className={`btn btn-${props.mode === 'dark' ? 'dark' : 'primary'} m-2`} onClick={handle_lower}>IntoLowerCase</button>
                <button type="button" className={`btn btn-${props.mode === 'dark' ? 'dark' : 'primary'} m-2`} onClick={handle_clear}>Clear</button>
                <button type="button" className={`btn btn-${props.mode === 'dark' ? 'dark' : 'primary'} m-2`} onClick={handle_copy}>Copy</button>
                <button type="button" className={`btn btn-${props.mode === 'dark' ? 'dark' : 'primary'} m-2`} onClick={handle_space}>RemoveSpace</button>
            </div>
            <div className='my-4' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h3>Text Summary</h3>
                <p>
                    {text.split(" ").filter((Element) => { return Element.length !== 0 }).length} WORDS & {text.length} CHARACTER
                </p>
                <h3>PREVIEW</h3>
                <p>
                    {text}
                </p>
            </div>
        </>
    )
}
