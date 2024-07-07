"use client";
import axios from "axios";

 // This is a client component 👈🏽


 export const handleImageChange1 = async (text1:any, image1:any) => {
  try {
    let formData = new FormData();
    formData.append("Image", image1)
    formData.append("Message", text1)
    const response = await fetch("https://localhost:44366/api/Image/embed", {
      method: "POST",
      body: formData
    });
    if (response.status == 200) {
      const json = await response.blob();
      return json;
    } else throw response;
  } catch (error) {
    console.log(error);
  }
};

export const handleImageChange2 = async (image2:any) => {
  try {
    let formData = new FormData();
    formData.append("Image", image2)
    const response = await fetch("https://localhost:44366/api/Image/decode", {
      method: "POST",
      body: formData
    });
    if (response.status == 200) {
      var result = await response.blob();
      return result.text();
    } else throw response;
  } catch (error) {
    console.log(error);
  }
};