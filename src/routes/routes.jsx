import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store/store";
import Welcome from "../Components/Welcome/index";
import Fallback from "../Components/Fallback";
const PDFView = lazy(() => import("../Components/PDFView"));
const ConfettiAnimation = lazy(() =>
  import("../Components/Animations/Confitee")
);

const AllRoutes = () => {
  const [celebrate, setCelebrate] = React.useState(true);
  return (
    <Provider store={store}>
      <BrowserRouter basename="/portfolio">
        <Suspense fallback={<Fallback />}>
          <ConfettiAnimation />
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/pdfView" element={<PDFView />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </Provider>
  );
};

export default AllRoutes;
