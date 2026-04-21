const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const rl2 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter your name: ", (name) => {
  console.log("Hello,", name);
  rl.close();
});
rl2.question("Enter your age: ", (age) => {
  console.log("you are,", age);
  rl.close();
});

if (age > 2) {
    console.log("Yes");
}