import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {
    const allPosts = useLoaderData() ;
    
    return (
        <div>
            <h2>Total POsts : {allPosts.length}</h2>
            <div className="grid grid-cols-3 gap-4">
                {
                    allPosts.map( post => <Post key={post.it} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;