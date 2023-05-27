const express = require("express"); //  commonjs
//khai báo route
const router = express.Router();
router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.get("/abc", (req, res) => {
  res.render("sample.ejs");
});

module.exports = router; //export default
