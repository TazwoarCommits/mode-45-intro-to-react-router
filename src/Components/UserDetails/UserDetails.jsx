import { useLoaderData } from "react-router-dom";

// "street": "Rex Trail",
// "suite": "Suite 280",
// "city": "Howemouth",
const UserDetails = () => {
    const user = useLoaderData() ;
     const {name , email, address , phone , company ,  } = user ; 
    return (
        <div>
            <h2>Details About {name}</h2>
            <p>Email : {email}</p>
            <p>Phone : {phone}</p>
            <p>Address : {address.street}, {address.suite}, {address.city}</p>
            <p>Workplace : {company.name}</p>
        </div>
    );
};

export default UserDetails;