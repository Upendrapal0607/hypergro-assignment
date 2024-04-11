import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingSongSong } from "../Utils/GetSongList";
import ReactPlayer from "react-player";
import { VideoDataType } from "../Interfaces/Interface";
import { Loader } from "./Loader";
export const VedioPlayer = () => {
  const [loading,setLoad] = useState(false)
  let { postId } = useParams();
  const [post, setPost] = useState<VideoDataType | null>(null);
  const GetSingePost = async () => {
    setLoad(true)
    if (postId) {
      let page: number = 1;
const storedPage = localStorage.getItem("page");
if (storedPage !== null) {
  page = +JSON.parse(storedPage) || 1; 
}

      let singlePost = await getSingSongSong(postId, page);
      setPost(singlePost[0]);
      setLoad(false)
    } else {
      let singlePost = await getSingSongSong(postId, 0);
      setPost(singlePost[0]);
    }
  };

  useEffect(() => {
    GetSingePost();
  }, [postId]);

  return loading ? (
    <Loader />
  ) :(
    <div className="flex justify-center flex-row h-[100%] text-white box-border">
      <div className="w-full flex flex-col">
        <div className="flex flex-col w-[100%] px-4 py-3 lg:py-6 overflow-y-auto box-border">
          <div className="h-[200px] md:h-[400px] lg:h-[400px] xl:h-[550px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0">
            <ReactPlayer
              url={post?.submission?.mediaUrl}
              controls
              width="100%"
              height="100%"
              style={{ backgroundColor: "#000000" }}
              playing={true}
            />
          </div>
          <div className="text-black font-bold text-sm md:text-xl mt-4 text-left">
            {post?.submission.title}
          </div>

          <div className="flex justify-between flex-col md:flex-row mt-4">
            <div className="flex">
              <div className="flex items-start">
                <div className="flex h-11 w-11 rounded-full overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={post?.creator.pic}
                  />
                </div>
              </div>
              <div className="flex flex-col ml-3">
                <div className="text-black text-md font-semibold flex items-center">
                  {post?.creator?.handle}
                </div>
                <div className="text-black text-sm">{post?.creator.name}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[-10px] sm:w-[70%] w-[80%] pb-4 text-black text-left px-4 box-border">
          {post?.submission?.description}
        </div>
      </div>
    </div>
  );
};
