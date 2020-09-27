import React from "react"

const Display = props => {
    return (    
        <div className="Display">
            <h1 id="category">Category: <span id="propCategory">{props.category}</span></h1>
            <h2 id="playerScore">Player Score: {props.score}</h2>
            <h1 id="question">Question: {props.question}</h1>
            <h2 id="value">Value: {props.value}</h2>
            <label for="playerResponse">WHAT/WHO IS: </label>
            <input name="playerResponse" id="playerResponse" type="text"></input>
            <button onClick={props.handleResponse}>Submit</button>
            <hr></hr>
            {/* {JSON.stringify(props.data)} */}
        </div>
    )
}
export default Display