require("../src/db/mongoose");
const User = require("../src/models/user");

// 630d0377f9623d0d1ceb0a45

User.findByIdAndUpdate("630d9f4db7570c8484e43adb", { age: 1 })
  .then((user) => {
    console.log(user);
    return User.countDocuments({ age: 1 });
  })
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });
