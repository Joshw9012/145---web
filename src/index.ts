// import { User } from "./models/User";

// const user = new User({ name: "myname", age: 20 });

// user.on("change", () => {
//   console.log("Change #1");
// });

// user.on("change", () => {
//   console.log("Change #2");
// });
// user.on("save", () => {
//   console.log("Save was triggered");
// });

// console.log(user);

// user.trigger("save");

// import axios from "axios";

// axios.post("http://localhost:3000/users", { name: "myname", age: 20 });

// axios.get("http://localhost:3000/users/1");

// import { User } from "./models/User";

// const user = new User({ id: 1 });

// user.set({ name: "New Name", age: 99 });

// user.fetch();
// console.log(user);

// setTimeout(() => {
//   console.log(user);
// }, 4000);

// user.save();

//--------------------------------------------------------

import { User } from "./models/User";

const user = new User({ name: "New rec", age: 0 });

// user.fetch();
// console.log(user);

// setTimeout(() => {
//   console.log(user);
// }, 4000);

user.save();
