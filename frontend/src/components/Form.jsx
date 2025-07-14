import { useState, useEffect } from "react";

export default function Form() {
    const [text, setText] = useState('');
    const [tonality, setTonality] = useState(1.0)

    function handleText(event) {
        event.preventDefault();

        const requestBody = {
            'text': text,
        }

        const response = fetch("http://localhost:8000/at", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(requestBody)
        })

        console.log(response.json())
    }

    return (
        <form className="form-block" onSubmit={ handleText }>
            <div className="forn-wrapper">
                <h1 className="form-title">Analyze sentiment</h1>
                <textarea 
                    type="text" 
                    className="form-textarea" 
                    value={ text }
                    onChange={(e) => setText(e.target.value)} 
                    placeholder="Enter your text..." 
                    name='text' 
                />
                <button className="form-button" type="submit">
                    <span className="button-text">Submit</span>    
                </button>
            </div>
        </form>
    );
}