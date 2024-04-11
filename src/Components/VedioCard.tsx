import React from "react";
import { VideoDataType } from "../Interfaces/Interface";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
} from "@chakra-ui/react";
import ReactPlayer from "react-player";
interface VedioCardProps {
  post: VideoDataType;
  page: number;
}

export const VedioCard: React.FC<VedioCardProps> = ({ post, page }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = () => {
    onOpen();
  };
  return (
    <div className="cursor-pointer" onClick={handleClick}>
      <div className="flex justify-center items-center">
        <Drawer size="full" isOpen={isOpen} placement="left" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent
            style={{ textAlign: "center" }}
          >
            <DrawerCloseButton />
            <DrawerHeader></DrawerHeader>

            <DrawerBody>
              <div className="flex justify-center flex-row h-[100%] text-black box-border">
                <div className="w-full flex flex-col">
                  <div className="flex flex-col w-[100%] px-4 py-3 lg:py-6 overflow-y-auto box-border">
                    <div className="h-[200px] md:h-[400px] lg:h-[400px] xl:h-[550px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0">
                      <ReactPlayer
                        url={post?.submission?.mediaUrl}
                        controls
                        width="90%"
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
                          <div className="text-black text-sm">
                            {post?.creator.name}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-[10px] sm:w-[70%] w-[80%] pb-4 text-black text-left px-4 box-border">
                      {post?.submission?.description}
                    </div>
                  </div>
                </div>
              </div>
            </DrawerBody>

           
          </DrawerContent>
        </Drawer>
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
