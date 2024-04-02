const users = require("./db");
const getHomePage = (_, res) => {
  res.sendFile(__dirname + "/public/home.html", (err) => {
    if (err) {
      console.log(err);
      res.status(404).send("could not find file");
    }
  });
};

const getInfoPage = (_, res) => {
  res.sendFile(__dirname + "/public/info.html", (err) => {
    if (err) {
      console.log(err);
      res.status(404).send("could not find file");
    }
  });
};

const getUsers = (_, res) => {
  res.status(200).json(users);
};

const getPosts = (req, res) => {
  const { username } = req.params;
  const foundUser = users.find((user) => user.username === username);
  if (!foundUser) {
    return res.status(404).json({ error: "Invalid username" });
  }

  res.json(foundUser.posts);
};

module.exports = {
  getHomePage,
  getInfoPage,
  getUsers,
  getPosts,
};
