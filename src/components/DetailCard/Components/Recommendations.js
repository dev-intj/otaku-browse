import React from 'react'

export default function Recommendations({array}) {
    
    if (Array.isArray(array)!= true){

        // there's multiple types inside of this, so I need to run through this
        // const data = array.related;

        return(
            <h1>array is set </h1>
        )
    }
    else{
        return(
            <h1>array is not set </h1>
        )
    }
}