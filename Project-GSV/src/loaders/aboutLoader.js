import axios from "axios"

async function AboutLoader () {
  let loaderData = {};

  // For thumbnail
  await axios.get("http://localhost:5000/imgthumbnail/about").then(res => loaderData.thumbnail = res.data).catch(err => console.log(err))

  // For hero
  await axios.get("http://localhost:5000/hero/about").then(res => loaderData.hero = res.data).catch(err => console.log(err))

  // For profiles
  await axios.get("http://localhost:5000/teamprofile/about").then(res => {
    loaderData.profiles = res.data;
    loaderData.profiles.sort((a, b) => a.Uid - b.Uid)
  }).catch(err => console.log(err))
  
  return loaderData;
}

export default AboutLoader;