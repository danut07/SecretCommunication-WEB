"use client";
import axios from "axios";

 // This is a client component 👈🏽


 export const handleAudioChange1 = async (text1:any, audio1:any) => {
  try {
    let formData = new FormData();
    formData.append("audioFile", audio1)
    formData.append("textMessage", text1)
    const response = await fetch("https://localhost:44366/api/Image/encode", {
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

export const handleAudioChange2 = async (audio2:any) => {
  try {
    let formData = new FormData();
    formData.append("audioFile", audio2)
    const response = await fetch("https://localhost:44366/api/Audio/decode", {
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