import React from "react";
import { Route, Routes } from "react-router-dom";
import { SongPage } from "../Pages/SongPage";
import { Playvedio } from "../Components/Playvedio";
export const AllRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SongPage />} />
        <Route path="/video/:postId" element={<Playvedio />} /> 
        {/* This is a septated page for playing video it can also use.
         But I use modal for play video because It was make more User Interface
        How to you can use it just make your VideoCard div to Link and navigate to path video/{postId}
        and it will work. or you can also use useNavigate function here.
        */}
      </Routes>
    </div>
  );
};
