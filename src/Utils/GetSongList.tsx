import axios from "axios";
const url = "https://internship-service.onrender.com/videos";

// This function is responsiblefor making get request for retrive the data.
export const getSong = async (page: number) => {
  try {
    let result = await axios.get(`${url}?page=${page}`).then((res) => res);
    return result?.data;
  } catch (error) {
    return { message: "Error accurce", error };
  }
};

// This function use for get a single video for single page
// when you do't want use modal
export const getSingSongSong = async (id: any, page: number) => {
  try {
    let result = await axios.get(`${url}/?page=${page}`).then((res) => res);
    return result?.data?.data?.posts?.filter((post: any) => post.postId == id);
  } catch (error) {
    return { message: "Error accurce", error };
  }
};
