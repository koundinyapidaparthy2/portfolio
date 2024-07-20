import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "../Components/Welcome";
import Fallback from "../Components/Fallback";
const PDFView = lazy(() => import("../Components/PDFView"));

const AllRoutes = () => {
  return (
    <BrowserRouter basename="/portfolio">
      <Suspense fallback={<Fallback />}>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/pdfView" element={<PDFView />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AllRoutes;
