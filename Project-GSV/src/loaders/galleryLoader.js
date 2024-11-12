import axios from "axios"

async function GalleryLoader () {
  const baseUrl = import.meta.env.VITE_API_URL;
  let loaderData = {};

  // Get Hero
  await axios.get(`${baseUrl}hero/gallery`).then(res => loaderData.hero = res.data);

  // Get Image
  await axios.get(`${baseUrl}gallery`).then(res => {
    loaderData.images = res.data;

    const typeOrderMap = {
      alumni: 0,
      event: 1,
      trip: 2,
      campus: 3,
    };
    loaderData.images.sort((a, b) => {
      const typeComparison = typeOrderMap[a.type] - typeOrderMap[b.type];
      if (typeComparison !== 0) {
        return typeComparison;
      }
      return a.Uid - b.Uid;
    });
  });
  
  
  return loaderData;
}

export default GalleryLoader;