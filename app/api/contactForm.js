import axios from "axios";

export const sendMessage = async (data) => {
  const formData = new FormData();
  formData.append("your-name", data.name);
  formData.append("your-email", data.email);
  formData.append("your-subject", data.subject);
  formData.append("your-message", data.message);
  formData.append("_wpcf7_unit_tag", "56");
  try {
    const response = await axios.post(
      "https://www.beachsocial.leadmedia.lk/wp-json/contact-form-7/v1/contact-forms/56/feedback",
      formData
    );
    return response; // Return the response data
  } catch (error) {
    throw error; // Throw error if request fails
  }
};
