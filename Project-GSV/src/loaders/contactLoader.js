import axios from "axios"

async function ContactLoader () {
  let hero;
  await axios.get("http://localhost:5000/hero/contact").then(res => hero = res.data)
  return hero;
}

export default ContactLoader;