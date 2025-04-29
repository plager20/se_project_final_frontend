const articles = [
  // {
  //   isSaved: true,
  //   title:
  //     'Quantum Leap: Startup Claims Breakthrough in Practical Quantum Computing',
  //   urlToImage: '',
  //   keyword: 'Technology',
  //   content:
  //     'In what could mark a major turning point in the field of quantum computing...',
  //   pubDate: '2025-04-22',
  //   author: 'John Doe',
  // },
  // {
  //   isSaved: true,
  //   title: 'NeuralWear Unveils First Brain-Controlled Smartwatch',
  //   urlToImage: '',
  //   keyword: 'Technology',
  //   content: 'In a world where voice commands and touchscreens dominate...',
  //   pubDate: '2025-04-21',
  //   author: 'John Doe',
  // },
  // {
  //   isSaved: true,
  //   title: ' Underdogs No More: Tulsa Hawks Stun League with Championship Win',
  //   urlToImage: '',
  //   keyword: 'Sports',
  //   content: 'In a season that began with little hope and fewer headlines...',
  //   pubDate: '2025-04-22',
  //   author: 'Jane Doe',
  // },
].map((article) => ({ ...article, _id: crypto.randomUUID() }));

const getArticles = async () => {
  return new Promise((resolve) => {
    resolve(articles);
  });
};

const saveArticles = async ({ _id, isSaved, article, savedArticles }) => {
  return new Promise((resolve) => {
    if (isSaved) {
      const alreadyExists = savedArticles.some((art) => art._id === _id);
      if (!alreadyExists) {
        savedArticles = [...savedArticles, article];
      }
    } else {
      savedArticles = savedArticles.filter((art) => art._id !== _id);
    }
    resolve(savedArticles);
  });
};

export { getArticles, saveArticles };
