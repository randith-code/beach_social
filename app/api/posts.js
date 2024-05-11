import apiInstance from "./axiosInstance";

export const getHeroContent = () => apiInstance.get("/posts/25");

export const getInsightPost1 = () => apiInstance.get("/posts/73");
export const getInsightPost2 = () => apiInstance.get("/posts/75");
export const getInsightPost3 = () => apiInstance.get("/posts/77");
