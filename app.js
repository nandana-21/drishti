const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const childRoutes = require("./routes/child");
const parentRoutes = require("./routes/parent");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));




app.use("/admin", parentRoutes);
app.use("/", childRoutes);

app.use((req, res, next) => {
  res.render("child", {
    pageTitle: "Child",
    path: "/child",
    activeChild: true,
    productCSS: true,
    
  });
});

app.listen(3000);
