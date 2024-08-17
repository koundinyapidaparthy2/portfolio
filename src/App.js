import React, { useEffect } from "react";
import AllRoutes from "./routes/routes";
import { activateAnalytics } from "./actions";
import { useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const checkLocationPermission = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            dispatch(
              activateAnalytics.pending({
                latitude: {
                  lat: position.coords.latitude,
                  long: position.coords.longitude,
                },
              })
            );
          },
          (error) => {
            dispatch(
              activateAnalytics.pending({
                latitude: {},
              })
            );
          }
        );
      } else {
        dispatch(
          activateAnalytics.pending({
            latitude: {},
          })
        );
        console.warn("Geolocation is not supported by this browser.");
      }
    };

    checkLocationPermission();
  }, []);
  return <AllRoutes />;
}

export default App;
