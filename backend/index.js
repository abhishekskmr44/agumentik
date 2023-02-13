const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const SocialLinkSchema = require("./models/Social.Schema");
const cors = require("cors");
const JobTypeModel = require("./models/JobType.schema");
const PORT = process.env.PORT || 8080;
app.use(express.json());
app.use(cors())
app.post("/admin", (req, res) => {
  const { name, password } = req.body;
  if (name == "admin" || password == "admin") {
    res.status(200).send("Login successfull!");
  }
  if (name !== "admin" || password !== "admin") {
    res.status(200).send("Wrong username or password of admin");
  }
});
app.post("/social", async (req, res) => {
  const { facebook, insta, linkedIn } = req.body;
  try {
    let social = new SocialLinkSchema({ facebook, insta, linkedIn });
    await social.save();
    res.status(200).send(social);
  } catch (e) {
    res.status(500).send(e.message);
  }
});
app.get("/social", async (req, res) => {
  try {
    let links = await SocialLinkSchema.find({});
    res.status(200).send(links);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

app.post("/job", async (req, res) => {
  const { title, text } = req.body;
  try {
    let job = new JobTypeModel({ title, text });
    await job.save();
    res.status(404).send(job);
  } catch (e) {
    res.status(500).send(e);
  }
});
app.get("/job", async (req, res) => {
  try {
    let links = await JobTypeModel.find({});
    res.status(200).send(links);
  } catch (e) {
    res.status(500).send(e.message);
  }
});
mongoose.connect(process.env.MONGODB_URL).then(() =>
  app.listen(PORT, () => {
    console.log(`Your app is running on ${PORT}`);
  })
);
