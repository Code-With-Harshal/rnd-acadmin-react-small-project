import Post from "./Post.jsx";
import classes from "./PostsList.module.css";
import NewPost from "./NewPost.jsx";
import {useEffect, useState} from "react";
import Modal from "./Modal.jsx";

function PostsList({isPosting, onStopPosting}) {

const [posts, setPosts] = useState([]);
const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        setIsFetching(true);
        async function fetchPosts() {
            const response = await fetch("http://localhost:8080/posts");
            const data = await response.json();
            setPosts(data.posts);
            setIsFetching(false);
        }
        fetchPosts();

    }, []);
function addPostHandler(postData){
    fetch("http://localhost:8080/posts", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(postData)
    });
    setPosts((existingPosts) => [postData, ...posts]);
}

    return (
<>
    {isPosting && ( <Modal onClose={onStopPosting} >
        <NewPost  onClose={onStopPosting} onAddPost={addPostHandler} />
    </Modal>)}

    {!isFetching && posts.length > 0 && (
        <ul className={classes.posts}>
            {posts.map((post, index) => (<Post author={post.author} body={post.body} key={index}/>))}
        </ul>
    )}
    { !isFetching && posts.length === 0 && (
        <div style={{ textAlign: "center" , color:"white"}}>
            <h2>There is no posts yet.</h2>
            <p>Start with your first post.</p>
        </div>
    )}
    {isFetching && <div style={{textAlign:'center', color:'white'}}><p>Loading...</p></div>}
</>
    );
}

export default PostsList;