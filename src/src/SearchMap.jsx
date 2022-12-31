import { useMemo } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const SearchMap = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyDD4V7yHsGuEztB3sRbcQFfjAZYyZhBHm4"
       });
    
    if (!isLoaded){
      return <div><h3>Loading...</h3></div>
    }
    
    return <Map />
}

const Map = () => {
    const center = useMemo(() => ({
        lat: 43.4723, lng: -80.5449 //University of Waterloo
    }), []);

    return (
        <GoogleMap
            center={center}
            zoom={15} 
            mapContainerClassName="panel"
            mapContainerStyle={{
                margin: "20px 0 0",
                height: "60vh",
                width: "100%"
              }} //Setting the size of the Map
            > 
            <Marker position={center}/>
        </GoogleMap>);
}

export default SearchMap;