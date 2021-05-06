import React from 'react'

const Movie = (props) => {
    console.log("Hej André");
    return (
        <li>
            <p>hej</p>
            <p>{props.data.title}</p>
            <p>{props.data.grade}</p>
        </li>
    )
}

export default Movie
