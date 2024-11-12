import axios from "axios"

async function AlumniLoader () {
  const baseUrl = import.meta.env.VITE_API_URL;
  let loaderData = {};

  // For hero
  await axios.get(`${baseUrl}hero/alumni`).then(res => loaderData.hero = res.data).catch(err => console.log(err))

  // For testimony
  await axios.get(`${baseUrl}testimony/alumni`).then(res => {
    loaderData.testimony = res.data;
    loaderData.testimony.sort((a, b) => a.Uid - b.Uid)
  }).catch(err => console.log(err))

  // For images
  await axios.get(`${baseUrl}alumnislider/`).then(res => {
    loaderData.slider = res.data;
    loaderData.slider.sort((a, b) => a.Uid - b.Uid)
  }).catch(err => console.log(err))

return loaderData;
}

export default AlumniLoader;