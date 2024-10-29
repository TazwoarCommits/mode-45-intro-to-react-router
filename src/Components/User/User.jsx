

const User = ({user}) => {
    const {name , id , email , phone} = user
    return (
        <div className="bg-slate-300 my-6
         rounded-2xl text-black">
            <div className="m-4">
            <p>{id}.</p>
            <h2>Name : {name}</h2>
            <p>Email : {email}</p>
            <p>Contact : {phone}</p>
            </div>
        </div>
    );
};

export default User;