import { takeLatest, put, call, select } from "redux-saga/effects";
import { ACTIVATE_ANALYTICS } from "../actions/types";
import { activateAnalytics } from "../actions/index";
import { createSessionToken as createSessionTokenApi } from "../graphql";
import { getActivateTrackToken } from "../selectors";
const saveToken = (token) => {
  const expiry = new Date().getTime() + 24 * 60 * 60 * 1000;
  localStorage.setItem("trackerToken", JSON.stringify({ token, expiry }));
};

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

function* acitvateAnalyticsSaga({ payload }) {
  const trackerToken = yield select(getActivateTrackToken);
  if (!trackerToken) {
    const deviceAndBrowser = getDeviceAndBrowser();
    const networkSpeed = yield call(getNetworkSpeed);
    const performanceMetrics = {
      loadTime:
        window.performance.timing.loadEventEnd -
        window.performance.timing.navigationStart,
    };
    try {
      const { token } = yield call(createSessionTokenApi, {
        data: {
          ...payload,
          device: deviceAndBrowser.device,
          browser: deviceAndBrowser.browser,
          network: networkSpeed,
          performance: performanceMetrics,
        },
      });
      saveToken(token);
      yield put(
        activateAnalytics.success({
          trackerToken: token,
        })
      );
    } catch (error) {
      activateAnalytics.error({ error });
    }
  }
}

export default function* acitvateSaga() {
  yield takeLatest(ACTIVATE_ANALYTICS, acitvateAnalyticsSaga);
}
