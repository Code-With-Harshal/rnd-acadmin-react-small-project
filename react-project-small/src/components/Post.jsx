// const names = ['Harshal', 'Chaudhari'];
import classes from './Post.module.css'
function Post({author, body, key}) {
    // const chosenName = Math.random() > 0.5 ? names[0] : names[1];
    return (
        // <div className="post">
        <li className={classes.post}>
            {/* <p>{chosenName}</p> */}
            <p className={classes.author}>{key}. {author}</p>
            <p className={classes.text}>{body}</p>
        </li>
    );
}
export default Post;