const express = require("express");
const app = express();

app.use(express.json());

function isNumeric(value) {
  return /^-?\d+$/.test(value);
}
app.get("/", (req, res) => {
  res.send("API is running");
});
app.post("/bfhl", (req, res) => {
  let is_success = true;
  let numarr = [];
  let strarr = [];
  try {
    let arr = req.body.data;
    arr.forEach((element) => {
      if (!isNumeric(element)) {
        strarr.push(element);
      } else {
        numarr.push(element);
      }
    });
  } catch (err) {
    is_success = false;
  }

  res.status(200).send(
    JSON.parse(
      JSON.stringify({
        is_success: is_success,
        user_id: "abhinav_huria_30102001",
        email: "abhinav0331.cse19@chitkara.edu.in",
        roll_number: "1910990331",
        numbers: numarr,
        alphabets: strarr,
      })
    )
  );
});

app.listen(3001, () => {
  console.log("BE started at port 3001");
});

module.exports = app;
