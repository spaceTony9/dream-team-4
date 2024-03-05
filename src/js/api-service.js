import axios from 'axios';

//usage example:
// urlCreator(CONSTANTS.POPULAR_BOOKS_ALL_CATEGORIES)
//   .then(({ data }) => {
//     console.log(data);
//   })
//   .catch(error => console.log(error));

export async function urlCreator(url, category) {
  const getUrl = await axios.get(url, {
    params: {
      category,
    },
  });
  return getUrl;
}
