const initialData = {
  articles: [
    {
      id: 1,
      avatar: require("../assets/instagram-feed-images/avatar1.jpg"),
      name: "5.min.craft",
      image: require("../assets/instagram-feed-images/img1.jpg"),
      likes: "57",
      commentCount: "1",
      comments: `View all 0 comments`,
    },
    {
      id: 2,
      avatar: require("../assets/instagram-feed-images/avatar1.jpg"),
      name: "5.min.craft",
      image: require("../assets/instagram-feed-images/img2.jpg"),
      likes: "16",
      commentCount: "3",
      comments: "View all 0 comments",
    },
    {
      id: 3,
      avatar: require("../assets/instagram-feed-images/avatar3.jpg"),
      name: "thangflycomicsoffical",
      image: require("../assets/instagram-feed-images/img3.jpg"),
      likes: "6",
      commentCount: "32",
      comments: "View all 0 comments",
    },
    {
      id: 4,
      avatar: require("../assets/instagram-feed-images/avatar2.jpg"),
      name: "teammonsterbox",
      image: require("../assets/instagram-feed-images/img4.jpg"),
      likes: "10",
      commentCount: "198",
      comments: "View all 0 comments",
    },
    {
      id: 5,
      avatar: require("../assets/instagram-feed-images/avatar2.jpg"),
      name: "teammonsterbox",
      image: require("../assets/instagram-feed-images/img5.jpg"),
      likes: "5",
      commentCount: "357",
      comments: "View all 0 comments",
    },
  ],
};

const data = {
  ...initialData,
  articles: initialData.articles.map((article) => {
    return {
      ...article,
      comments: `View all ${article.commentCount} comments`
    }
  })
};

export default data;

