import axios from "axios";
const url = "https://internship-service.onrender.com/videos";

export const getSong = async (page: number) => {
  try {
    let result = await axios.get(`${url}?page=${page}`).then((res) => res);
    console.log({ result: result?.data });
    return result?.data;
  } catch (error) {
    return { message: "Error accurce", error };
  }
};
export const getSingSongSong = async (id: any, page: number) => {
  console.log(id);

  try {
    let result = await axios.get(`${url}/?page=${page}`).then((res) => res);
    return result?.data?.data?.posts?.filter((post: any) => post.postId == id);
  } catch (error) {
    return { message: "Error accurce", error };
  }
};
