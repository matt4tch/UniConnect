import { useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LatLongContext from "./latLong";
import jsonQueryContext from "./jsonQuery";
import YourLocation from "./YourLocation";
import FriendLocation from "./FriendLocation";
import Results from "./Results";

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
    return (
        <div>
            <BrowserRouter>
                <LatLongContext.Provider value={latLong}>
                    <jsonQueryContext.Provider value={jsonQuery}>
                        <QueryClientProvider client={queryClient}>
                                <div>
                                    <Routes>
                                        <Route path="/your-location" element={<YourLocation />} />
                                        <Route path="/friend-location" element={<FriendLocation />} />
                                        <Route path="/Results" element={<Results />} />
                                    </Routes>
                                </div>
                        </QueryClientProvider>
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