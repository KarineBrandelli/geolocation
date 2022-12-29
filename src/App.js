import { useEffect, useState } from "react";
import ReactMapGL, { Marker, FlyToInterpolator } from "react-map-gl";
import Fly from "./components/Fly";
import { ImLocation } from "react-icons/im";
import "./App.css";

function App() {
  const [lat, setLat] = useState(22.5726);
  const [lon, setLon] = useState(88.3639);

  const [viewport, setViewport] = useState({
    latitude: lat,
    longitude: lon,
    zoom: 12,
    bearing: 0,
    pitch: 0,
    width: "100%",
    height: "100vh",
  });

  useEffect(() => {
    setViewport({
      latitude: lat,
      longitude: lon,
      zoom: 12,
      transitionInterpolator: new FlyToInterpolator({ speed: 1.0 }),
      transitionDuration: "auto",
      width: "100%",
      height: "100vh",
    });
  }, [lat, lon]);

  return (
    <div className="App">

    </div>
  );
}

export default App;
