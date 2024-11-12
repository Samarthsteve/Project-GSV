import axios from "axios"

async function AcademicsLoader () {
  const baseUrl = import.meta.env.VITE_API_URL;
  let loaderData = {};

  // For questions
  await axios.get(`${baseUrl}question`).then(res => {
    loaderData.questions = res.data;
    loaderData.questions.sort((a, b) => a.Uid - b.Uid)
  })

  // For hero
  await axios.get(`${baseUrl}hero/academics`).then(res => loaderData.hero = res.data).catch(err => console.log(err))

  return loaderData;
}

export default AcademicsLoader;