const express = require("express");
const cors = require("cors");
const app = express();

const courses = require("./data/courses.json");
const coursesExtra = require("./data/course-extra.json");

app.use(cors());

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello from the node server 👋");
});

app.get("/courses", (req, res) => {
  res.send(courses);
});

app.get("/courses/course-details/:id", (req, res) => {
  const id = +req.params.id;

  const course = courses.find((course) => course.id === id);
  res.send(course);
});

app.get("/courses/checkout/:id", (req, res) => {
  const id = +req.params.id;
  const courseInfo = coursesExtra.find((course) => course.id === id);
  res.send(courseInfo);
});

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
