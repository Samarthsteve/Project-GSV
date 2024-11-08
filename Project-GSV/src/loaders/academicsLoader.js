import axios from "axios"

async function AcademicsLoader () {
  let loaderData = {};

  // For questions
  await axios.get("http://localhost:5000/question").then(res => {
    loaderData.questions = res.data;
    loaderData.questions.sort((a, b) => a.Uid - b.Uid)
  })

  // For hero
  await axios.get("http://localhost:5000/hero/academics").then(res => loaderData.hero = res.data).catch(err => console.log(err))

  return loaderData;
}

export default AcademicsLoader;