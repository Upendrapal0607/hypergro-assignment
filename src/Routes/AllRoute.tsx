import React from "react";
import { Route, Routes } from "react-router-dom";
import { VedioPlayer } from "../Components/VedioPlayer";
import { SongPage } from "../Pages/SongPage";

export const AllRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/vedio/:postId" element={<VedioPlayer />} />
        <Route path="/" element={<SongPage />} />
      </Routes>
    </div>
  );
};
