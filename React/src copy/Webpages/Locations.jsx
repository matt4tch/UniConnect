import LocationList from "../Components/LocationList";
import useFetch from "../Components/UseFetch";

const Locations = () => {
    const campus = 'University of Waterloo'
    const { data: locs, isPending, error } = useFetch();

    return (
        <div className="locations-info">
            <h1> { campus } Study Location Guide</h1>
            <h3> Welcome to the { campus } campus. Take a look at our study locations!</h3>
            { error && <div>{ error }</div> } 
            { isPending && <div>Loading...</div> } 
            {locs && <LocationList locs={locs} title={locs.title} />}
        </div>
     );
}
export default Locations;