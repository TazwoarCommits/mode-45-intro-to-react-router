

const User = ({user}) => {
    const {name , id , email , phone} = user
    return (
        <div className="bg-slate-400 text-black/75 p-8 rounded-2xl">
            <div className="">
            <p>{id}.</p>
            <h2>Name : {name}</h2>
            <p>Email : {email}</p>
            <p>Contact : {phone}</p>
            </div>
        </div>
    );
};

export default User;