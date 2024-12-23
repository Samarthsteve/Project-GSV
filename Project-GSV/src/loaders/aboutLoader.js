import axios from "axios"

async function AboutLoader () {
  const baseUrl = import.meta.env.VITE_API_URL;

  let loaderData = {};

  // For thumbnail
  await axios.get(`${baseUrl}imgthumbnail/about`).then(res => loaderData.thumbnail = res.data).catch(err => console.log(err))

  // For hero
  await axios.get(`${baseUrl}hero/about`).then(res => loaderData.hero = res.data).catch(err => console.log(err))

  // For profiles
  await axios.get(`${baseUrl}teamprofile/about`).then(res => {
    loaderData.profiles = res.data;
    loaderData.profiles.sort((a, b) => a.Uid - b.Uid)
  }).catch(err => console.log(err))

  return loaderData;
}

export default AboutLoader;