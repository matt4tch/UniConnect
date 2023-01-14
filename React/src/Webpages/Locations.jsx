import LocationList from "../Components/LocationList";
import useFetch from "../Components/UseFetch";

const Locations = () => {
    const campus = 'University of Waterloo'
    const { data: locs, isPending, error } = useFetch();

    return (
        <div className="locations-info m-6">
            <h1 className="text-5xl text-[#25312b] font-serif flex justify-center mb-8"> Preference Guide</h1>
            <h3 className="text-xl text-[#000000] font-serif flex justify-center mb-2"> 
            Welcome to the { campus } campus. Take a look at our study locations, and rate them on your preference!</h3>
            <h3 className="text-xl text-[#000000] font-serif flex justify-center"> 
            Ratings go from 1 (lowest) - 10 (highest)</h3>
            { error && <div>{ error }</div> } 
            { isPending && <div>Loading...</div> } 
            {locs && <LocationList locs={locs} title={locs.title} />}
        </div>
     );
}
export default Locations;