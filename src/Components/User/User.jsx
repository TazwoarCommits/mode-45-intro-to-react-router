import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const User = ({ user }) => {
    const { name, id, email, phone } = user ;
    return (
        <div className="bg-slate-400 text-black/75 p-8 rounded-2xl">
            <div className="">
                <p>{id}.</p>
                <h2>Name : {name}</h2>
                <p>Email : {email}</p>
                <p>Contact : {phone}</p>
                <Link to={`/user/${id}`}>Details</Link>
            </div>
        </div>
    );
};

User.propTypes = {
    user: PropTypes.object
}

export default User;