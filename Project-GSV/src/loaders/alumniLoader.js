import axios from "axios"

async function AlumniLoader () {
  let loaderData = {};

  // For hero
  await axios.get("http://localhost:5000/hero/alumni").then(res => loaderData.hero = res.data).catch(err => console.log(err))

  // For testimony
  await axios.get("http://localhost:5000/testimony/alumni").then(res => {
    loaderData.testimony = res.data;
    loaderData.testimony.sort((a, b) => a.Uid - b.Uid)
  }).catch(err => console.log(err))

  // For images
  await axios.get("http://localhost:5000/alumnislider/").then(res => {
    loaderData.slider = res.data;
    loaderData.slider.sort((a, b) => a.Uid - b.Uid)
  }).catch(err => console.log(err))

  return loaderData;
}

export default AlumniLoader;