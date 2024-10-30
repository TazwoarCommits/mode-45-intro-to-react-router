import { useLoaderData } from "react-router-dom";
import User from "../User/User";


const Users = () => {
 
    const ourUsers = useLoaderData() ;
    // console.log(ourUsers);
    return (
        <div>
            <h2>Our Users</h2>
            <p>Total Users : {ourUsers.length}</p>
            <div className="grid grid-cols-3 container mx-auto gap-6">
                {
                    ourUsers.map((user , idx) => <User key={idx} user={user} ></User>)
                }
            </div>
        </div>
    );
};

export default Users;