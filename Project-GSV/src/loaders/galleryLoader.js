import axios from "axios"

async function GalleryLoader () {
  let loaderData = {};

  // Get Hero
  await axios.get("http://localhost:5000/hero/gallery").then(res => loaderData.hero = res.data);

  // Get Image
  await axios.get("http://localhost:5000/gallery").then(res => {
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