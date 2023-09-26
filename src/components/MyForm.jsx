import { useState } from 'react';




export const MyForm = () => {
    const [mood, setMood] = useState('');
    const [value, setMoodValue] = useState('');

    //let's the user type in the box
    const handleChange = (event) => {
        setMoodValue(event.target.value);
    }

    //updates the mood on button click
    const handleClick = () => {
        setMood(value);
        setMoodValue('')
    }

    return (
        <>
            <form>
                <label> What is your mood? 
                    <br />
                    <input type="text" value={value} onChange={(event) => {handleChange(event)}} />
                </label> 
                <br />
                <button type="button" onClick={handleClick}>Save Mood</button>
            </form>
        <p>My mood is: {mood}</p>
        </>
    )
}

