import mongoose from "mongoose";

async function connectDB() {
  await mongoose
    .connect(
      "mongodb+srv://sasatracker:Mombasa001@cluster0.g4lxwlf.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => console.log("MongoDB connection successful"))
    .catch((err) => console.error(err));

  // app.get("/", (req, res) => {
  //   res.send("Hello|World");
  // });
}

export default connectDB;
