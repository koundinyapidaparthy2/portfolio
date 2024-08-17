import React, { useEffect, useState, useRef } from "react";
import { activateAnalytics } from "../actions";
import { useDispatch } from "react-redux";
const ActivateTrack = () => {
  const dispatch = useDispatch();
  const [locationPermission, setLocationPermission] = useState({
    error: {
      message: null,
      code: -2,
    },
  });
  const lastLocationUpdateTime = useRef(0);
  useEffect(() => {
    const getLocation = () => {
      return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              setLocationPermission({
                error: {
                  code: -1,
                  message: "Success",
                  position,
                },
              });

              return resolve(position);
            },
            (error) => {
              setLocationPermission({
                error,
              });
              return reject(error);
            },
            {}
          );
        } else {
          setLocationPermission({
            error: {
              code: 0,
              message: "Geolocation is not supported by this browser.",
            },
          });
          reject(new Error("Geolocation is not supported by this browser."));
        }
      });
    };
    const fetchLocationData = async () => {
      try {
        lastLocationUpdateTime.current = Date.now();
        await getLocation();
      } catch (error) {}
    };
    fetchLocationData();
    return () => {};
  }, [navigator.geolocation]);

  useEffect(() => {
    const dispatchAction = () => {
      if (
        locationPermission.error.code === -1 &&
        locationPermission.error.position &&
        Date.now() - lastLocationUpdateTime.current >= 10000 &&
        Date.now() - lastLocationUpdateTime.current <= 15000
      ) {
        const lat = (
          ((locationPermission.error || {}).position || {}).coords || {}
        ).latitude;
        const long = (
          ((locationPermission.error || {}).position || {}).coords || {}
        ).longitude;
        dispatch(activateAnalytics.pending({ lat, long }));
      } else {
        if (
          Date.now() - lastLocationUpdateTime.current >= 10000 &&
          Date.now() - lastLocationUpdateTime.current <= 15000
        ) {
          dispatch(activateAnalytics.pending());
        }
      }
    };
    dispatchAction();
    const intervalId = setInterval(dispatchAction, 10000);
    return () => clearInterval(intervalId);
  }, [locationPermission.error, dispatch]);
  return <div />;
};

export default ActivateTrack;
