import axios from "axios";

export const axiosPublic = axios.create({
  baseURL: "https://contact.mediusware.com/api/",
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
