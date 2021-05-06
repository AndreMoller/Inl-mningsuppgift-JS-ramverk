import React from 'react'

const AddMovieForm = (props) => {
    const [title, setTitle] = React.useState("");
    const [grade, setGrade] = React.useState("");

    const saveBtn = (e) => {
        e.preventDefault();
        props.saveMovie(title, grade);
        console.log(title + " " + grade);
    }

    const onTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const onGradeChange = (e) => {
        setGrade(e.target.value);
    }

    return (
        <div>
            <form>
                <label htmlFor="title">
                </label>
               
                <input type = "text" id = "title" onChange = {onTitleChange}>
                </input>

                <label htmlFor="grade">
                </label>

                <input type = "text" id = "grade" onChange = {onGradeChange}>
                </input>
                <button onClick = {saveBtn}>Save Movie</button>
            </form>
        </div>
    )
}

export default AddMovieForm
