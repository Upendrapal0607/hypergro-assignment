import React from "react";
import { VideoDataType } from "../Interfaces/Interface";
import { useDisclosure } from "@chakra-ui/react";
import ReactPlayer from "react-player";
import { VedioPlayerModal } from "./VideoPlayerModal";
interface VedioCardProps {
  post: VideoDataType;
  page: number;
}

export const VedioCard: React.FC<VedioCardProps> = ({ post, page }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  localStorage.setItem("page", JSON.stringify(page)); // it will use when you want to play video on onother page.
  const handleClick = () => {
    onOpen();
  };
  return (
    <div className="cursor-pointer" onClick={handleClick}>
      <div className="flex justify-center items-center">
        <VedioPlayerModal post={post} onClose={onClose} isOpen={isOpen} />
      </div>
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
    </div>
  );
};
