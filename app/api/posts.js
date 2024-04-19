import apiInstance from "./axiosInstance";

export const getHeroContent = () => apiInstance.get("/posts/25");
