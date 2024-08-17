import { takeLatest, put, call } from "redux-saga/effects";
import { ACTIVATE_ANALYTICS } from "../actions/types";
import { activateAnalytics } from "../actions/index";

const getDeviceAndBrowser = () => {
  const userAgent = navigator.userAgent;

  const device = /Mobi|Android/i.test(userAgent)
    ? /iPad|Tablet/i.test(userAgent)
      ? "tablet"
      : "phone"
    : "laptop";

  const browser = /Chrome/.test(userAgent)
    ? "chrome"
    : /Safari/.test(userAgent)
    ? "safari"
    : /Firefox/.test(userAgent)
    ? "firefox"
    : /Edg/.test(userAgent)
    ? "edge"
    : "other";

  return { device, browser };
};

const getNetworkSpeed = () => {
  return new Promise((resolve) => {
    const connection =
      navigator.connection ||
      navigator.mozConnection ||
      navigator.webkitConnection;
    if (connection) {
      const { downlink, effectiveType } = connection;
      resolve({ speed: downlink, effectiveType });
    } else {
      resolve({ speed: "unknown", effectiveType: "unknown" });
    }
  });
};

function* acitvateAnalyticsSaga({ location = {} }) {
  const deviceAndBrowser = getDeviceAndBrowser();
  const networkSpeed = yield call(getNetworkSpeed);
  const performanceMetrics = {
    loadTime:
      window.performance.timing.loadEventEnd -
      window.performance.timing.navigationStart,
  };
  try {
    const userDetails = {
      ...location,
      device: deviceAndBrowser.device,
      browser: deviceAndBrowser.browser,
      network: networkSpeed,
      performance: performanceMetrics,
    };
    console.log({ userDetails });
    yield put(
      activateAnalytics.success({
        userDetails,
      })
    );
  } catch (error) {
    console.log(error);
  }
}

export default function* acitvateSaga() {
  yield takeLatest(ACTIVATE_ANALYTICS, acitvateAnalyticsSaga);
}
