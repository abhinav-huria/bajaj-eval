const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

function isNumeric(value) {
  return /^-?\d+$/.test(value);
}
app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/bfhl", (req, res) => {
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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.warn(`App listening on http://localhost:${PORT}`);
});

module.exports = app;
