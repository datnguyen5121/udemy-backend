const express = require("express"); //  commonjs
const {
  getHomepage,
  getABC,
  postCreateUser,
  getCreatePage,
} = require("../controllers/homeController");
//khai báo route
const router = express.Router();

//router.Method('/route',handler)
router.get("/", getHomepage);
router.get("/abc", getABC);
router.get("/create", getCreatePage);
router.post("/create-user", postCreateUser);

module.exports = router; //export default
