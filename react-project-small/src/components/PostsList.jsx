import Post from "./Post.jsx";
import classes from "./PostsList.module.css";
import NewPost from "./NewPost.jsx";
import {useState} from "react";
import Modal from "./Modal.jsx";

function PostsList({isPosting, onStopPosting}) {

const [posts, setPosts] = useState([]);
function addPostHandler(postData){
    setPosts((existingPosts) => [postData, ...posts]);
}

    return (
<>
    {isPosting && ( <Modal onClose={onStopPosting} >
        <NewPost  onClose={onStopPosting} onAddPost={addPostHandler} />
    </Modal>)}

    {posts.length > 0 && (
        <ul className={classes.posts}>
            {posts.map((post, index) => (<Post author={post.author} body={post.body} key={index}/>))}
        </ul>
    )}
    { posts.length === 0 && (
        <div style={{ textAlign: "center" , color:"white"}}>
            <h2>There is no posts yet.</h2>
            <p>Start with your first post.</p>
        </div>
    )}
</>
    );
}

export default PostsList;