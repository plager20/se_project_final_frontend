const newsApiBaseUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://nomoreparties.co/news/v2/everything'
    : 'https://newsapi.org/v2/everything';

const apiKey = '020906194a3e429eb3cf16f7baa623e8';

// const request = (url, options) => {
//   return fetch(url, options).then(checkResponse);
// };

// function checkResponse(res) {
//   if (res.ok) {
//     return res.json();
//   }
//   return Promise.reject(`Error: ${res.status}`);
// }
const sevenDaysAgo = () => {
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() - 7);
  return currentDate.toISOString().split('T')[0];
};

const today = () => {
  return new Date().toISOString().split('T')[0];
};

const parseNewsData = (newsData) => {
  return newsData['articles'];
};

const getNewsArticles = async (keyword) => {
  const url = `${baseUrl}?q=${encodeURIComponent(
    keyword
  )}&apiKey=${apiKey}&from=${get7DaysAgo()}&to=${getToday()}&pageSize=100`;

  try {
    const articleObject = await request(url); // Resolve the promise
    const articles = parseNewsData(articleObject);
    return articles; // Return the articles array
  } catch (err) {
    console.log('Error getting news articles:', err);
  }
};

export default getNewsArticles;
