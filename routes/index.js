var express = require("express");
var router = express.Router();
var axios = require("axios");
const commaNumber = require("comma-number");
router.get("/", function(req, res, next) {
  res.render("login");
});

router.post("/login/post", function(req, res) {
  axios.get("http://localhost:4001/users/" + req.body.user).then(doc => {
    var user;
    var name;
    var suename;
    var salary;
    var ot;
    var bonus;
    var totalSa;
    if (doc.data.status != false) {
      if (doc.data.data.password === req.body.password) {
        res.render("result", {
          user: doc.data.data.user,
          name: doc.data.data.name + " " + doc.data.data.surname,
          doctype: doc.data.data.doctype,
          salary: commaNumber(doc.data.data.salary) + " " + "บาท",
          ot: commaNumber(doc.data.data.ot) + " " + "บาท",
          bonus: commaNumber(doc.data.data.bonus) + " " + " บาท",
          totalSa: commaNumber((doc.data.data.salary + doc.data.data.ot + doc.data.data.bonus) - (doc.data.data.salary + doc.data.data.ot + doc.data.data.bonus) * 0.05)+ " " + " บาท"
        });
        console.log(doc.data.data.bonus)
      } else {
        res.render("error", {
          message: "กรุณาใส่ password ให้ถูกต้อง"
        });
      }
    } else {
      res.render("error", {
        message: "กรุณาใส่ user ให้ถูกต้อง"
      });
    }
  });
});

module.exports = router;
