const connection = require("../config/database");
const getHomepage = (req, res) => {
  return res.render("home.ejs");
};

const getABC = (req, res) => {
  res.send("check ABC");
};
const postCreateUser = async (req, res) => {
  console.log(">>> req.body", req.body);
  let email = req.body.email;
  let name = req.body.myname;
  let city = req.body.city;

  console.log(">>> email =", email, "name = ", name, " city = ", city);

  // // with placeholder
  // connection.query(
  // `INSERT INTO Users (email,name,city)
  //  VALUES (?, ?, ?)`,
  // [email, name, city],
  //   function (err, results) {
  //     console.log(results);
  //     res.send("Created user succeed !");
  //   },
  // );
  const [results, field] = await connection.query(
    `INSERT INTO Users (email,name,city)
  VALUES (?, ?, ?)`,
    [email, name, city],
  );
  console.log(">>> check results: ", results);
  res.send("Created user succeed !");
};
const getCreatePage = (req, res) => {
  res.render("create.ejs");
};
module.exports = {
  getHomepage,
  getCreatePage,
  getABC,
  postCreateUser,
};
