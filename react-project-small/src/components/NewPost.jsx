import classes from './NewPost.module.css';
import {useState} from "react";

function NewPost({ onClose, onAddPost}) {
    const [enteredBody, setEnteredBody] = useState('Author');
    const [enteredAuthor, setEnteredAuthor] = useState('Post');
    function bodyChangeHandler(e) {
        setEnteredBody(e.target.value);
    }
    function authorChangeHandler(e) {
        setEnteredAuthor(e.target.value);
    }

    function submitHandler(e) {
        e.preventDefault();
        const postData =
            {
                author: enteredAuthor,
                body: enteredBody
            };
        onAddPost(postData)
        console.log(postData);
        onClose();
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} onChange={bodyChangeHandler} />
            </p>
            <p>
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" required onChange={authorChangeHandler} />
            </p>
            <p className={classes.actions}>
                <button onClick={onClose} type={"button"}>Cancel</button>
<button onClick="" type={"submit"}>Submit</button>
            </p>
        </form>
    );
}

export default NewPost;