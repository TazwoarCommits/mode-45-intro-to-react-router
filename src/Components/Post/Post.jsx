import PropTypes from "prop-types";
import { Link } from "react-router-dom";

PropTypes

const Post = ({ post }) => {
    const { title, id } = post
    return (
        <div className="my-2 text-center border p-4 flex flex-col justify-between
        border-purple-200 rounded-lg">
            <h2 className="text-xl mb-6">Title : {title}</h2>
            <Link to={`/post/${id}`}>
                <button className="bg-amber-200 text-black p-2">Read Post</button>
            </Link>
        </div>
    );
};
Post.propTypes = {
    post: PropTypes.object
}

export default Post;