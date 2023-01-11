import { Link, } from "react-router-dom";

const HomePage = () =>{

    return (
        <div className="margin-auto p-50 mt-20 mb-20 place-content-center m-10">
            <h1 className="text-2xl mb-5">Let use handle how you Connect while you handle Uni!</h1>
            <p>Step 1: Select your location!</p>
            <p>Step 2: Select your friend&apos;s location with our interactive map!</p>
            <p>Step 3: Select your preferences regarding each study spot option!</p>
            <p>Step 4: Let the magic algorithm do it&apos;s work!</p>
            <p>Step 5: Take the directions given and find your common study spot!</p>
            <p className="mb-7">Step 6: Send your friend&apos;s directions to your friend so they can find you there!</p>
            <Link className="text-white bg-yellow-500 border-0 rounded-xl p-3 mt-20 cursor-pointer hover:shadow-lg" to="/your-location">Use Tool</Link>
        </div>
        


    );
};

export default HomePage;