import { useLoaderData } from "react-router-dom";


const PostDetail = () => {
    const postDetails = useLoaderData() ;
    const {title , body} = postDetails
    return (
        <div>
          <h2>Title : {title}</h2>
          <p>Post : {body}</p>
        </div>
    );
};

export default PostDetail;