import axios from "axios"

async function HomeLoader () {
  let loaderData = {};

  // For hero
  await axios.get("http://localhost:5000/imgthumbnail/homehero").then(res => loaderData.hero = res.data).catch(err => console.log(err))

  // For Thumbnail
  await axios.get("http://localhost:5000/imgthumbnail/home").then(res => loaderData.thumbnail = res.data).catch(err => console.log(err))

  // For profiles
  await axios.get("http://localhost:5000/teamprofile/home").then(res => {
    loaderData.profiles = res.data;
    loaderData.profiles.sort((a, b) => a.Uid - b.Uid)
  }).catch(err => console.log(err))

  // For testimony
  await axios.get("http://localhost:5000/testimony/home").then(res => {
    loaderData.testimony = res.data;
    loaderData.testimony.sort((a, b) => a.Uid - b.Uid)
  }).catch(err => console.log(err))
  
  // For carousel
  await axios.get("http://localhost:5000/homeslider/").then(res => {
    loaderData.carousel = res.data;
    loaderData.carousel.sort((a, b) => a.Uid - b.Uid)
  }).catch(err => console.log(err))

  return loaderData;
}

export default HomeLoader;