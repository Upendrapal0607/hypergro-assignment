import React from "react";
import { Route, Routes } from "react-router-dom";
import { SongPage } from "../Pages/SongPage";
import { Playvedio } from "../Components/Playvedio";
export const AllRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SongPage />} />
        <Route path="/vedio/:postId" element={<Playvedio />} />
      </Routes>
    </div>
  );
};
