import { useLoaderData, useNavigate } from "react-router-dom";


const PostDetail = () => {
    const postDetails = useLoaderData();
    const { title, body } = postDetails;

    const navigate = useNavigate();

    // --------------> we can use navigate differently

    // case-1 ::: with route path

    const handleGoBack = () => {
        navigate(`/posts`)
    }

    // case-2 ::: with -1

    const handleGoBack2 = () => {
        navigate(-1)
    }

    return (
        <div>
            <h2>Title : {title}</h2>
            <p>Post : {body}</p>
            <button className="bg-purple-400 text-black" onClick={handleGoBack}>Go Back</button>
            <button className="bg-yellow-400 text-black" onClick={handleGoBack2}>Go Back</button>
        </div>
    );
};

export default PostDetail;