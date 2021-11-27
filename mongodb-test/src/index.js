require("dotenv").config();
const Koa = require("koa");
const mongoose = require("mongoose");

const app = new Koa();

const { MONGO_URI } = process.env;

app.use((ctx, next) => {
  console.log(ctx.url);
  console.log(1);
  next();
});

app.use((ctx, next) => {
  console.log(2);
  next();
});

mongoose.connect(MONGO_URI);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function callback() {
  console.log("mongo db connection OK.");
});

const testSchema = mongoose.Schema({
  name: String,
});

testSchema.methods.speak = function () {
  const greeting = this.name
    ? "Meow name is " + this.name
    : "I don't have a name";
  console.log("speak() - " + greeting);
};

const TestModel = mongoose.model("TestModel", testSchema);

const testIns = new TestModel({ name: "testIns" });

testIns.save(function (err, testIns) {
  if (err) return console.error(err);
  testIns.speak();
});

TestModel.find(function (err, models) {
  if (err) return console.error(err);
  console.log("find() - " + models);
});

TestModel.find({ name: /^testIns/ });

app.listen(4000, () => {
  console.log("Listening to port 4000");
});
