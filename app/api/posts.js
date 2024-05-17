import apiInstance from "./axiosInstance";

export const getHeroContent = () => apiInstance.get("/posts/25");

export const getInsightPosts = () =>
  apiInstance.get("/recent-insight?_field=featured_image&acf_format=standard");

export const getSuccessStoryPosts = () =>
  apiInstance.get("/case-study?_field=casestudy_hero&acf_format=standard");
