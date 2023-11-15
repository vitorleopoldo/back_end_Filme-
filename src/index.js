const express = require("express");
const mongoose = require("mongoose");


const app = express();
app.use(express.json());
const port = 3000;

// parte do login 

app.engine("html", require("ejs").renderfile);
app.set("view engine", "html");
app.use("/public", express.static(path.join(_dirname, "public")));
app.set("views", path.join(__dirname, "/views"));
app.set

const Film = mongoose.model("film", {
  title: String,
  description: String,
  image_url: String,
  trailer_url: String,
});

app.get("/", async (req, res) => {
  const films = await Film.find()
  return res.send(films);
});

app.delete("/:id", async (req, res) =>{
  const film = await Film.findByIdAndRemove(req.params.id)
  return res.send(film)
})

app.put("/:id", async (req, res) =>{
  const upfilm = await Film.findByIdAndUpdate(req.params.id,{
    title: req.body.title,
    description: req.body.description,
    image_url: req.body.image_url,
    trailer_url: req.body.trailer_url,
  },{
    new: true
  })
  
  return res.send(upfilm)
})

app.post("/", async (req, res) => {
  const dataFilm = new Film({
    title: req.body.title,
    description: req.body.description,
    image_url: req.body.image_url,
    trailer_url: req.body.trailer_url,
  });
  await dataFilm.save();
  res.send(dataFilm);
});

app.listen(port, () => {
  mongoose.connect(
    "mongodb+srv://vitor:ZWn8JPUMJY77AJAP@cluster0.nofwh2i.mongodb.net/?retryWrites=true&w=majority"
  );
  console.log("app runningS");
});

