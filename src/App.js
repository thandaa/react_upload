import React from 'react';

function App() {

    function handleForm(e){
        e.preventDefault();
        console.log("Hello");
    }
  
    return (
        <div>
            <h1>
                UseRef
            </h1>
            <form onSubmit={handleForm}>
                <input type="text" placeholder='Enter your text' />
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default App;
