var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
    res.render("zelda-login-screen");
});

module.exports = router;