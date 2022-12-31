import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SearchMap from "./SearchMap";
import MarkerLocation from "./MarkerLocation";

const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        cacheTime: Infinity,
      },
    },
  });

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <QueryClientProvider client={queryClient}>
                    <header>
                        <h1>UniConnect</h1>
                    </header>
                    <div>
                        <h3>Where are you?</h3>
                        <div id="location-search">
                            <MarkerLocation />
                        </div>
                        <div id="map">
                            <div id="panel">
                                <SearchMap />
                            </div>
                        </div>
                        <button>
                            Submit
                        </button>
                    </div>
                </QueryClientProvider>
            </BrowserRouter>
        </div>
    )
}

// modify the createRoot call, delete "ReactDOM"
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />)