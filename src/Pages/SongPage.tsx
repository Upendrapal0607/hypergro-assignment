import React, { useEffect, useState } from "react";
import { getSong } from "../Utils/GetSongList";
import { VideoDataType } from "../Interfaces/Interface";
import { VedioCard } from "../Components/VedioCard";
import Pagination from "../Components/Pagination";
import { Loader } from "../Components/Loader";
export const SongPage = () => {
  const [data, setData] = useState<VideoDataType[]>([]);
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(9);
  const [loader, setLoader] = useState(true);

  const FetchData = async () => {
    let responseData = await getSong(page);
    if (responseData?.message == "Success") {
      setLoader(false);
      setData(responseData?.data?.posts);
    } else {
      alert("some error accurse try again Later");
    }
  
  };
 

  useEffect(() => {
    FetchData();
  }, [page]);

  const handleChangPage = (pangeNumber: number) => {
    setPage(pangeNumber);
  };
  return loader ? (
    <Loader />
  ) : (
    <div className="my-4 mx-2">
      <div className="grid sm:grid-cols-2 md:grid-cols-4 grid-cols-1 gap-4">
        {data &&
          data.map((post) => (
            <VedioCard key={post.postId.toString()} post={post} page={page} />
          ))}
      </div>
      <div>
        <Pagination totalPages={total} onPageChange={handleChangPage} />
      </div>
    </div>
  );
};
