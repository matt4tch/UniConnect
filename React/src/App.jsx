import { useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LatLongContext from "./Context/latLong";
import jsonQueryContext from "./Context/jsonQuery";
import StudySpotContext from "./Context/IdealStudySpot.js";
import YourLocation from "./Webpages/YourLocation";
import FriendLocation from "./Webpages/FriendLocation";
import LocationPreferenceContext from "./Context/locationPreference";
import Results from "./Webpages/Results";
import Topbar from "./Webpages/Topbar";
import Locations from "./Webpages/Locations";
import HomePage from "./Webpages/HomePage";
import NotFound from "./Webpages/NotFound";

const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        cacheTime: Infinity,
      },
    },
  });

const App = () => {
    const latLong = useState(null);
    const jsonQuery = useState(null);
    const studySpot = useState(null);
    const locationPreference = useState(null);
    return (
        <div className="underline text-yellow-500 bg-white">
            <BrowserRouter>
            <Topbar />
                <LatLongContext.Provider value={latLong}>
                <jsonQueryContext.Provider value={jsonQuery}>
                <StudySpotContext.Provider value={studySpot}>
                <LocationPreferenceContext.Provider value={locationPreference}>
                    <QueryClientProvider client={queryClient}>
                            <Routes>
                                <Route path="/" element={<HomePage/>}/>
                                <Route path="/your-location" element={<YourLocation />} />
                                <Route path="/friend-location" element={<FriendLocation />} />
                                <Route path="/location-preferences" element={<Locations />}/>
                                <Route path="/results" element={<Results />} />
                                <Route path="*" element={<NotFound />} />
                            </Routes>
                    </QueryClientProvider>
                </LocationPreferenceContext.Provider>
                </StudySpotContext.Provider>
                </jsonQueryContext.Provider>
                </LatLongContext.Provider>
            </BrowserRouter>
        </div>
    )
}

// modify the createRoot call, delete "ReactDOM"
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />)