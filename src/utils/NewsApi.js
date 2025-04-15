const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://nomoreparties.co/news/v2/everything'
    : 'https://newsapi.org/v2/everything';

const apiKey = '020906194a3e429eb3cf16f7baa623e8';

const from = () => {
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() - 7);
  return currentDate.toISOString().split('T')[0];
};

const to = () => {
  return new Date().toISOString().split('T')[0];
};

const parseNewsData = (newsData) => {
  return newsData['articles'];
};

const getNewsArticles = async (keyword) => {
  const url = `${BASE_URL}?q=${encodeURIComponent(
    keyword
  )}&apiKey=${apiKey}&from=${from()}&to=${to()}&pageSize=100`;

  try {
    const articleObject = await request(url);
    const articles = parseNewsData(articleObject);
    return articles;
  } catch (err) {
    console.log('Error getting news articles:', err);
  }
};

export default getNewsArticles;
