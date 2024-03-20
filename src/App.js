import React, { useState, useRef } from 'react';

function App() {
    const [submittedValue, setSubmittedValue] = useState(""); 

    const inputRef = useRef(null);

    const handleForm = (e) => {
        e.preventDefault();
        const inputValue = inputRef.current.value;
        setSubmittedValue(inputValue); 
    };

    return (
        <div>
            <h1>UseRef</h1>
            <form onSubmit={handleForm}>
                <input
                    type="text"
                    ref={inputRef}
                    placeholder='Enter your text'
                />
                <button type='submit'>Submit</button>
            </form>
            {submittedValue && (
                <div>
                    <h4>Submitted Input Value: {submittedValue}</h4>
                    <h4>Count: {submittedValue.length}</h4> 
                </div>
            )}
        </div>
    );
}

export default App;
