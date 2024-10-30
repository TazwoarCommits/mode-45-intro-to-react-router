import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
    const user = useLoaderData() ;
     const {name , email, address , phone , company , website } = user ; 
    return (
        <div>
            <h2>Details About {name}</h2>
            <p>Email : {email}</p>
            <p>Phone : {phone}</p>
            <p>Web : {website}</p>
            <p>Address : {address.street}, {address.suite}, {address.city}</p>
            <p>Workplace : {company.name}</p>
        </div>
    );
};

export default UserDetails;