import React, {useState, useEffect} from "react";
import axios from "axios"

function StarWarMovies(){
    const [number, setNumber] = useState(1);
    const [people, setPeople] = useState("");
    //the useEffect() only renders after number is changed.
    //We can use multiple useEffect() in one functional component
    useEffect(() => {
        async function getData(){
            const response = await axios(`https://swapi.dev/api/people/${number}`)
            setPeople(response.data)
            
        }

        getData();
    }, [number])
    console.log(people.name)
    return (
        <div>
            <h1>The Star war people name is {people.name}</h1>
            <select onChange = {e => setNumber(e.target.value)}>
               { [1,2,3,4,5,6,7].map(item => {
                    return <option value = {item}>Person {item}</option>
                })}
            </select>
        </div>
    )
}

export default StarWarMovies;