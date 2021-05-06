import React from 'react'

const Movie = (props) => {
    const [stars, setStars] = React.useState();

    const removeMovie = () => {
        props.deleteFunction(props.id);
    }

    React.useEffect(() => {
        let star = [];
        for(let i = 0; i < props.data.grade; i++){
            star.push(<i key = {i} className="fas fa-star"></i>);
        }
        setStars(star);
    }, [props]);

    return (
        <li>
            <p>{props.data.title}</p>
            {stars}
            <i className="fas fa-times" onClick = {removeMovie}></i>
        </li>
    )
}

export default Movie
