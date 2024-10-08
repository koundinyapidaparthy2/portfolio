import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "../Components/Welcome";
import Fallback from "../Components/Fallback";
import ActivateTrack from "../Components/ActiateTrack";
const PDFView = lazy(() => import("../Components/ResumeView/PDFView"));
const EditEntirePdfView = lazy(() => import("../Components/EditEntireResume"));
const ConfettiAnimation = lazy(() =>
  import("../Components/Animations/confetti")
);
const NotFound = lazy(() => import("../Components/NotFound"));

const AllRoutes = () => {
  React.useEffect(() => {
    if (window.location.pathname === "/") {
      window.location.href = "/portfolio";
    }
  }, [window.location.pathname]);
  return (
    <BrowserRouter basename="/portfolio">
      <Suspense fallback={<Fallback />}>
        <ConfettiAnimation />
        <ActivateTrack />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/pdf" element={<PDFView />} />
          <Route path="/editPdf" element={<EditEntirePdfView />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AllRoutes;
