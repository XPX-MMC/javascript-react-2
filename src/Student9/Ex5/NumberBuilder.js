// create two buttons. one reset button and one add number button
//add number button build string of numbers displaying number of times button has been pressed
//reset button clears numbers

import React, { useState } from "react";

export  const NumberBuilder = () => {
    let [number, setNumber] = useState(0)
    let [string, setString] = useState("")
    const  onHandleClick = () => {
        setNumber (number + 1)
        setString (string = string + number)

    }

    const onReset = () => {
        setNumber (0)
        setString ("")
    }
    return (

        <div>

        <button onClick = {()=>onHandleClick()}>Add Number</button>
        <button onClick = {()=>onReset()}>Reset</button>
        <br></br>
        Numbers: {string}
        
        </div>
    )
}

