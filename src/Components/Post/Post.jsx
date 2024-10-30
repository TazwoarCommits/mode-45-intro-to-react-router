import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";



const Post = ({ post }) => {
    const { title, id } = post
    const navigate = useNavigate() ;

    const handlePostDetail = () => {
            navigate(`/post/${id}`)
    }
    return (
        <div className="my-2 text-center border p-4 flex flex-col justify-between
        border-purple-200 rounded-lg">
            <h2 className="text-xl mb-6">Title : {title}</h2>
            <div className="">
            <Link to={`/post/${id}`}>
                <button className="bg-red-100 font-medium text-black p-2">Read Post</button>
            </Link>
            <button onClick={handlePostDetail}>Details</button>
            </div>
        </div>
    );
};
Post.propTypes = {
    post: PropTypes.object
}

export default Post;