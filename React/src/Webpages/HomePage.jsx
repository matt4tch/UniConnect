import { Link, } from "react-router-dom";

const HomePage = () =>{

    return (
        <div className="text-red">
            <h2>Let use handle how you Connect while you handle Uni!</h2>
            <Link to="/your-location">Use Tool</Link>
        </div>
    );
};

export default HomePage;