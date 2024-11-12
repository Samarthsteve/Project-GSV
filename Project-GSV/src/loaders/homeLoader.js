import axios from "axios"

async function HomeLoader () {
  const baseUrl = import.meta.env.VITE_API_URL;
  let loaderData = {};

  // For hero
  await axios.get(`${baseUrl}imgthumbnail/homehero`).then(res => loaderData.hero = res.data).catch(err => console.log(err))

  // For Thumbnail
  await axios.get(`${baseUrl}imgthumbnail/home`).then(res => loaderData.thumbnail = res.data).catch(err => console.log(err))

  // For profiles
  await axios.get(`${baseUrl}teamprofile/home`).then(res => {
    loaderData.profiles = res.data;
    loaderData.profiles.sort((a, b) => a.Uid - b.Uid)
  }).catch(err => console.log(err))

  // For testimony
  await axios.get(`${baseUrl}testimony/home`).then(res => {
    loaderData.testimony = res.data;
    loaderData.testimony.sort((a, b) => a.Uid - b.Uid)
  }).catch(err => console.log(err))
  
  // For carousel
  await axios.get(`${baseUrl}homeslider/`).then(res => {
    loaderData.carousel = res.data;
    loaderData.carousel.sort((a, b) => a.Uid - b.Uid)
  }).catch(err => console.log(err))

  return loaderData;
}

export default HomeLoader;