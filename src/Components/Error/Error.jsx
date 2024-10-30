import { Link, useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h2>woa</h2>
            <p>
                {err.statusText || err.message}
            </p>
            <div>
             {
               err.status === 404 && <div>
                <Link to='/'><button className="bg-lime-200 text-black p-2">Home</button></Link>
               </div>
             }
            </div>

        </div>
    );
};

export default Error;