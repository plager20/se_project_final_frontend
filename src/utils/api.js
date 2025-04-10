const articles = [
  {
    isSaved: true,
    title:
      'Quantum Leap: Startup Claims Breakthrough in Practical Quantum Computing',
    urlToImage: '',
    keyword: 'Technology',
    content:
      'In what could mark a major turning point in the field of quantum computing...',
    pubDate: '2025-04-10',
    author: 'John Doe',
  },
  {
    isSaved: true,
    title: 'NeuralWear Unveils First Brain-Controlled Smartwatch',
    urlToImage: '',
    keyword: 'Technology',
    content: 'In a world where voice commands and touchscreens dominate...',
    pubDate: '2025-03-22',
    author: 'John Doe',
  },
  {
    isSaved: true,
    title: ' Underdogs No More: Tulsa Hawks Stun League with Championship Win',
    urlToImage: '',
    keyword: 'Technology',
    content: 'In a season that began with little hope and fewer headlines...',
    pubDate: '2025-04-08',
    author: 'John Doe',
  },
].map((article) => ({ ...article, _id: crypto.randomUUID() }));

const getArticles = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(articles);
    }, 500);
  });
};

const saveArticles = async ({ _id, isSaved, article, savedArticles }) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (isSaved) {
        savedArticles = [...savedArticles, article];
      } else {
        savedArticles = savedArticles.filter((art) => art._id !== _id);
      }
      resolve(savedArticles);
    }, 500);
  });
};

export { getArticles, saveArticles };
