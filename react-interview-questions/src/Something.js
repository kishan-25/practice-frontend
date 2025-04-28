import { useState } from "react"

export default function Something(){
    const [name, setName] = useState('');
    const [waitList, setWaitList] = useState([]);
    const onSubmit = (e) => {
        e.preventDefault();
        setWaitList([...waitList, name]);
    }
    return(
        <div>
            <form onSubmit={onSubmit}>
                <label>
                    Name: 
                    <input 
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <button type="submit">Add to waitlist</button>
            </form>
            <ol>
                {waitList.map((name, index)=>(
                    <li key={index}>{name}</li>
                ))}
            </ol>
        </div>
    )
}