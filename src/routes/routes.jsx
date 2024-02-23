import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PDFView from "../Components/PDFView";
import Fallback from "../Components/Fallback";
const Welcome = lazy(() => import("../Components/Welcome"));

const AllRoutes = () => {
  return (
    <BrowserRouter basename="/portfolio">
      <Suspense fallback={<Fallback />}>
        <Routes>
          <Route path="/" element={<PDFView />} />
          <Route path="/versatile" element={<Welcome />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AllRoutes;
