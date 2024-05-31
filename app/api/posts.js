import apiInstance from "./axiosInstance";

export const getHeroContent = () => apiInstance.get("/posts/25");

export const getInsightPosts = () =>
  apiInstance.get("/recent-insight?_field=featured_image&acf_format=standard");

export const getSuccessStoryPosts = () =>
  apiInstance.get("/case-study?_field=casestudy_hero&acf_format=standard");

export const getHomeContent = () =>
  apiInstance.get("/home/88?_field=header_title&acf_format=standard");

export const getAboutUsContent = () =>
  apiInstance.get(
    "/about-us/288?_field=about_us_hero_image&acf_format=standard"
  );

export const getSocialMediaContent = () =>
  apiInstance.get(
    "/social-media-adverti/289?_field=why_choose_us_image&acf_format=standard"
  );

export const getContactUsContent = () =>
  apiInstance.get(
    "/contact-us/292?_field=contact_us_image&acf_format=standard"
  );

export const getTeamMembers = () =>
  apiInstance.get("/member?_field=member_image&acf_format=standard");

export const getTermsContent = () => apiInstance.get("/legal-informations/315");

export const getPolicyContent = () =>
  apiInstance.get("/legal-informations/314");

export const getContactFormContent = () => apiInstance.get("/contact-form/323");
