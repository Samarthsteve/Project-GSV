import axios from "axios"

async function TimelineLoader () {
  let loaderData = {};

  // For images
  await axios.get("http://localhost:5000/timeline").then(res => {
    loaderData.timeline = res.data;
    loaderData.timeline.sort((a, b) => a.Uid - b.Uid)
  })

  // For hero
  await axios.get("http://localhost:5000/hero/timeline").then(res => loaderData.hero = res.data).catch(err => console.log(err))

  return loaderData;
}

export default TimelineLoader;