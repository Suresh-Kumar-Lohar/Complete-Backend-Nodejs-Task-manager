require("../src/db/mongoose");
const Task = require("../src/models/task");

// Task.findByIdAndDelete("630da171cca7add729cc7855")
//   .then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};

deleteTaskAndCount("630dbf7500759c13df128e18")
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
