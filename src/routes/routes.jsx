import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "../Components/Welcome";
import Fallback from "../Components/Fallback";
import ActivateTrack from "../Components/ActiateTrack";
const PDFView = lazy(() => import("../Components/ResumeView/PDFView"));

const ConfettiAnimation = lazy(() =>
  import("../Components/Animations/confetti")
);
const NotFound = lazy(() => import("../Components/NotFound"));

const AllRoutes = () => {
  return (
    <BrowserRouter basename="/portfolio">
      <Suspense fallback={<Fallback />}>
        <ConfettiAnimation />
        <ActivateTrack />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/pdfView" element={<PDFView />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AllRoutes;
