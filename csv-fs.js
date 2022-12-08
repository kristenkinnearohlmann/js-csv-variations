const fs = require("fs");

fs.readFile("./assets/data.csv", "utf-8", (err, data) => {
  if (err) console.log(err);
  else console.log(data);
});

const data = `
id,name,age
1,Johnny,45
2,Mary,20
`;

fs.writeFile("./assets/data2.csv", data, "utf-8", (err) => {
  if (err) console.log(err);
  else console.log("Data saved");
});
