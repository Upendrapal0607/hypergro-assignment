import React from "react";
import { VideoDataType } from "../Interfaces/Interface";
import { Link } from "react-router-dom";

interface VedioCardProps {
  post: VideoDataType;
  page: number;
}

export const VedioCard: React.FC<VedioCardProps> = ({ post, page }) => {
  return (
    <Link to={`/vedio/${post.postId}${page}`}>
      <div className="flex flex-col mb-8">
        <div className="relative h-[300px] md:h-[350px] sm:h-[400px] rounded-xl overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src={post?.submission.thumbnail}
          />
        </div>
        <div className="flex text-black mt-3">
          <div className="flex items-start">
            <div className="flex h-9 w-9 rounded-full overflow-hidden">
              <img
                className="h-full w-full object-cover"
                src={post.creator.pic}
              />
            </div>
          </div>
          <div className="flex flex-col ml-3 overflow-hidden">
            <span className="text-sm font-bold line-clamp-2">
              {post.creator.handle}
            </span>
            <span className="text-[12px] font-semibold mt-2 flex items-center">
              {post.creator.name}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};
