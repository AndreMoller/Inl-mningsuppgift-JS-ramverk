import React from 'react'

const AddMovieForm = (props) => {
    const [title, setTitle] = React.useState("");
    const [grade, setGrade] = React.useState(1);

    const saveBtn = (e) => {
        e.preventDefault();

        if (title !== "") {
            props.saveMovie(title, grade);
            setTitle("");
            setGrade(1);
        } else {
            alert("Titel krävs");
        }

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
                <div id = "formdiv">
                    <label htmlFor="title">
                    </label>

                    <input type="text" className = "form-control" id="title" placeholder="Titel här..." value={title} onChange={onTitleChange}>
                    </input>

                    <label htmlFor="grade">
                    </label>

                    <select className="form-control" id="grade" value={grade} onChange={onGradeChange}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>

                    <button className = "btn btn-primary" id = "saveBtn" onClick={saveBtn}>Save Movie</button>
                </div>
            </form>
        </div>
    )
}

export default AddMovieForm
