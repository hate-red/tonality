import { useState, useEffect } from "react";

export default function Form() {
    const [text, setText] = useState('');
    const [tonality, setTonality] = useState('');
    const [description, setDescription] = useState('');

    function handleText(event) {
        event.preventDefault();

        const requestBody = {
            'text': text,
        }

        async function makePostRequest() {
            const response = await fetch("http://localhost:8000/at", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(requestBody)
            })

            const parsedResponse = await response.json();

            return parsedResponse;
        }

        makePostRequest().then(result => {
            setTonality(result.tonality);
            setDescription(result.description);
        });

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

                <Result tonality={ tonality } description={ description } />

            </div>
        </form>
    );
}


function Result ({ tonality, description }) {
    return (
        <div className="result-block">
            <span className="sentiment-description">
                <i>Result: </i>{ tonality }
            </span>
            <br></br>
            <span className="sentiment-description" >
                <i>Description: </i>{ description }
            </span>
        </div>
        
    );
}