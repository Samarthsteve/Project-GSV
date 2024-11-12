import axios from "axios"

async function ContactLoader () {
  const baseUrl = import.meta.env.VITE_API_URL;
  let hero;
  await axios.get(`${baseUrl}hero/contact`).then(res => hero = res.data)
  return hero;
}

export default ContactLoader;