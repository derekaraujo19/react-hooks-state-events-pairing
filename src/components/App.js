import video from "../data/video.js";
import Video from "./Video";
import Title from "./Title";
import ViewsAndDate from "./ViewsAndDate";
import Likes from "./Likes";
import Comments from "./Comments";

function App() {
  // console.log("Here's your data:", video);

  return (
    <div className="App">
      <Video video={video.embedUrl}/>
      <Title title={video.title}/>
      <ViewsAndDate views={video.views} uploadDate={video.createdAt}/>
      <Likes upvotes={video.upvotes} downvotes={video.downvotes}/>
      <Comments COMMENTS={video.comments}/>
    </div>
  );
}

export default App;
