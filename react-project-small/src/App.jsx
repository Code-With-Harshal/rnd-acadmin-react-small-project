import Post from "./components/Post";
import PostsList from "./components/PostsList.jsx";
import MainHeader from "./components/MainHeader.jsx";
import {useState} from "react";

function App() {

  // const mystyle = {
  //   color: "white",
  //   backgroundColor: "DodgerBlue",
  //   padding: "10px",
  //   fontFamily: "Arial"
  // };

    const [modalIsVisible, setModalIsVisible] = useState(false);

    function showModalHandler() {
        setModalIsVisible(true);
    }
    function hideModalHandler() {
        setModalIsVisible(false);
    }
  return (
      // <div style={mystyle}>
      <>
<MainHeader onCreatePost={showModalHandler} />
          <main>
              <PostsList isPosting={modalIsVisible} onStopPosting={hideModalHandler} />
          </main>
      </>
  );
}

export default App;
